import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const TeamSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const featureRows = [
    [
      { image: "/wall-and-floor-tiles-png.png", alt: "Wall and floor tiles", title: "Wall & Floor" },
      { image: "/resistance-to-deep-abrasion-png.png", alt: "Resistance to deep abrasion", title: "Abrasion Resistant" },
      { image: "/antislip-surface-png.png", alt: "Antislip surface", title: "Anti-slip Surface" },
      { image: "/highly-durable-png.png", alt: "Highly durable", title: "Highly Durable" },
    ],
    [
      { image: "/water-reg-png.png", alt: "Water regulation", title: "Water Resistant" },
      { image: "/fire-1-png.png", alt: "Fire resistant", title: "Fire Resistant" },
      { image: "/zero-maintenance-png.png", alt: "Zero maintenance", title: "Zero Maintenance" },
      { image: "/eco-friendly-png.png", alt: "Eco friendly", title: "Eco Friendly" },
    ],
    [
      { image: "/usp-png.png", alt: "USP", title: "Unique Features" },
      { image: "/quality-1-png.png", alt: "Quality", title: "Premium Quality" },
      { image: "/flask-png.png", alt: "Flask", title: "Chemical Resistant" },
      { image: "/safe-png.png", alt: "Safe", title: "Safe & Secure" },
    ],
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

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="w-full bg-[#090909] py-16 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                             linear-gradient(0deg, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="w-[60px] h-px bg-white"
                initial={{ width: 0 }}
                animate={isVisible ? { width: 60 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="flex gap-4">
                {["PRODUCT", "CHARACTERISTICS"].map((word, index) => (
                  <motion.span
                    key={word}
                    className="font-normal text-white text-[13px] tracking-[3.00px] leading-[13px] font-['Poppins',Helvetica]"
                    whileHover={{ scale: 1.1, color: "#f0f0f0" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex gap-2.5">
              {["Product", "Unique", "Features"].map((word, index) => (
                <motion.h2
                  key={word}
                  className="font-bold text-white text-[40px] tracking-[0] leading-[60px] whitespace-nowrap font-['Poppins',Helvetica]"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255,255,255,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {word}
                </motion.h2>
              ))}
            </div>
          </motion.div>

          {featureRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              variants={itemVariants}
              className={`grid grid-cols-4 ${rowIndex < featureRows.length - 1 ? "border-b border-[#c8c8c814]" : ""}`}
            >
              {row.map((feature, index) => (
                <motion.div
                  key={`feature-${rowIndex}-${index}`}
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-transparent border-0 group cursor-pointer ${
                      index < row.length - 1 ? "border-r border-[#c8c8c814]" : ""
                    }`}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-[285px] p-4 relative">
                      <motion.div
                        className="w-[85px] h-[85px] bg-cover bg-center mb-4 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        style={{ backgroundImage: `url(${feature.image})` }}
                        aria-label={feature.alt}
                        whileHover={{ rotate: 5 }}
                      />
                      
                      <motion.h3
                        className="font-['Poppins',Helvetica] font-medium text-white text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        {feature.title}
                      </motion.h3>

                      {/* Hover effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};