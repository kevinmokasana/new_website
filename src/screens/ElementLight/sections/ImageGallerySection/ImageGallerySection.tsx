import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ImageGallerySection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/oreal-crema-close-copy-1-jpg.png",
      size: "800 x 800mm",
      title: "Oreal Crema",
      description: "Premium marble finish"
    },
    {
      id: 2,
      src: "/black-portro-1-jpg.png",
      size: "600 x 600mm",
      title: "Black Portoro",
      description: "Elegant dark stone"
    },
    {
      id: 3,
      src: "/800x1600mm-2-2-jpg.png",
      size: "800 x 1600mm",
      title: "Large Format",
      description: "Contemporary design"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
    <section ref={ref} className="relative w-full py-32 bg-[#090909] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, white 50%, transparent 51%)`,
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container max-w-[1120px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <div className="flex items-center gap-4">
              {["AWESOME", "WORKS"].map((word, index) => (
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
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-white">
              {["Available", "Sizes"].map((word, index) => (
                <motion.span
                  key={word}
                  className="inline-block mr-2 font-bold text-[32px] tracking-[3.00px] leading-[48px] font-['Poppins',Helvetica]"
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
        </motion.div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[940px] h-[500px] mx-auto rounded-lg overflow-hidden group">
              <motion.div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[currentSlide].src})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-10 left-10 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="font-['Poppins',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[33.6px] mb-2">
                      {galleryImages[currentSlide].size}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-semibold text-[20px] mb-1">
                      {galleryImages[currentSlide].title}
                    </p>
                    <p className="font-['Roboto',Helvetica] font-normal text-[14px] opacity-80">
                      {galleryImages[currentSlide].description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-[10%] w-12 h-12 rounded-full border-2 border-white/50 bg-black/30 hover:bg-black/50 hover:border-white transition-all duration-300 transform -translate-y-1/2 backdrop-blur-sm"
        >
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </Button>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-[10%] w-12 h-12 rounded-full border-2 border-white/50 bg-black/30 hover:bg-black/50 hover:border-white transition-all duration-300 transform -translate-y-1/2 backdrop-blur-sm"
        >
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {galleryImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-[#1e1e1e] rounded-full">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            key={currentSlide}
          />
        </div>
      </div>
    </section>
  );
};