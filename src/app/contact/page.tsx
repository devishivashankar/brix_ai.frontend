import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormClient } from './contact-form-client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Brix AI. We are here to answer your questions about our AI solutions, products, and services.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <Mail className="mx-auto mb-6 h-16 w-16" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Brix AI</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Have questions or want to discuss a project? We're here to help. Reach out to us, and 
            let's explore how AI can transform your business.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below, and one of our team members will get back to you shortly.
            </p>
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <ContactFormClient />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Contact Details</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">Email Us</h3>
                      <a href="mailto:solutions@brixai.in" className="text-muted-foreground hover:text-primary hover:underline break-all">
                        solutions@brixai.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+91-99073 29360 </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">Our Office</h3>
                      <p className="text-muted-foreground">
                        Porwal Road, Lohegaon<br />
                        Pune - 411047<br />
                        Maharastra, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Find Us On Map</h3>
              <div className="aspect-video overflow-hidden rounded-lg border shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=JW45%2BCXH%20Pune,%20Maharashtra&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brix AI Location"
                ></iframe>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">Location Code: <strong>JW45+CXH Pune, Maharashtra</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
