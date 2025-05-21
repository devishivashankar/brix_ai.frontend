import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormClient } from './contact-form-client';
import { CONTACT_EMAIL } from '@/lib/constants';

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
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-primary hover:underline break-all">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+91-XXX-XXXXXXX (Placeholder)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">Our Office</h3>
                      <p className="text-muted-foreground">
                        Brix AI Headquarters <br />
                        123 Tech Park, Innovation Drive <br />
                        Hyderabad, Telangana, India (Placeholder)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Find Us On Map</h3>
              <div className="aspect-video overflow-hidden rounded-lg border shadow-md">
                {/* Placeholder for Google Maps iframe. Replace with actual iframe code. */}
                {/* Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!..." width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe> */}
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                  Google Maps iframe will be here. (Placeholder for https://placehold.co/600x400)
                   <img src="https://placehold.co/600x338.png" alt="Map placeholder" className="w-full h-full object-cover" data-ai-hint="map location" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
