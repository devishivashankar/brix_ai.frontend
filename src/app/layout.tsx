import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, INTRO_LOGO_TEXT } from '@/lib/constants';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { Toaster } from "@/components/ui/toaster";
import { AnimatedIntro } from '@/components/animated-intro';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // Replace with actual site URL
    siteName: SITE_NAME,
    // images: [ { url: '/og-image.png' } ], // Add an OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // images: [ { url: '/twitter-image.png' } ], // Add a Twitter image
    // creator: '@yourtwitterhandle',
  },
};


function RootLayoutClient({ children }: { children: React.ReactNode }) {
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
    </>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
