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
      </div>
    </motion.div>
  );
};