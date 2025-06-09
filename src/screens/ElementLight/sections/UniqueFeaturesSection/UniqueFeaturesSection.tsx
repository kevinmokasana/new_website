import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const UniqueFeaturesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const socialIcons = [
    { Icon: FacebookIcon, bg: "#3b5998", name: "Facebook", href: "#" },
    { Icon: LinkedinIcon, bg: "#0077b5", name: "LinkedIn", href: "#" },
    { Icon: InstagramIcon, bg: "#b219af", name: "Instagram", href: "#" },
  ];

  const contactInfo = [
    {
      Icon: MapPinIcon,
      title: "Address",
      content: "Survey No. 171/172, Bh. Tekza Ceramica, Sartanpar Road, Ratavirda Village, Wankaner - 363621, Dist. Morbi, Gujarat, INDIA.",
    },
    {
      Icon: PhoneIcon,
      title: "Phone",
      content: "+91 95862 38772 | +91 90990 90129",
    },
    {
      Icon: MailIcon,
      title: "Email",
      content: "info@tesseragranito.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer ref={ref} className="w-full bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-['Poppins',Helvetica] font-extrabold text-white text-[32px] leading-[42px] mb-4">
                Tessera
              </h3>
            </motion.div>

            <motion.p 
              className="font-normal text-[#b7b7b7] text-[16px] leading-[28px] font-['Roboto',Helvetica] hover:text-[#d0d0d0] transition-colors duration-300 mb-8"
              whileHover={{ x: 5 }}
            >
              Creating dream spaces with luxury ceramic solutions. Experience premium quality tiles with innovative designs and exceptional craftsmanship that transform your vision into reality.
            </motion.p>

            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: item.bg }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={item.name}
                >
                  <item.Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-['Poppins',Helvetica] font-semibold text-white text-[24px] leading-[32px] mb-8"
              whileHover={{ 
                textShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              Contact Information
            </motion.h4>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-1 group-hover:bg-[#2a2a2a] transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h5 className="font-['Poppins',Helvetica] font-medium text-white text-[16px] leading-[22px] mb-2 group-hover:text-gray-200 transition-colors">
                      {info.title}
                    </h5>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] leading-[22px] group-hover:text-[#d0d0d0] transition-colors">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};