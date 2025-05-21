import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Brix AI.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>Welcome to Brix AI. This is a placeholder privacy policy. In a real application, this page would detail how user data is collected, used, and protected.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We may collect personal identification information (Name, email address, phone number, etc.) and non-personal identification information (browser name, type of computer, etc.).</p>

        <h2>2. How We Use Collected Information</h2>
        <p>Brix AI may collect and use Users personal information for the following purposes: to improve customer service, to personalize user experience, to send periodic emails.</p>

        <h2>3. How We Protect Your Information</h2>
        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</p>
        
        <h2>4. Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent Users personal identification information to others.</p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>Brix AI has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page.</p>

        <h2>6. Your Acceptance of These Terms</h2>
        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site.</p>

        <h2>7. Contacting Us</h2>
        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at privacy@brixai.in.</p>
      </div>
    </div>
  );
}
