import Link from 'next/link';
import { Sparkles, Mail, Linkedin } from 'lucide-react';
import { SITE_NAME, CONTACT_EMAIL, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-semibold text-primary">
              {/* <Sparkles className="h-6 w-6" /> */}
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-sm">
              AI-powered solutions for modern enterprises.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-primary hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-sm hover:text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              {FOOTER_LINKS.social.map((item) => (
                <li key={item.title}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary hover:underline">
                    {item.title === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((item) => (
                 <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-primary hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
