import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  ShieldCheckIcon, 
  AwardIcon, 
  GlobeIcon, 
  TruckIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  SparklesIcon
} from "lucide-react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const QualitySection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const qualityFeatures = [
    {
      Icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Rigorous testing ensures every tile meets international standards for durability and performance.",
      stat: "99.9%",
      statLabel: "Quality Rate"
    },
    {
      Icon: AwardIcon,
      title: "Award Winning",
      description: "Recognized by industry leaders for excellence in design and manufacturing innovation.",
      stat: "15+",
      statLabel: "Awards Won"
    },
    {
      Icon: GlobeIcon,
      title: "Global Reach",
      description: "Trusted by customers worldwide with exports to over 40 countries across 5 continents.",
      stat: "40+",
      statLabel: "Countries"
    },
    {
      Icon: TruckIcon,
      title: "Reliable Delivery",
      description: "On-time delivery with secure packaging ensuring your tiles arrive in perfect condition.",
      stat: "98%",
      statLabel: "On-Time"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "CE Marking", description: "European Conformity" },
    { name: "GREENGUARD", description: "Low Chemical Emissions" }
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
    <section ref={ref} className="w-full bg-[#0a0a0a] py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, white 2px, transparent 2px),
                             radial-gradient(circle at 70% 30%, white 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="font-['Poppins',Helvetica] font-normal text-white text-[11px] lg:text-[13px] tracking-[2px] lg:tracking-[3px] uppercase">
                Excellence Standards
              </span>
              <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
            
            <motion.h2 
              className="font-['Poppins',Helvetica] font-bold text-white text-[32px] lg:text-[48px] leading-[1.1] mb-4 lg:mb-6"
              whileHover={{ 
                textShadow: "0 0 30px rgba(255,255,255,0.3)"
              }}
            >
              Quality & Innovation
            </motion.h2>
            
            <motion.p 
              className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] max-w-3xl mx-auto"
              whileHover={{ color: "#d0d0d0" }}
            >
              Our commitment to excellence drives every aspect of our manufacturing process, from raw material selection to final quality control.
            </motion.p>
          </motion.div>

          {/* Quality Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#090909] border border-[#1a1a1a] shadow-xl hover:shadow-2xl hover:border-[#2a2a2a] transition-all duration-500 group h-full">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <motion.div
                        className="w-12 lg:w-16 h-12 lg:h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2a2a2a] transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.Icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] mb-2 lg:mb-3">
                          {feature.title}
                        </h3>
                        
                        <p className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] mb-4 group-hover:text-[#d0d0d0] transition-colors">
                          {feature.description}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="font-['Poppins',Helvetica] font-bold text-white text-[20px] lg:text-[24px]">
                            {feature.stat}
                          </span>
                          <span className="font-['Roboto',Helvetica] font-normal text-[#888] text-[12px] lg:text-[14px]">
                            {feature.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-[20px] lg:text-[24px] mb-8 lg:mb-12">
              Certifications & Standards
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-4 lg:p-6 hover:bg-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-300">
                    <div className="w-8 lg:w-12 h-8 lg:h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:bg-[#2a2a2a] transition-colors">
                      <CheckCircleIcon className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
                    </div>
                    <h4 className="font-['Poppins',Helvetica] font-medium text-white text-[14px] lg:text-[16px] mb-1 lg:mb-2">
                      {cert.name}
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-normal text-[#888] text-[12px] lg:text-[14px] group-hover:text-[#aaa] transition-colors">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};