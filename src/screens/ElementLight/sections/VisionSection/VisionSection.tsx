import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const VisionSection = (): JSX.Element => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-24 flex items-center justify-between px-12 bg-transparent relative z-50"
    >
      <motion.div 
        className="relative h-9"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="font-['Poppins',Helvetica] font-extrabold text-white text-[28px] leading-[36.4px] cursor-pointer">
          Tessera
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 hover:bg-transparent group"
        >
          <div className="flex flex-col gap-2">
            <motion.div 
              className="w-5 h-[3px] bg-white transition-all duration-300 group-hover:w-6"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-5 h-[3px] bg-white transition-all duration-300 group-hover:w-6"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
          </div>
          <span className="font-['Poppins',Helvetica] font-medium text-white text-[13px] leading-[16.9px] group-hover:text-gray-200 transition-colors">
            Menu
          </span>
        </Button>
      </motion.div>
    </motion.header>
  );
};