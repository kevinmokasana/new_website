import React from "react";
import { motion } from "framer-motion";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { UniqueFeaturesSection } from "./sections/UniqueFeaturesSection";
import { VisionSection } from "./sections/VisionSection";

export const ElementLight = (): JSX.Element => {
  return (
    <motion.div 
      className="bg-[#090909] flex flex-col justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-[#090909] overflow-hidden w-full relative">
        <VisionSection />
        <FeaturesSection />
        <HeroSection />
        <CallToActionSection />
        <ProductShowcaseSection />
        <ImageGallerySection />
        <TeamSection />
        <ServicesSection />
        <FooterSection />
        <UniqueFeaturesSection />

        {/* Copyright Section */}
        <motion.div 
          className="w-full py-10 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <motion.div 
              className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs text-center tracking-[1.80px] leading-[16.8px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © COPYRIGHTS TESSERA GRANITO 2020.
              <br />
              DESIGN AND DEVELOPED BY ROEX DESIGN.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};