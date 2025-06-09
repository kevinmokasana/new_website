import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const UniqueFeaturesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const socialIcons = [
    { Icon: FacebookIcon, bg: "#3b5998", name: "Facebook", href: "#" },
    { Icon: LinkedinIcon, bg: "#0077b5", name: "LinkedIn", href: "#" },
    { Icon: InstagramIcon, bg: "#b219af", name: "Instagram", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const contactInfo = [
    {
      Icon: MapPinIcon,
      title: "Address",
      content: "123 Ceramic Street, Tile City, TC 12345",
    },
    {
      Icon: PhoneIcon,
      title: "Phone",
      content: "+91 1800 420 9090",
    },
    {
      Icon: MailIcon,
      title: "Email",
      content: "info@tesseragranito.com",
    },
    {
      Icon: ClockIcon,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-['Poppins',Helvetica] font-extrabold text-white text-[28px] leading-[36.4px] mb-4">
                Tessera
              </h3>
            </motion.div>

            <motion.p 
              className="font-normal text-[#b7b7b7] text-[15px] leading-[28px] font-['Roboto',Helvetica] hover:text-[#d0d0d0] transition-colors duration-300 mb-6"
              whileHover={{ x: 5 }}
            >
              Creating dream spaces with luxury ceramic solutions. Experience premium quality tiles with innovative designs and exceptional craftsmanship.
            </motion.p>

            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: item.bg }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={item.name}
                >
                  <item.Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h4 
              className="font-['Poppins',Helvetica] font-semibold text-white text-[20px] leading-[26px] mb-6"
              whileHover={{ 
                textShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              Quick Links
            </motion.h4>

            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[24px] hover:text-white transition-all duration-300 group"
                  whileHover={{ x: 10, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative">
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.h4 
              className="font-['Poppins',Helvetica] font-semibold text-white text-[20px] leading-[26px] mb-6"
              whileHover={{ 
                textShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              Contact Information
            </motion.h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-1 group-hover:bg-[#2a2a2a] transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.Icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h5 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] leading-[18px] mb-1 group-hover:text-gray-200 transition-colors">
                      {info.title}
                    </h5>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[13px] leading-[20px] group-hover:text-[#d0d0d0] transition-colors">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-[#2a2a2a] pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] leading-[24px] mb-2">
                Stay Updated
              </h4>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] leading-[22px]">
                Subscribe to our newsletter for latest updates and offers
              </p>
            </div>
            <motion.div 
              className="flex gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded text-white text-sm focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                className="px-6 py-2 bg-white text-black rounded font-medium text-sm hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-[#2a2a2a] pt-8 text-center"
        >
          <motion.div 
            className="font-['Roboto',Helvetica] font-normal text-[#888] text-[13px] leading-[20px]"
            whileHover={{ scale: 1.02, color: "#aaa" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © {new Date().getFullYear()} TESSERA GRANITO. All rights reserved.
            <br />
            Design and Developed by ROEX DESIGN.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};