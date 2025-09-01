import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, AlertCircleIcon, XIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  const Icon = type === 'success' ? CheckCircleIcon : AlertCircleIcon;
  const bgColor = type === 'success' ? 'bg-green-900/90' : 'bg-red-900/90';
  const borderColor = type === 'success' ? 'border-green-500/50' : 'border-red-500/50';
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-4 right-4 z-50 ${bgColor} ${borderColor} border backdrop-blur-sm rounded-lg p-4 shadow-2xl max-w-sm`}
        >
          <div className="flex items-start gap-3">
            <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
            <p className="text-white text-sm flex-1">{message}</p>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};