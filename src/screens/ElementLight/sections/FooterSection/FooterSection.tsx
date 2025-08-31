import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const FooterSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

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
    <footer ref={ref} className="w-full py-16 lg:py-20 bg-[#070707] flex flex-col items-center justify-center gap-8 lg:gap-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 text-center px-4"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <h2 className="font-bold text-white text-[28px] lg:text-[40px] font-['Poppins',Helvetica] tracking-normal leading-[40px] lg:leading-[60px] text-center">
            {["Discover", "Our", "Premium", "Collection"].map((word, index) => (
              <motion.span
                key={word}
                className={`inline-block ${index < 3 ? "mr-2 lg:mr-3" : ""}`}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Button
            variant="outline"
            className="h-12 lg:h-14 px-8 lg:px-12 border border-white rounded-none bg-transparent hover:bg-transparent relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute w-full h-full top-0 left-[-100%] group-hover:left-0 transition-all duration-500"
              style={{
                background: "linear-gradient(180deg,rgba(28,28,28,1) 0%,rgba(255,255,255,0.1) 100%)"
              }}
            />
            <motion.span 
              className="relative z-10 font-['Poppins',Helvetica] font-normal text-white text-sm lg:text-base text-center tracking-normal leading-[18.2px]"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              EXPLORE CATALOGUE
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>
    </footer>
  );
};