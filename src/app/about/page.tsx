import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, BarChartBig, Users, Target, Lightbulb, Handshake, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Brix AI: our mission, values, and core offerings. We empower businesses with AI-driven solutions.',
};

const coreOfferings = [
  {
    id: "ai-products",
    title: "AI Products",
    icon: <Brain className="h-8 w-8 mb-2 text-primary" />,
    description: "Innovative AI-powered tools including no-code RPA, invoice intelligence, and call analytics designed to automate processes and enhance decision-making.",
    details: "Our AI products are built on the latest technologies, ensuring scalability, security, and seamless integration with your existing systems. We focus on delivering practical solutions that solve real-world business problems.",
    image: "https://placehold.co/600x400.png",
    imageHint: "AI brain"
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    icon: <BarChartBig className="h-8 w-8 mb-2 text-primary" />,
    description: "Transform raw data into actionable insights with our real-time analytical services, featuring custom dashboards, anomaly detection, and predictive modeling.",
    details: "We help you harness the power of your data. Our analytics platforms provide clear, concise, and timely information, enabling you to monitor performance, identify trends, and make data-driven strategic choices.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard"
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: <Users className="h-8 w-8 mb-2 text-primary" />,
    description: "Strategic AI consulting services to guide your digital transformation journey, from market strategy development to technology implementation and optimization.",
    details: "Our experienced consultants work closely with your team to understand your unique challenges and opportunities. We provide tailored advice and roadmaps to ensure successful AI adoption and long-term value creation.",
    image: "https://placehold.co/600x400.png",
    imageHint: "team meeting"
  },
];

const values = [
  { title: "Integrity & Innovation", icon: <Lightbulb className="h-8 w-8 text-accent" />, description: "We uphold the highest ethical standards while continuously pushing the boundaries of AI technology." },
  { title: "Partnership over Push", icon: <Handshake className="h-8 w-8 text-accent" />, description: "We believe in collaborative relationships, working with you to achieve shared success." },
  { title: "Data-Driven Decisions", icon: <Target className="h-8 w-8 text-accent" />, description: "We leverage data to inform strategies and deliver measurable results for your business." },
  { title: "Scalable Solutions", icon: <CheckSquare className="h-8 w-8 text-accent" />, description: "Our solutions are designed to grow with your business, ensuring long-term adaptability and value." },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Section 1: Full-width intro */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Who We Are</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Brix AI is a dynamic team of AI experts, data scientists, and strategists passionate about
            helping businesses harness the power of artificial intelligence. We are committed to delivering
            transformative solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* Section 2: Mission Quote Block */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center shadow-xl">
          <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="text-2xl font-semibold italic text-foreground md:text-3xl">
            “We empower businesses to unlock data-driven decisions, automate operations, and achieve sustainable growth through intelligent technology and strategic partnership.”
          </h2>
          <p className="mt-4 text-muted-foreground">- The Brix AI Team</p>
        </div>
      </section>

      {/* Section 3: Core Offerings (Tabs) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Offerings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the key ways we can help your business thrive with AI.
          </p>
        </div>
        <Tabs defaultValue={coreOfferings[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            {coreOfferings.map((offering) => (
              <TabsTrigger key={offering.id} value={offering.id} className="py-3 text-base">
                {offering.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {coreOfferings.map((offering) => (
            <TabsContent key={offering.id} value={offering.id}>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      {offering.icon}
                      <CardTitle className="text-2xl">{offering.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground mb-4">{offering.description}</p>
                    <p className="text-sm text-foreground/90">{offering.details}</p>
                  </div>
                  <div className="h-64 md:h-full">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={offering.imageHint}
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Section 4: Our Values (Icon Grid) */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our work and relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  {value.icon}
                </div>
                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team & Culture (Optional) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            (Optional: Dedicated, innovative, and collaborative. We foster a culture of learning and excellence.)
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="text-center">
              <Image 
                src={`https://placehold.co/300x300.png`} 
                alt={`Team Member ${i+1}`} 
                width={300} 
                height={300} 
                className="w-full h-auto rounded-t-lg object-cover"
                data-ai-hint="person portrait"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Person {i+1}</CardTitle>
                <p className="text-sm text-primary">Role/Title</p>
              </CardHeader>
            </Card>
          ))}
        </div>
         <p className="mt-8 text-center text-muted-foreground">Further team details and bios can be showcased here.</p>
      </section>
    </div>
  );
}
