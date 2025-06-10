import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const VisionSection = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState("home");
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "catalogue", label: "Catalogue", path: "/catalogue" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "contact", label: "Contact Us", path: "/contact-us" }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveNav(item.id);
    navigate(item.path);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-24 flex items-center justify-between px-12 bg-transparent relative z-50"
    >
      <motion.div 
        className="relative h-9"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="font-['Poppins',Helvetica] font-extrabold text-white text-[28px] leading-[36.4px] cursor-pointer">
          Tessera
        </div>
      </motion.div>

      {/* Navigation Menu */}
      <motion.nav 
        className="flex items-center gap-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`relative font-['Poppins',Helvetica] font-medium text-[14px] leading-[18px] transition-all duration-300 ${
              activeNav === item.id ? "text-white" : "text-gray-300 hover:text-white"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 300
            }}
          >
            {item.label}
            
            {/* Active indicator */}
            <AnimatePresence>
              {activeNav === item.id && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-md opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        ))}
      </motion.nav>
    </motion.header>
  );
};