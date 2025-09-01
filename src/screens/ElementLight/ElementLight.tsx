import React from "react";
import { motion } from "framer-motion";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { QualitySection } from "./sections/QualitySection";
import { ApplicationsSection } from "./sections/ApplicationsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const ElementLight = (): JSX.Element => {
  return (
    <motion.div 
      className="bg-[#090909] flex flex-col justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-[#090909] overflow-hidden w-full relative">
        <Header />
        <FeaturesSection />
        <HeroSection />
        <CallToActionSection />
        <ProductShowcaseSection />
        <ImageGallerySection />
        <TeamSection />
        <ApplicationsSection />
        <QualitySection />
        <ServicesSection />
        <FooterSection />
        <Footer />
      </div>
    </motion.div>
  );
};