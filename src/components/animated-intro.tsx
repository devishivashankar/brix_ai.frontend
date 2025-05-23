 "use client";

import { motion } from 'framer-motion';
import { INTRO_LOGO_TEXT } from '@/lib/constants';

type AnimatedIntroProps = {
  onAnimationComplete: () => void;
};

export function AnimatedIntro({ onAnimationComplete }: AnimatedIntroProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-900" // Changed background to dark blue
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // Keep opacity 1 during logo animation phase
      transition={{ duration: 0.5 }}
      onAnimationComplete={onAnimationComplete} // This will be called after the component mounts and its initial animation (if any) completes
    >
      <motion.h1
        className="text-6xl font-bold text-white md:text-8xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {INTRO_LOGO_TEXT.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
