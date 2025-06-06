import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../../../components/ui/separator";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const HeroSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const awardTitle = [
    ["Awarded", "As", "Best", "Designer"],
    ["Vitrified", "Tiles", "By", "Chief", "Minister"],
    ["Of", "Gujarat"],
  ];

  const descriptionParagraphs = [
    "We never underestimate any parts of each project as they're all",
    "essential to meeting the ultimate goal. you'll be engaged in with our",
    "positive and enthusiastic attitude.",
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
    <section ref={ref} className="w-full bg-[#080808] py-[100px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1140px] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Header with "KNOW US BETTER" */}
          <motion.div variants={itemVariants} className="flex items-center mb-4">
            <motion.div
              className="w-[60px] h-px bg-white"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 60 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <div className="ml-2.5 flex space-x-2">
              {["KNOW", "US", "BETTER"].map((word, index) => (
                <motion.span
                  key={word}
                  variants={itemVariants}
                  className="font-normal text-white text-[13px] tracking-[3.00px] leading-[13px] font-['Poppins',Helvetica]"
                  whileHover={{ scale: 1.1, color: "#f0f0f0" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Main content area */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Award title section */}
            <motion.div variants={itemVariants} className="md:w-1/2">
              {awardTitle.map((line, lineIndex) => (
                <div key={`line-${lineIndex}`} className="flex flex-wrap">
                  {line.map((word, wordIndex) => (
                    <motion.div
                      key={`word-${lineIndex}-${wordIndex}`}
                      className="font-['Poppins',Helvetica] font-extrabold text-white text-[38px] leading-[53.2px] mr-2"
                      whileHover={{ 
                        scale: 1.05,
                        color: "#e0e0e0",
                        textShadow: "0 0 20px rgba(255,255,255,0.5)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Description section */}
            <motion.div variants={itemVariants} className="md:w-1/2">
              {descriptionParagraphs.map((paragraph, index) => (
                <motion.p
                  key={`paragraph-${index}`}
                  variants={itemVariants}
                  className="font-['Roboto',Helvetica] font-normal text-[#b7b7b7] text-[15px] leading-[30px] hover:text-[#d0d0d0] transition-colors duration-300"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* "KNOW MORE" call-to-action */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center mt-8 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-[60px] h-px bg-white group-hover:w-[80px] transition-all duration-300"
                />
                <div className="ml-2.5 flex space-x-2">
                  {["KNOW", "MORE"].map((word, index) => (
                    <motion.span
                      key={word}
                      className="font-['Poppins',Helvetica] font-bold text-white text-xs tracking-[2.00px] leading-3 group-hover:text-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};