import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const CallToActionSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const descriptionText = [
    "We help you visualize your dream space. Our tiles are as unique as you are. Experience and hard work has resulted into such creative expressions which fit into your world perfectly.",
    "Three sizes and seven finishes are available with endless possibilities of designing your favourite spaces.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative w-full bg-[#080808] py-20 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
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

      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-16 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="w-full"
        >
          {/* Left side image */}
          <motion.div variants={imageVariants} className="relative w-full lg:w-1/2 group">
            <motion.div 
              className="aspect-[4/3] w-full bg-[url(/rs-108-qyrteasdsuqh8a7dyh3w2fxgpie0mun5uh79qfuicw-jpg.png)] bg-cover bg-center rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Right side content */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex flex-col">
            {/* Header with separator */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-[60px] h-px bg-white"
                initial={{ width: 0 }}
                animate={isVisible ? { width: 60 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="flex gap-4">
                {["ABOUT", "COMPANY"].map((word, index) => (
                  <motion.span
                    key={word}
                    className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[3px] leading-[13px]"
                    whileHover={{ scale: 1.1, color: "#f0f0f0" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants} className="mb-10">
              <motion.h2 
                className="font-['Poppins',Helvetica] font-bold text-white text-[40px] leading-[60px]"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Aesthetic
                <br />
                essence <span className="inline-block">With</span>
                <br />
                Futuristic <span className="inline-block">View</span>
                <br />
                Point
              </motion.h2>
            </motion.div>

            {/* Description paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 mb-10">
              {descriptionText.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[30px] hover:text-[#d0d0d0] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* About Us button */}
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="w-[151px] h-[49px] border-[#1e1e1e] rounded-none hover:bg-[#1e1e1e] transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="font-['Poppins',Helvetica] font-normal text-white text-[13px] tracking-[2px] leading-[16.9px] relative z-10">
                  ABOUT US
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};