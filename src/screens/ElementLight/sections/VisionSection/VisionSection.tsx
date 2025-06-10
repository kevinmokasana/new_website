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
        className="relative h-9 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => navigate("/")}
      >
        <div className="font-['Poppins',Helvetica] font-extrabold text-white text-[28px] leading-[36.4px]">
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
            className={`relative font-['Poppins',Helvetica] font-medium text-[14px] leading-[18px] transition-all duration-300 px-4 py-2 rounded-md ${
              activeNav === item.id ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
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
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-md opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </motion.nav>
    </motion.header>
  );
};