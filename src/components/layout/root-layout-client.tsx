"use client";

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { Toaster } from "@/components/ui/toaster";
import { AnimatedIntro } from '@/components/animated-intro';
import { ChatWidget } from '@/components/chat-widget';
// INTRO_LOGO_TEXT is used by AnimatedIntro and Navbar, which are client components.

export function RootLayoutClient({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroAnimationComplete, setIsIntroAnimationComplete] = useState(false);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);

  useEffect(() => {
    // Simulate intro animation duration
    const introTimer = setTimeout(() => {
      setIsIntroAnimationComplete(true); // Mark intro visual animation as complete
    }, 2000); // Duration of logo staying in center

    return () => clearTimeout(introTimer);
  }, []);
  
  useEffect(() => {
    if (isIntroAnimationComplete) {
      // After logo animation, start transition to main content
      const mainContentTimer = setTimeout(() => {
        setShowIntro(false); // Hide intro component
        setIsMainContentVisible(true); // Start showing main content
      }, 500); // Delay before fading out intro and fading in main content
      return () => clearTimeout(mainContentTimer);
    }
  }, [isIntroAnimationComplete]);


  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-container"
            initial={{ opacity: 1 }}
            animate={isIntroAnimationComplete ? { 
              opacity: 0, 
              transitionEnd: { display: "none" } 
            } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: isIntroAnimationComplete ? 0 : 0 }}
          >
            <AnimatedIntro onAnimationComplete={() => {}} /> 
          </motion.div>
        )}
      </AnimatePresence>

      {isMainContentVisible && (
         <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen flex-col"
        >
          <Navbar isIntroComplete={isIntroAnimationComplete} />
          <main className="flex-grow pt-16"> {/* pt-16 for fixed navbar height */}
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer />
        </motion.div>
      )}
       <Toaster />
       <ChatWidget />
    </>
  );
}
