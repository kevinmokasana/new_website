import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export const ContactUsPage = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      Icon: MapPinIcon,
      title: "Address",
      content: "Survey No. 171/172, Bh. Tekza Ceramica, Sartanpar Road,\nRatavirda Village, Wankaner - 363621, Dist. Morbi,\nGujarat, INDIA."
    },
    {
      Icon: PhoneIcon,
      title: "Phone",
      content: "+91 95862 38772\n+91 90990 90129"
    },
    {
      Icon: MailIcon,
      title: "Email",
      content: "info@marfiltiles.net"
    }
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
    <section ref={ref} className="w-full bg-[#f8f9fa] py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #333 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, #333 1px, transparent 1px)`,
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1 
              className="font-['Poppins',Helvetica] font-bold text-[#333] text-[48px] leading-[60px] mb-4"
              whileHover={{ 
                textShadow: "0 0 20px rgba(0,0,0,0.1)"
              }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="font-['Roboto',Helvetica] font-normal text-[#666] text-[18px] leading-[28px] max-w-2xl mx-auto"
              whileHover={{ color: "#333" }}
            >
              Get in touch with us for any inquiries about our premium ceramic tiles and services
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#555] transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <info.Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-[#333] text-[20px] leading-[26px] mb-4">
                      {info.title}
                    </h3>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#666] text-[15px] leading-[24px] whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8">
                  <motion.h2 
                    className="font-['Poppins',Helvetica] font-bold text-[#333] text-[32px] leading-[42px] mb-8"
                    whileHover={{ 
                      textShadow: "0 0 10px rgba(0,0,0,0.1)"
                    }}
                  >
                    Get in Touch
                  </motion.h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block font-['Poppins',Helvetica] font-medium text-[#333] text-[14px] mb-2">
                          NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-0 py-3 border-0 border-b-2 border-[#ddd] bg-transparent text-[#333] text-[16px] focus:outline-none focus:border-[#333] transition-colors"
                          required
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block font-['Poppins',Helvetica] font-medium text-[#333] text-[14px] mb-2">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-0 py-3 border-0 border-b-2 border-[#ddd] bg-transparent text-[#333] text-[16px] focus:outline-none focus:border-[#333] transition-colors"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block font-['Poppins',Helvetica] font-medium text-[#333] text-[14px] mb-2">
                          PHONE
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-0 py-3 border-0 border-b-2 border-[#ddd] bg-transparent text-[#333] text-[16px] focus:outline-none focus:border-[#333] transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block font-['Poppins',Helvetica] font-medium text-[#333] text-[14px] mb-2">
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-0 py-3 border-0 border-b-2 border-[#ddd] bg-transparent text-[#333] text-[16px] focus:outline-none focus:border-[#333] transition-colors"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block font-['Poppins',Helvetica] font-medium text-[#333] text-[14px] mb-2">
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-0 py-3 border-0 border-b-2 border-[#ddd] bg-transparent text-[#333] text-[16px] focus:outline-none focus:border-[#333] transition-colors resize-none"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-[#333] hover:bg-[#555] text-white font-['Poppins',Helvetica] font-medium text-[16px] py-4 rounded-none transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white border-none shadow-lg h-full">
                <CardContent className="p-0 h-full">
                  <motion.div 
                    className="w-full h-full min-h-[600px] bg-gray-200 rounded-lg overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Embedded Google Map */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5234567890123!2d70.12345678901234!3d22.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA3MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Tessera Granito Location"
                      className="absolute inset-0"
                    />
                    
                    {/* Map overlay with company info */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <h4 className="font-['Poppins',Helvetica] font-semibold text-[#333] text-[16px] mb-2">
                        Tessera Granito
                      </h4>
                      <p className="font-['Roboto',Helvetica] font-normal text-[#666] text-[12px] leading-[18px]">
                        Survey No. 171/172, Bh. Tekza Ceramica, Sartanpar Road, Ratavirda Village, Wankaner - 363621
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-sm">★</span>
                          ))}
                        </div>
                        <span className="ml-2 text-[#666] text-[12px]">160 reviews</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Connect with Us Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#333] text-[24px] leading-[32px] mb-4">
              Connect with Us
            </h3>
            <p className="font-['Roboto',Helvetica] font-normal text-[#666] text-[16px] leading-[24px] mb-8">
              Follow us on social media for latest updates and inspiration
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { name: "Facebook", bg: "#3b5998" },
                { name: "Instagram", bg: "#b219af" },
                { name: "LinkedIn", bg: "#0077b5" },
                { name: "Twitter", bg: "#1da1f2" }
              ].map((social, index) => (
                <motion.div
                  key={social.name}
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-white font-bold"
                  style={{ backgroundColor: social.bg }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.name[0]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};