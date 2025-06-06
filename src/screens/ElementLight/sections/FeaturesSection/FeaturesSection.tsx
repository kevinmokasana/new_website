import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/group---3---7.png",
      title: "Classic\n&Modern",
      subtitle: "Timeless Elegance"
    },
    {
      id: 2,
      image: "/award-banner-1-jpg.png",
      title: "Premium\nQuality",
      subtitle: "Award Winning Design"
    },
    {
      id: 3,
      image: "/award-banner-2-jpg.png",
      title: "Innovative\nSolutions",
      subtitle: "Future Ready"
    },
    {
      id: 4,
      image: "/award-banner-3-jpg.png",
      title: "Luxury\nFinishes",
      subtitle: "Exceptional Craftsmanship"
    }
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.h2 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-['Poppins',Helvetica] font-bold text-white text-[80px] tracking-[2.00px] leading-[96px] mb-4"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="font-['Poppins',Helvetica] font-normal text-white text-[24px] tracking-[1.00px] opacity-80"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-[50px] w-12 h-12 rounded-full border-2 border-solid border-[#ffffff80] bg-transparent hover:bg-[#ffffff20] hover:border-white transition-all duration-300 transform -translate-y-1/2"
        >
          <ChevronLeftIcon className="h-4 w-4 text-white" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-[50px] w-12 h-12 rounded-full border-2 border-solid border-[#ffffff80] bg-transparent hover:bg-[#ffffff20] hover:border-white transition-all duration-300 transform -translate-y-1/2"
        >
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </Button>
      </motion.div>

      {/* Slide counter */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 right-14 flex items-center text-white"
      >
        <span className="font-['Poppins',Helvetica] font-normal text-xl text-center tracking-[0] leading-[26px]">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="font-['Poppins',Helvetica] font-normal text-xs mx-1 leading-[15.6px]">
          /
        </span>
        <span className="font-['Poppins',Helvetica] font-normal text-sm text-center tracking-[0] leading-[18.2px]">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Carousel indicators */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
      >
        {slides.map((_, index) => (
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
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};