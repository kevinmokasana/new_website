import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon, UserIcon, MessageSquareIcon } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
      title: "Corporate Office",
      subtitle: "Visit Our Headquarters",
      content: "IBC-413, NH 8A, Lakhdirpur, Morbi-363642,\nGujarat, India."
    },
    {
      Icon: PhoneIcon,
      title: "Let's Talk",
      subtitle: "Call Us Anytime",
      content: "+91 95372 55155\n+91 98798 32324"
    },
    {
      Icon: MailIcon,
      title: "Email Us",
      subtitle: "Send Us a Message",
      content: "sales@tilescape.in"
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
    <div className="min-h-screen bg-[#090909] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
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

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section ref={ref} className="w-full py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Page Header */}
            <motion.div variants={itemVariants} className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase">
                  Get In Touch
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </motion.div>
              
              <motion.h1 
                className="font-['Poppins',Helvetica] font-bold text-white text-[48px] md:text-[64px] leading-[1.1] mb-6"
                whileHover={{ 
                  textShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
              >
                Contact Us
              </motion.h1>
              
              <motion.p 
                className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[18px] leading-[28px] max-w-2xl mx-auto"
                whileHover={{ color: "#d0d0d0" }}
              >
                Ready to transform your space? Let's discuss your vision and bring it to life with our premium ceramic solutions.
              </motion.p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl hover:shadow-3xl hover:border-[#2a2a2a] transition-all duration-500 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <motion.div
                        className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#2a2a2a] transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <info.Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[20px] leading-[26px] mb-2">
                        {info.title}
                      </h3>
                      
                      <p className="font-['Poppins',Helvetica] font-medium text-[#888] text-[14px] mb-4 uppercase tracking-wider">
                        {info.subtitle}
                      </p>
                      
                      <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[24px] whitespace-pre-line group-hover:text-[#d0d0d0] transition-colors">
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl overflow-hidden">
                  <CardContent className="p-10">
                    <motion.div className="mb-8">
                      <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[32px] leading-[42px] mb-4">
                        Send us a Message
                      </h2>
                      <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px]">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          className="relative group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full pl-12 pr-4 py-4 bg-[#111] border border-[#333] rounded-xl text-white text-[16px] focus:outline-none focus:border-white focus:bg-[#151515] transition-all duration-300 placeholder-[#666]"
                            required
                          />
                        </motion.div>

                        <motion.div
                          className="relative group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            className="w-full pl-12 pr-4 py-4 bg-[#111] border border-[#333] rounded-xl text-white text-[16px] focus:outline-none focus:border-white focus:bg-[#151515] transition-all duration-300 placeholder-[#666]"
                            required
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          className="relative group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="w-full pl-12 pr-4 py-4 bg-[#111] border border-[#333] rounded-xl text-white text-[16px] focus:outline-none focus:border-white focus:bg-[#151515] transition-all duration-300 placeholder-[#666]"
                          />
                        </motion.div>

                        <motion.div
                          className="relative group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <MessageSquareIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full pl-12 pr-4 py-4 bg-[#111] border border-[#333] rounded-xl text-white text-[16px] focus:outline-none focus:border-white focus:bg-[#151515] transition-all duration-300 placeholder-[#666]"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-4 bg-[#111] border border-[#333] rounded-xl text-white text-[16px] focus:outline-none focus:border-white focus:bg-[#151515] transition-all duration-300 resize-none placeholder-[#666]"
                          required
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-white hover:bg-gray-200 text-black font-['Poppins',Helvetica] font-semibold text-[16px] py-4 rounded-xl border-0 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                          <SendIcon className="w-5 h-5" />
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Map Section */}
              <motion.div variants={itemVariants}>
                <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl h-full overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <motion.div 
                      className="w-full h-full min-h-[700px] bg-[#1a1a1a] rounded-lg overflow-hidden relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Enhanced Map with better styling */}
                      <div className="w-full h-full relative">
                        {/* Map placeholder with modern design */}
                        <div 
                          className="w-full h-full bg-cover bg-center relative"
                          style={{
                            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" stroke-width="1"/>
                                  </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="#1a1a1a"/>
                                <rect width="100%" height="100%" fill="url(#grid)"/>
                                <circle cx="400" cy="300" r="8" fill="#ffffff"/>
                                <circle cx="400" cy="300" r="20" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
                                <circle cx="400" cy="300" r="35" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
                              </svg>
                            `)}`
                          }}
                        >
                          {/* Overlay with company info */}
                          <motion.div 
                            className="absolute top-6 left-6 bg-[#0a0a0a]/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-sm border border-[#333]"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                              <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[18px]">
                                Tilescape Surfaces
                              </h4>
                            </div>
                            
                            <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[13px] leading-[20px] mb-4">
                              IBC-413, NH 8A, Lakhdirpur, Morbi-363642, Gujarat, India
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex text-white">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-sm">★</span>
                                ))}
                              </div>
                              <span className="text-[#b7b7b7] text-[12px]">4.8 (160 reviews)</span>
                            </div>
                            
                            <motion.button
                              className="mt-4 w-full bg-white text-black text-[12px] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Get Directions
                            </motion.button>
                          </motion.div>

                          {/* Manufacturing Unit Info */}
                          <motion.div 
                            className="absolute bottom-6 right-6 bg-[#0a0a0a]/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-sm border border-[#333]"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                              <h4 className="font-['Poppins',Helvetica] font-bold text-white text-[16px]">
                                Manufacturing Unit
                              </h4>
                            </div>
                            
                            <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[12px] leading-[18px]">
                              8-A National Highway, Lakhdirpur Road, Lalpar, Morbi, Gujarat 363642
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div variants={itemVariants} className="mt-20 text-center">
              <div className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] rounded-3xl p-12 border border-[#333]">
                <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] leading-[36px] mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[24px] mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who have transformed their spaces with our premium ceramic solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="bg-white text-black font-['Poppins',Helvetica] font-semibold text-[16px] py-4 px-8 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Consultation
                  </motion.button>
                  
                  <motion.button
                    className="border border-[#333] text-white font-['Poppins',Helvetica] font-medium text-[16px] py-4 px-8 rounded-xl hover:bg-[#1a1a1a] hover:border-white transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Catalogue
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};