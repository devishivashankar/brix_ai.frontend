export const SITE_NAME = "Brix AI";
export const SITE_DESCRIPTION = "Brix AI: AI solutions provider for mid-sized and emerging enterprises with AI-powered products, real-time analytics, and consulting.";
export const INTRO_LOGO_TEXT = "Brix AI";
export const CONTACT_EMAIL = "solutions@brixai.in";

export type NavItem = {
  title: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Solutions", href: "/solutions" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: NAV_ITEMS,
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" }, // Placeholder, create page if needed
    { title: "Terms of Service", href: "/terms-of-service" }, // Placeholder
  ],
  social: [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/brix-ai-technology", external: true },
    // Add other social links here
  ],
};
