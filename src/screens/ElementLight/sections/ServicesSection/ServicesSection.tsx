import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ServicesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [hoveredFinish, setHoveredFinish] = useState<string | null>(null);

  const finishTypes = [
    { id: "glossy", label: "Glossy", description: "High shine finish for modern spaces" },
    { id: "high-gloss", label: "High Gloss", description: "Ultra reflective surface" },
    { id: "rustic", label: "Rustic", description: "Natural textured appearance" },
    { id: "satin", label: "Satin", description: "Smooth semi-gloss finish" },
    { id: "sugar", label: "Sugar", description: "Subtle textured surface" },
    { id: "carving", label: "Carving", description: "Decorative relief patterns" },
    { id: "full-body", label: "Full Body", description: "Consistent color throughout" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section ref={ref} className="w-full py-[120px] bg-[#090909] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Header section */}
          <motion.div variants={itemVariants} className="relative mb-8">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-[60px] h-px bg-white"
                initial={{ width: 0 }}
                animate={isVisible ? { width: 60 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.span 
                className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3.00px]"
                whileHover={{ scale: 1.1, color: "#f0f0f0" }}
              >
                WHAT WE OFFER
              </motion.span>
            </div>

            <motion.h2 
              className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[60px] mt-4"
              whileHover={{ 
                textShadow: "0 0 20px rgba(255,255,255,0.5)"
              }}
            >
              Finish We Provide
            </motion.h2>

            <motion.p 
              className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[30px] mt-6 hover:text-[#d0d0d0] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Many of the surface coverings we provide are offered in a choice of
              up to seven finishes, with each one possessing its own particular
              aesthetic and practical qualities.
            </motion.p>
          </motion.div>

          {/* Content section */}
          <div className="flex flex-wrap gap-6 mt-8">
            {/* Left side - Finish types */}
            <motion.div variants={itemVariants} className="w-full md:w-[550px]">
              <div className="mt-8 ml-[175px]">
                {finishTypes.map((finish, index) => (
                  <motion.div
                    key={finish.id}
                    variants={itemVariants}
                    className="flex items-center space-x-6 mb-[41px] group cursor-pointer"
                    onMouseEnter={() => setHoveredFinish(finish.id)}
                    onMouseLeave={() => setHoveredFinish(null)}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Checkbox
                        id={finish.id}
                        className="w-2.5 h-2.5 rounded-[5px] border-[#999999] group-hover:border-white transition-colors"
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.label
                        htmlFor={finish.id}
                        className="font-['Poppins',Helvetica] font-normal text-white text-base cursor-pointer group-hover:text-gray-200 transition-colors"
                      >
                        {finish.label}
                      </motion.label>
                      
                      <motion.p
                        className="font-['Roboto',Helvetica] font-normal text-[#888] text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ height: 0 }}
                        animate={{ height: hoveredFinish === finish.id ? "auto" : 0 }}
                      >
                        {finish.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Images */}
            <motion.div variants={itemVariants} className="w-full md:w-[550px] relative">
              {/* Bottom image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="absolute w-[302px] h-[380px] rounded overflow-hidden border-[5px] border-solid border-[#0e0e0e] group">
                  <CardContent className="p-[5px]">
                    <div className="w-[292px] h-[370px] overflow-hidden">
                      <motion.div 
                        className="w-[380px] h-[481px] relative -left-11 bg-[url(/two-images-2-jpg.png)] bg-cover bg-[50%_50%]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Top image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="absolute w-[302px] h-[302px] left-[248px] top-[-20px] rounded overflow-hidden border-[5px] border-solid border-[#0e0e0e] group">
                  <CardContent className="p-[5px]">
                    <div className="w-[292px] h-[292px] overflow-hidden">
                      <motion.div 
                        className="w-[380px] h-[380px] relative top-[-88px] -left-11 bg-[url(/statuario-venato-color-body-porcelain-tile-imola-400x400-1-jpg.png)] bg-cover bg-[50%_50%]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Circular overlay with enhanced animation */}
              <motion.div 
                className="absolute w-[100px] h-[100px] top-[268px] left-[220px] bg-[#111111] rounded-[50px] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0.1)",
                    "0 0 0 10px rgba(255,255,255,0.05)",
                    "0 0 0 0 rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="relative w-[120px] h-[120px] -top-2.5 -left-2.5 bg-[#ffffff33] rounded-[60px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div className="relative w-[90px] h-[46px] top-[37px] left-[15px]">
                    <div className="relative w-[35px] h-[46px] left-7">
                      <motion.div 
                        className="absolute w-[19px] h-[21px] top-1 left-1 bg-[url(/group-5.png)] bg-[100%_100%]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div 
                        className="absolute w-[21px] h-[19px] top-[11px] left-[9px] bg-[url(/group-6.png)] bg-[100%_100%]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div 
                        className="absolute w-[3px] h-[3px] top-[7px] left-[25px] bg-[url(/group-7.png)] bg-[100%_100%]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <div className="absolute w-[35px] h-[46px] top-0 left-0 bg-[url(/group-8.png)] bg-[100%_100%]" />
                      <div className="absolute w-[17px] h-4 top-[9px] left-[9px] bg-[url(/group-9.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};