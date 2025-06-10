import type { Metadata } from 'next';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Brain, BarChartBig, Users, Lightbulb } from 'lucide-react';
import { CaseStudySummarizerClient } from './case-study-summarizer-client';

export const metadata: Metadata = {
  title: 'Our Solutions',
  description: 'Explore Brix AI\'s comprehensive solutions including AI Products, Real-Time Analytics, and Expert Consulting. Leverage our AI to power your business.',
};

const solutions = [
  {
    id: "ai-products",
    icon: <Brain className="h-12 w-12 text-primary mb-4" />,
    title: "AI Products",
    description: "Leverage our suite of AI-powered products, including no-code automation tools, intelligent invoice processing, and advanced call analytics. We build custom AI solutions tailored to your specific operational needs, enhancing efficiency and driving innovation.",
    image: "/images/offerings/ai-products.png",
    imageHint: "AI interface",
    features: ["No-Code RPA Bots", "Invoice Intelligence", "AI Call Analytics", "Custom AI Development"]
  },
  {
    id: "analytics",
    icon: <BarChartBig className="h-12 w-12 text-primary mb-4" />,
    title: "Real-Time Analytical Services",
    description: "Transform your data into a strategic asset with our real-time analytics. We offer interactive dashboards, sophisticated anomaly detection systems, and predictive modeling to provide you with actionable insights for informed decision-making.",
    image: "/images/offerings/real-time-analytics.png",
    imageHint: "data analytics",
    features: ["Custom Dashboards", "Anomaly Detection", "Predictive Modeling", "Data Visualization"]
  },
  {
    id: "consulting",
    icon: <Users className="h-12 w-12 text-primary mb-4" />,
    title: "AI Consulting",
    description: "Navigate the complexities of AI adoption with our expert consulting services. We partner with you on market strategy, digital transformation roadmaps, and technology implementation, ensuring your AI initiatives deliver maximum business value.",
    image: "/images/offerings/consulting.png",
    imageHint: "business strategy",
    features: ["AI Strategy & Roadmap", "Digital Transformation", "Technology Implementation", "Performance Optimization"]
  },
];

export default function SolutionsPage() {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our AI Solutions</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            At Brix AI, we deliver intelligent solutions designed to transform your business. 
            Explore our core offerings in AI products, analytics, and consulting.
          </p>
        </div>
      </section>

      {solutions.map((solution) => (
        <section id={solution.id} key={solution.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className={`md:order-${solution.id === 'analytics' ? '2' : '1'}`}>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover min-h-[300px]"
                  data-ai-hint={solution.imageHint}
                />
              </div>
              <div className={`p-6 md:p-8 lg:p-10 md:order-${solution.id === 'analytics' ? '1' : '2'}`}>
                <div className="mb-4">{solution.icon}</div>
                <h2 className="text-3xl font-semibold text-foreground mb-3">{solution.title}</h2>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <h4 className="text-lg font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-6">
                  {solution.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
                <Button asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      ))}

      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Case Study Summarizer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Use our AI tool to quickly generate concise summaries from your case studies or whitepapers. 
            Paste your document text below to get a preview.
          </p>
        </div>
        <CaseStudySummarizerClient />
      </section>
    </div>
  );
}
