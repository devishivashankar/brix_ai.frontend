import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Rocket } from 'lucide-react';
import { CareerFormClient } from './career-form-client';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Brix AI team! Explore exciting career opportunities and help us build the future of AI solutions.',
};

const openRoles = [
  {
    value: "ai-engineer",
    label: "AI Engineer (Machine Learning)",
    department: "Engineering",
    location: "Remote / Hyderabad, India",
    description: "Develop and implement cutting-edge machine learning models and AI solutions. Strong Python, TensorFlow/PyTorch skills required.",
  },
  {
    value: "data-scientist",
    label: "Data Scientist (Analytics & Insights)",
    department: "Data Science",
    location: "Remote / Hyderabad, India",
    description: "Analyze complex datasets, build predictive models, and generate actionable insights for clients. Proficiency in SQL, R/Python, and data visualization tools.",
  },
  {
    value: "sales-manager",
    label: "Sales Manager (AI Solutions)",
    department: "Sales & Marketing",
    location: "Hyderabad, India",
    description: "Drive sales of Brix AI products and services. Proven track record in B2B tech sales, excellent communication skills.",
  },
];

export default function CareersPage() {
  return (
    <div className="space-y-16">
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <Rocket className="mx-auto mb-6 h-16 w-16" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Innovative Team</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            At Brix AI, we're passionate about building the future of artificial intelligence. 
            If you're driven, creative, and eager to make an impact, we'd love to hear from you.
          </p>
        </div>
      </section>

      {openRoles.length > 0 && (
        <section id="open-roles" className="container mx-auto px-4 md:px-6 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Current Openings</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore roles where you can contribute your skills and grow with us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role) => (
              <Card key={role.value} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{role.label}</CardTitle>
                  <CardDescription className="text-sm">
                    {role.department} &bull; {role.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/careers/apply?role=${role.value}`}>Apply Now</Link>
                  </Button>
                </CardFooter> */}
              </Card>
            ))}
          </div>
        </section>
      )}

      <section id="apply" className="bg-muted">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                 <Users className="mx-auto mb-3 h-10 w-10 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Apply to Join Brix AI</CardTitle>
                <CardDescription>
                  {openRoles.length > 0 
                    ? "Select a role from the list above or submit a general application."
                    : "We are always looking for talented individuals. Submit your application and we'll keep you in mind for future opportunities."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CareerFormClient openRoles={openRoles.map(r => ({value: r.value, label: r.label}))} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
