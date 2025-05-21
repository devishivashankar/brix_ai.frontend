import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Brix AI.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>Welcome to Brix AI. This is a placeholder Terms of Service. In a real application, this page would detail the terms and conditions for using the website and services.</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Brix AI website and services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account.</p>

        <h2>3. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Brix AI and its licensors.</p>
        
        <h2>4. Termination</h2>
        <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>5. Limitation of Liability</h2>
        <p>In no event shall Brix AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.</p>

        <h2>6. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
        
        <h2>7. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@brixai.in.</p>
      </div>
    </div>
  );
}
