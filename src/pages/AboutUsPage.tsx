import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TargetIcon, 
  EyeIcon, 
  HeartIcon, 
  AwardIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  PaletteIcon,
  TruckIcon,
  UsersIcon,
  StarIcon,
  CheckCircleIcon,
  SparklesIcon
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const AboutUsPage = (): JSX.Element => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.3);
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.3);
  const { ref: specsRef, isVisible: specsVisible } = useScrollAnimation(0.3);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);

  const missionVisionValues = [
    {
      Icon: TargetIcon,
      title: "Our Mission",
      description: "To revolutionize living spaces by providing premium ceramic tiles that combine cutting-edge technology with timeless design. We strive to deliver exceptional quality products while maintaining the highest standards of customer service and environmental responsibility."
    },
    {
      Icon: EyeIcon,
      title: "Our Vision",
      description: "To become the leading global provider of ceramic tiles, recognized for innovation, quality, and design excellence. We envision a world where every space tells a unique story through our premium ceramic solutions."
    },
    {
      Icon: HeartIcon,
      title: "Our Values",
      description: "Quality without compromise, innovation through technology, customer-centric approach, environmental stewardship, and continuous improvement. These values guide every decision we make and every product we create."
    }
  ];

  const technicalSpecs = [
    { icon: "💧", title: "Waterproof Surface", description: "Complete water resistance" },
    { icon: "🧪", title: "Chemical Resistance", description: "Superior chemical protection" },
    { icon: "❄️", title: "Frost Resistance", description: "Weather-resistant durability" },
    { icon: "🔥", title: "Fire & Heat Resistance", description: "High temperature tolerance" },
    { icon: "💪", title: "Wear Resistance", description: "Long-lasting performance" },
    { icon: "🌱", title: "Eco-Friendly", description: "Environmentally responsible" },
    { icon: "⚡", title: "Lightweight", description: "Easy installation" },
    { icon: "🛡️", title: "Impact Resistant", description: "Superior durability" },
    { icon: "✨", title: "Hygienic Surface", description: "Easy to clean & maintain" },
    { icon: "🎨", title: "Versatile Design", description: "Endless possibilities" },
    { icon: "📐", title: "Rectified Edges", description: "Perfect alignment" },
    { icon: "🏔️", title: "Natural Stone Look", description: "Authentic appearance" }
  ];

  const benefits = [
    { Icon: CheckCircleIcon, title: "100% Customer Satisfaction", description: "Guaranteed quality and service" },
    { Icon: AwardIcon, title: "Premium Quality", description: "Award-winning ceramic solutions" },
    { Icon: ClockIcon, title: "Timely Delivery", description: "On-schedule project completion" },
    { Icon: PaletteIcon, title: "1000+ Designs", description: "Endless design possibilities" },
    { Icon: ShieldCheckIcon, title: "Highly Stain Resistant", description: "Superior surface protection" },
    { Icon: SparklesIcon, title: "Resists Wear", description: "Long-lasting beauty" },
    { Icon: TruckIcon, title: "Natural Raw Materials", description: "Sustainable sourcing" },
    { Icon: StarIcon, title: "Highly Durable", description: "Built to last generations" }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", description: "Industry expertise" },
    { number: "1000+", label: "Unique Designs", description: "Creative solutions" },
    { number: "40+", label: "Export Countries", description: "Global presence" },
    { number: "10K+", label: "Happy Customers", description: "Satisfied clients worldwide" }
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

      {/* Hero Section */}
      <section ref={heroRef} className="w-full py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase">
                  Welcome to Tessera
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <motion.h1 
                className="font-['Poppins',Helvetica] font-bold text-white text-[48px] md:text-[64px] leading-[1.1] mb-6"
                whileHover={{ 
                  textShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
              >
                About Us
              </motion.h1>
              
              <motion.p 
                className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[18px] leading-[28px] max-w-3xl mx-auto"
                whileHover={{ color: "#d0d0d0" }}
              >
                Benchmarks of Beauty. Echelons of Excellence. Discover the story behind our commitment to creating extraordinary ceramic solutions that transform spaces into works of art.
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              variants={itemVariants}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-8 left-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-['Poppins',Helvetica] font-bold text-2xl mb-2">Crafting Excellence</h3>
                  <p className="font-['Roboto',Helvetica] text-sm opacity-80">Premium ceramic solutions for modern living</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2] mb-6">
                  Benchmarks of Beauty.<br />
                  Echelons of Excellence.
                </h2>
              </div>
              
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[28px] mb-6">
                Tessera Surfaces is a leading provider of ceramic tiles in India, providing customers with superior quality and design. Our tiles are crafted with cutting-edge technology to ensure that they are reliable and easy to maintain.
              </p>
              
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[28px]">
                With a wide range of options available, we can help you find the perfect tile to suit your needs. From residential to commercial spaces, we have tiles that will suit any application, transforming ordinary spaces into extraordinary experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="w-full h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={missionRef} className="w-full py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase">
                  Our Foundation
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2]">
                Mission, Vision & Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionVisionValues.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl hover:shadow-3xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#2a2a2a] transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[24px] leading-[30px] mb-4">
                        {item.title}
                      </h3>
                      
                      <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[24px] group-hover:text-[#d0d0d0] transition-colors">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section ref={specsRef} className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={specsVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2] mb-4">
                Technical Specifications
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] max-w-2xl mx-auto">
                Our tiles are engineered with advanced technology to deliver superior performance across all applications
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="bg-[#111] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300 group-hover:shadow-lg">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {spec.icon}
                    </div>
                    <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] leading-[18px] mb-2 group-hover:text-gray-200 transition-colors">
                      {spec.title}
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#888] text-[12px] group-hover:text-[#aaa] transition-colors">
                      {spec.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="w-full py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase">
                  Why Choose Us
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2] mb-4">
                Benefits to Choose Us
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] max-w-2xl mx-auto">
                Experience the difference with our premium ceramic solutions and exceptional service standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-xl hover:shadow-2xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2a2a2a] transition-colors duration-300"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <benefit.Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[16px] leading-[22px] mb-3">
                        {benefit.title}
                      </h3>
                      
                      <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] leading-[20px] group-hover:text-[#d0d0d0] transition-colors">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2] mb-4">
                Our Achievements
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center group"
                >
                  <div className="bg-[#111] rounded-2xl p-8 hover:bg-[#1a1a1a] transition-all duration-300 border border-[#1a1a1a] hover:border-[#2a2a2a]">
                    <motion.h3 
                      className="font-['Poppins',Helvetica] font-bold text-white text-[48px] leading-[1] mb-2"
                      whileHover={{ 
                        textShadow: "0 0 20px rgba(255,255,255,0.5)"
                      }}
                    >
                      {stat.number}
                    </motion.h3>
                    <h4 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] mb-2 group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#888] text-[14px] group-hover:text-[#aaa] transition-colors">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="w-full py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div 
                className="w-full h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-6">
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] uppercase mb-4 block">
                  Quality Commitment
                </span>
                <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[1.2] mb-6">
                  Trusted Excellence<br />
                  in Every Tile
                </h2>
              </div>
              
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[28px] mb-6">
                At Tessera Surfaces, we take pride in being one of the most trusted suppliers of tiles in India. Our commitment to quality drives everything we do. From material procurement to final testing, every step is subject to strict quality control.
              </p>
              
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[28px] mb-8">
                We continue to meet the changing needs of our customers, helping them simplify their living spaces with our high-quality tiles that combine functionality with aesthetic appeal.
              </p>

              <div className="space-y-4">
                {["Premium Raw Materials", "Advanced Manufacturing", "Rigorous Quality Testing", "Customer-Centric Design"].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                    <span className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] rounded-3xl p-12 border border-[#333]"
            >
              <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[32px] leading-[40px] mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] leading-[24px] mb-8 max-w-2xl mx-auto">
                Discover our premium ceramic collection and let our experts help you create the perfect space that reflects your unique style and vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-black font-['Poppins',Helvetica] font-semibold text-[16px] py-4 px-8 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Collection
                </motion.button>
                
                <motion.button
                  className="border border-[#333] text-white font-['Poppins',Helvetica] font-medium text-[16px] py-4 px-8 rounded-xl hover:bg-[#1a1a1a] hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Experts
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};