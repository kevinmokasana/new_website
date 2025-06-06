import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const UniqueFeaturesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const socialIcons = [
    { Icon: FacebookIcon, bg: "#3b5998", name: "Facebook" },
    { Icon: LinkedinIcon, bg: "#0077b5", name: "LinkedIn" },
    { Icon: InstagramIcon, bg: "#b219af", name: "Instagram" },
  ];

  const contactInfo = [
    {
      title: "For Export",
      name: "Mr. Bipin",
      phone: "+91 75748 88789",
    },
    {
      title: "For Domestic",
      name: "Mr. Gautam",
      phone: "+91 81402 84883",
    },
  ];

  const tollFreeInfo = [
    { Icon: PhoneIcon, text: "1800 420 9090", label: "Call us" },
    { Icon: MailIcon, text: "sales@tesseragranito.com", label: "Email us" },
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
    <section ref={ref} className="w-full py-8 bg-black bg-opacity-80 bg-[url(/section.png)] bg-cover relative overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between gap-8 max-w-[1140px] mx-auto"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <motion.div 
              className="w-[209px] h-[53px] bg-[url(/-2446868956176.png)] bg-[100%_100%]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.p 
              className="font-normal text-[#b7b7b7] text-[15px] leading-[30px] font-['Roboto',Helvetica] hover:text-[#d0d0d0] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              To create a dream place to live
              <br />
              by providing luxury solution.
            </motion.p>

            <div className="flex space-x-3">
              {socialIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 rounded-2xl flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: item.bg }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={item.name}
                >
                  <item.Icon className="w-4 h-4 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <motion.h2 
              className="font-semibold text-white text-[26px] leading-[26px] font-['Poppins',Helvetica]"
              whileHover={{ 
                textShadow: "0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              Contact Us
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col space-y-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-bold text-white text-base leading-[20.8px] font-['Poppins',Helvetica] group-hover:text-gray-200 transition-colors">
                    {info.title}
                  </h3>
                  <p className="font-normal text-white text-base leading-[20.8px] font-['Poppins',Helvetica] group-hover:text-gray-200 transition-colors">
                    {info.name}
                  </p>
                  <motion.div 
                    className="flex items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-white mr-2 group-hover:text-green-400 transition-colors" />
                    <span className="font-normal text-white text-base leading-[20.8px] font-['Poppins',Helvetica] group-hover:text-gray-200 transition-colors">
                      {info.phone}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Toll Free Card */}
          <motion.div variants={itemVariants}>
            <Card className="w-full md:w-[275px] bg-[#0e0e0e] rounded-[5px] border-2 border-solid border-[#353535] hover:border-[#555555] transition-all duration-300 group">
              <CardContent className="p-4">
                <motion.h2 
                  className="font-semibold text-[#cfcfcf] text-[26px] leading-[26px] mb-6 font-['Poppins',Helvetica] group-hover:text-white transition-colors"
                  whileHover={{ 
                    textShadow: "0 0 10px rgba(255,255,255,0.3)"
                  }}
                >
                  Toll Free
                </motion.h2>

                <div className="flex flex-col space-y-4">
                  {tollFreeInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      title={item.label}
                    >
                      <item.Icon className="w-3.5 h-3.5 text-[#cfcfcf] mr-2 group-hover:text-white transition-colors" />
                      <span className="font-normal text-[#cfcfcf] text-[13px] leading-[16.9px] font-['Poppins',Helvetica] group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};