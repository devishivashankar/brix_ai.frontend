"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import { NAV_ITEMS, INTRO_LOGO_TEXT } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/constants';

type NavbarProps = {
  isIntroComplete: boolean;
};

export function Navbar({ isIntroComplete }: NavbarProps) {
  const pathname = usePathname();

  const navLinkClasses = (href: string) =>
    cn(
      "relative text-sm font-medium transition-colors hover:text-primary",
      "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
      pathname === href ? "text-primary after:w-full" : "text-foreground/80"
    );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/80 px-4 shadow-sm backdrop-blur-md md:px-6"
      initial={isIntroComplete ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isIntroComplete ? 0 : 0.2 }} // Delay only if intro just completed
    >
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
        {/* <Sparkles className="h-6 w-6" /> */}
        <span>{INTRO_LOGO_TEXT}</span>
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {NAV_ITEMS.map((item) => (
          <Link key={item.title} href={item.href} className={navLinkClasses(item.href)}>
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                 {/* <Sparkles className="h-6 w-6" /> */}
                <span>{INTRO_LOGO_TEXT}</span>
              </Link>
              <nav className="grid gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground" : ""
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
