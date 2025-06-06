import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ProductShowcaseSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const visionCards = [
    {
      id: 1,
      icon: "/group.png",
      title: "Core Purpose",
      description:
        "To create a dream place to live by providing luxury solutions.",
    },
    {
      id: 2,
      icon: "/group-1.png",
      title: "Core Value",
      description: [
        "We listen, We care, We serve",
        "Encouraging Culture",
        "Innovation and Adaptability",
        "Respect for All",
        "Teamwork",
      ],
    },
    {
      id: 3,
      icon: "/group-2.png",
      title: "B.H.A.G",
      description:
        "To become a leading brand in our industry and achieve a 1000Cr. turnover by 2030.",
    },
    {
      id: 4,
      icon: "/group-3.png",
      title: "Vivid Description",
      description:
        "By 2030 Tessera will be one of the largest manufacturers and suppliers in the ceramic Industry.",
    },
    {
      id: 5,
      icon: "/group-4.png",
      title: "Brand Promise",
      description: "100% Customer Satisfaction.",
    },
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

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="w-full bg-black py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="mb-10">
            <h2 className="font-bold text-white text-4xl inline-flex">
              {["Our", "Vision"].map((word, index) => (
                <motion.span
                  key={word}
                  className={index === 0 ? "" : "ml-4"}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionCards.slice(0, 3).map((card, index) => (
              <motion.div key={card.id} variants={cardVariants}>
                <Card className="bg-[#080808] border-none group hover:bg-[#0a0a0a] transition-all duration-300 h-full">
                  <CardContent className="p-10 h-full flex flex-col">
                    <motion.div 
                      className="mb-8"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {card.id === 2 ? (
                        <img
                          className="w-[60px] h-[52px] filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                          alt={card.title}
                          src={card.icon}
                        />
                      ) : (
                        <div
                          className="w-[60px] h-[60px] bg-cover bg-center filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                          style={{ backgroundImage: `url(${card.icon})` }}
                        />
                      )}
                    </motion.div>
                    
                    <motion.h3 
                      className="font-semibold text-white text-[22px] mb-6 group-hover:text-gray-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <div className="flex-1">
                      {Array.isArray(card.description) ? (
                        <div className="font-normal text-white text-sm leading-[18.2px] group-hover:text-gray-200 transition-colors">
                          {card.description.map((line, lineIndex) => (
                            <motion.div
                              key={lineIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lineIndex * 0.1 }}
                            >
                              {line}
                              <br />
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <motion.p 
                          className="font-normal text-[#b7b7b7] text-[15px] leading-[30px] group-hover:text-[#d0d0d0] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:w-2/3 mx-auto">
            {visionCards.slice(3, 5).map((card, index) => (
              <motion.div 
                key={card.id} 
                variants={cardVariants}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <Card className="bg-[#080808] border-none group hover:bg-[#0a0a0a] transition-all duration-300 h-full">
                  <CardContent className="p-10 h-full flex flex-col">
                    <motion.div 
                      className="mb-8"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className="w-[60px] h-[60px] bg-cover bg-center filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        style={{ backgroundImage: `url(${card.icon})` }}
                      />
                    </motion.div>
                    
                    <motion.h3 
                      className="font-semibold text-white text-[22px] mb-6 group-hover:text-gray-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="font-normal text-[#b7b7b7] text-[15px] leading-[30px] group-hover:text-[#d0d0d0] transition-colors flex-1"
                      whileHover={{ x: 5 }}
                    >
                      {card.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};