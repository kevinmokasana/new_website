import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GlobeIcon, 
  ShipIcon, 
  AwardIcon, 
  UsersIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PackageIcon,
  HeartHandshakeIcon
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ExportPage = (): JSX.Element => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.3);
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.3);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation(0.3);

  const exportServices = [
    {
      Icon: GlobeIcon,
      title: "Global Reach",
      description: "Exporting to over 40+ countries across 5 continents with established distribution networks.",
      features: ["Worldwide shipping", "Local partnerships", "Regional expertise"]
    },
    {
      Icon: ShipIcon,
      title: "Logistics Excellence",
      description: "Comprehensive shipping solutions with secure packaging and timely delivery worldwide.",
      features: ["Sea freight", "Air cargo", "Express delivery"]
    },
    {
      Icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "International quality standards with rigorous testing and certification processes.",
      features: ["ISO certified", "Quality control", "Product testing"]
    },
    {
      Icon: HeartHandshakeIcon,
      title: "Customer Support",
      description: "Dedicated export team providing personalized service from inquiry to delivery.",
      features: ["24/7 support", "Technical assistance", "After-sales service"]
    }
  ];

  const exportStats = [
    { number: "40+", label: "Countries", description: "Global presence" },
    { number: "15+", label: "Years Experience", description: "Export expertise" },
    { number: "1000+", label: "Happy Clients", description: "Worldwide customers" },
    { number: "50K+", label: "Shipments", description: "Successful deliveries" }
  ];

  const exportCountries = [
    { region: "Europe", countries: ["Germany", "France", "Italy", "Spain", "UK", "Netherlands"] },
    { region: "North America", countries: ["USA", "Canada", "Mexico"] },
    { region: "Asia Pacific", countries: ["Australia", "Japan", "Singapore", "Thailand", "Philippines"] },
    { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"] },
    { region: "Africa", countries: ["South Africa", "Nigeria", "Kenya", "Egypt"] },
    { region: "South America", countries: ["Brazil", "Argentina", "Chile"] }
  ];

  const productCategories = [
    {
      title: "Ceramic Tiles",
      description: "Premium quality ceramic tiles for residential and commercial applications",
      sizes: ["300x300mm", "400x400mm", "600x600mm"],
      finishes: ["Glossy", "Matt", "Rustic"]
    },
    {
      title: "Porcelain Tiles",
      description: "High-performance porcelain tiles with superior durability and aesthetics",
      sizes: ["600x600mm", "800x800mm", "600x1200mm"],
      finishes: ["Polished", "Lapato", "Natural"]
    },
    {
      title: "GVT/PGVT Tiles",
      description: "Glazed vitrified tiles with advanced technology and stunning designs",
      sizes: ["600x600mm", "800x800mm", "1200x1200mm"],
      finishes: ["High Gloss", "Carving", "Sugar"]
    },
    {
      title: "Sanitaryware",
      description: "Complete range of bathroom fixtures and accessories",
      products: ["Wash Basins", "Water Closets", "Pedestals"],
      features: ["Water efficient", "Durable", "Stylish"]
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

      {/* Hero Section */}
      <section ref={heroRef} className="w-full py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[11px] lg:text-[13px] tracking-[2px] lg:tracking-[3px] uppercase">
                  Global Export Excellence
                </span>
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <motion.h1 
                className="font-['Poppins',Helvetica] font-bold text-white text-[32px] lg:text-[48px] xl:text-[64px] leading-[1.1] mb-4 lg:mb-6"
                whileHover={{ 
                  textShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
              >
                Delivering Premium Tiles<br />
                and Sanitaryware Worldwide
              </motion.h1>
              
              <motion.p 
                className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] max-w-3xl mx-auto px-4"
                whileHover={{ color: "#d0d0d0" }}
              >
                Exporting premium tiles and sanitaryware worldwide, offering exceptional quality, timely delivery, and tailored solutions for global markets.
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              variants={itemVariants}
              className="relative w-full h-[250px] lg:h-[400px] rounded-2xl overflow-hidden group"
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
                  className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-['Poppins',Helvetica] font-bold text-lg lg:text-2xl mb-1 lg:mb-2">Global Excellence</h3>
                  <p className="font-['Roboto',Helvetica] text-xs lg:text-sm opacity-80">Premium ceramic solutions worldwide</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Export Section */}
      <section ref={aboutRef} className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={aboutVisible ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div variants={itemVariants}>
                <div className="mb-6">
                  <span className="font-['Poppins',Helvetica] font-normal text-white text-[11px] lg:text-[13px] tracking-[2px] lg:tracking-[3px] uppercase mb-4 block">
                    Your Trusted Partner
                  </span>
                  <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] lg:text-[40px] leading-[1.2] mb-4 lg:mb-6">
                    Your Trusted Partner<br />
                    Worldwide
                  </h2>
                </div>
                
                <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] mb-4 lg:mb-6">
                  At Tessera Surfaces, we take pride in our global presence, exporting a diverse range of high-quality products, including ceramic tiles, porcelain tiles, GVT/PGVT tiles, sanitaryware, and kitchen sinks. With years of experience in international trade, we cater to markets across continents, providing superior products that meet the highest industry standards.
                </p>
                
                <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] mb-6 lg:mb-8">
                  Our products are crafted with precision and designed to suit various residential, commercial, and industrial applications. We ensure the safe and timely delivery of every order, maintaining long-term partnerships with customers around the world.
                </p>

                <div className="space-y-3 lg:space-y-4">
                  {["Premium Quality Products", "Global Shipping Network", "24/7 Customer Support", "Competitive Pricing"].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircleIcon className="w-4 lg:w-5 h-4 lg:h-5 text-white flex-shrink-0" />
                      <span className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[15px]">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div 
                  className="w-full h-[300px] lg:h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Export Services */}
      <section ref={servicesRef} className="w-full py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[11px] lg:text-[13px] tracking-[2px] lg:tracking-[3px] uppercase">
                  Export Services
                </span>
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] lg:text-[40px] leading-[1.2] mb-4">
                Comprehensive Export Solutions
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] max-w-2xl mx-auto px-4">
                From initial inquiry to post-sale support, we provide end-to-end export services tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {exportServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-xl hover:shadow-2xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-4 lg:gap-6">
                        <motion.div
                          className="w-12 lg:w-16 h-12 lg:h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2a2a2a] transition-colors duration-300"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <service.Icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] mb-2 lg:mb-3">
                            {service.title}
                          </h3>
                          
                          <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] mb-4 group-hover:text-[#d0d0d0] transition-colors">
                            {service.description}
                          </p>

                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <ArrowRightIcon className="w-3 h-3 text-white" />
                                <span className="font-['Roboto',Helvetica] font-normal text-[#888] text-[12px] lg:text-[13px]">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] lg:text-[40px] leading-[1.2] mb-4">
                Export Excellence in Numbers
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] max-w-2xl mx-auto px-4">
                Our commitment to quality and service excellence reflected in our global achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {exportStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center group"
                >
                  <div className="bg-[#111] rounded-2xl p-6 lg:p-8 hover:bg-[#1a1a1a] transition-all duration-300 border border-[#1a1a1a] hover:border-[#2a2a2a]">
                    <motion.h3 
                      className="font-['Poppins',Helvetica] font-bold text-white text-[32px] lg:text-[48px] leading-[1] mb-2"
                      whileHover={{ 
                        textShadow: "0 0 20px rgba(255,255,255,0.5)"
                      }}
                    >
                      {stat.number}
                    </motion.h3>
                    <h4 className="font-['Poppins',Helvetica] font-semibold text-white text-[16px] lg:text-[18px] mb-1 lg:mb-2 group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#888] text-[12px] lg:text-[14px] group-hover:text-[#aaa] transition-colors">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[11px] lg:text-[13px] tracking-[2px] lg:tracking-[3px] uppercase">
                  Export Products
                </span>
                <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
              </div>
              
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] lg:text-[40px] leading-[1.2] mb-4">
                Premium Product Range
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] max-w-2xl mx-auto px-4">
                Comprehensive collection of ceramic tiles, porcelain tiles, and sanitaryware for global markets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-xl hover:shadow-2xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                    <CardContent className="p-6 lg:p-8">
                      <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] mb-3">
                        {category.title}
                      </h3>
                      
                      <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] mb-4 group-hover:text-[#d0d0d0] transition-colors">
                        {category.description}
                      </p>

                      <div className="space-y-3">
                        {category.sizes && (
                          <div>
                            <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] mb-2">Available Sizes:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.sizes.map((size, sizeIndex) => (
                                <span key={sizeIndex} className="bg-[#1a1a1a] text-white text-[12px] px-3 py-1 rounded-full">
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {category.finishes && (
                          <div>
                            <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] mb-2">Finishes:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.finishes.map((finish, finishIndex) => (
                                <span key={finishIndex} className="bg-[#1a1a1a] text-white text-[12px] px-3 py-1 rounded-full">
                                  {finish}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {category.products && (
                          <div>
                            <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] mb-2">Products:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.products.map((product, productIndex) => (
                                <span key={productIndex} className="bg-[#1a1a1a] text-white text-[12px] px-3 py-1 rounded-full">
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {category.features && (
                          <div>
                            <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.features.map((feature, featureIndex) => (
                                <span key={featureIndex} className="bg-[#1a1a1a] text-white text-[12px] px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section ref={mapRef} className="w-full py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mapVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] lg:text-[40px] leading-[1.2] mb-4">
                Global Presence
              </h2>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] max-w-2xl mx-auto px-4">
                Our products reach customers across continents, establishing strong partnerships worldwide
              </p>
            </motion.div>

            {/* World Map Placeholder */}
            <motion.div 
              variants={itemVariants}
              className="relative w-full h-[400px] lg:h-[600px] bg-[#111] rounded-2xl overflow-hidden mb-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="worldGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#333" stroke-width="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="#1a1a1a"/>
                      <rect width="100%" height="100%" fill="url(#worldGrid)"/>
                      <!-- Continents simplified shapes -->
                      <path d="M 150 200 Q 200 180 250 200 Q 300 220 350 200 Q 400 180 450 200 L 450 300 Q 400 320 350 300 Q 300 280 250 300 Q 200 320 150 300 Z" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
                      <path d="M 500 150 Q 550 130 600 150 Q 650 170 700 150 L 700 250 Q 650 270 600 250 Q 550 230 500 250 Z" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
                      <path d="M 750 180 Q 800 160 850 180 Q 900 200 950 180 L 950 280 Q 900 300 850 280 Q 800 260 750 280 Z" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
                      <!-- Export points -->
                      <circle cx="300" cy="250" r="6" fill="#ffffff" opacity="0.8"/>
                      <circle cx="600" cy="200" r="6" fill="#ffffff" opacity="0.8"/>
                      <circle cx="850" cy="230" r="6" fill="#ffffff" opacity="0.8"/>
                      <!-- Connection lines -->
                      <line x1="300" y1="250" x2="600" y2="200" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
                      <line x1="600" y1="200" x2="850" y2="230" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
                    </svg>
                  `)}`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <motion.div 
                  className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-['Poppins',Helvetica] font-bold text-lg lg:text-2xl mb-1 lg:mb-2">Worldwide Network</h3>
                  <p className="font-['Roboto',Helvetica] text-xs lg:text-sm opacity-80">Connecting continents through quality</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {exportCountries.map((region, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-[#111] border border-[#1a1a1a] shadow-xl hover:shadow-2xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                    <CardContent className="p-6">
                      <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] mb-4 group-hover:text-gray-200 transition-colors">
                        {region.region}
                      </h3>
                      
                      <div className="space-y-2">
                        {region.countries.map((country, countryIndex) => (
                          <div key={countryIndex} className="flex items-center gap-2">
                            <MapPinIcon className="w-3 h-3 text-white" />
                            <span className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] group-hover:text-[#d0d0d0] transition-colors">
                              {country}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-[#333]"
            >
              <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] mb-4">
                Ready to Export with Us?
              </h3>
              <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
                Join our global network of satisfied customers. Contact us today to discuss your export requirements and discover how we can help grow your business worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-black font-['Poppins',Helvetica] font-semibold text-[14px] lg:text-[16px] py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Export Quote
                </motion.button>
                
                <motion.button
                  className="border border-[#333] text-white font-['Poppins',Helvetica] font-medium text-[14px] lg:text-[16px] py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:bg-[#1a1a1a] hover:border-white transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Catalogue
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