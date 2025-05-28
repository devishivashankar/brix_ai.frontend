import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, BarChartBig, Users, CheckCircle, Rocket, BarChart, ShieldCheck, RefreshCw } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: `Welcome to ${SITE_NAME} - Unlock Growth with AI-Powered Innovation. Discover our AI products, real-time analytics, and consulting services.`,
};

const whatWeDoItems = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI Products",
    description: "No-code automation, invoice intelligence, call analytics, and custom AI solutions to streamline your operations.",
    link: "/solutions#ai-products",
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-primary" />,
    title: "Real-Time Analytical Services",
    description: "Interactive dashboards, anomaly detection, and predictive modeling to turn data into actionable insights.",
    link: "/solutions#analytics",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Consulting",
    description: "Expert guidance on market strategy, digital transformation, and AI integration to achieve your business goals.",
    link: "/solutions#consulting",
  },
];

const featuredProducts = [
  {
    title: "No-Code RPA",
    description: "Build and deploy automation bots with drag & drop ease, no coding required.",
    image: "/web_bot_builder.jpg",
    imageHint: "automation robot",
    link: "/solutions/no-code-rpa",
  },
  {
    title: "Call Analytics",
    description: "Turn customer conversations into actionable, compliance-ready insights.",
    image: "/analytics.jpg",
    imageHint: "analytics chart",
    link: "/solutions/call-analytics",
  },
  {
    title: "BrixCoder",
    description: "AI-powered medical coding for enhanced accuracy and efficiency in healthcare.",
    image: "/brix_coder.jpg",
    imageHint: "medical technology",
    link: "/solutions/brixcoder",
  },
];

const industries = [
  { name: "Healthcare", icon: <CheckCircle className="h-8 w-8 text-accent" /> },
  { name: "EdTech", icon: <CheckCircle className="h-8 w-8 text-accent" /> },
  { name: "Finance", icon: <CheckCircle className="h-8 w-8 text-accent" /> },
  { name: "Technology", icon: <CheckCircle className="h-8 w-8 text-accent" /> },
];

const whyBrixAiStats = [
  { icon: <Rocket className="h-8 w-8 text-primary" />, text: "40% faster time-to-market" },
  { icon: <BarChart className="h-8 w-8 text-primary" />, text: "Real-time business insights" },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, text: "Secure & compliant solutions" },
  { icon: <RefreshCw className="h-8 w-8 text-primary" />, text: "Flexible delivery models" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative"> {/* Removed gradient, added relative for video positioning */}
        <video
          autoPlay
          loop
          muted
          playsInline // Ensures inline playback on mobile, especially iOS
          className="absolute inset-0 w-full h-full object-cover -z-20" // Video behind overlay and content
        >
          {/* IMPORTANT: Replace this with the actual URL to your video file */}
          <source src="/home_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 -z-10" /> {/* Overlay for text readability */}

        <div className="relative z-0 container mx-auto min-h-[calc(80vh-4rem)] flex flex-col items-center justify-center px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"> {/* Changed text color to white */}
            Unlock Growth with AI-Powered Innovation
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-neutral-200 md:text-xl"> {/* Changed text color to light neutral */}
            Brix AI empowers mid-sized and emerging enterprises with cutting-edge AI products, 
            real-time analytics, and expert consulting to drive efficiency, unlock insights, and 
            accelerate growth in a rapidly evolving digital landscape.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/solutions">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Smarter Tools for Modern Enterprises
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide comprehensive AI solutions tailored to your business needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {whatWeDoItems.map((item) => (
            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
                <Button variant="link" asChild className="mt-4 text-primary">
                  <Link href={item.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">
              See How It Works
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Innovative solutions designed to solve real-world business challenges.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.title} className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-contain bg-gradient-to-br from-muted to-muted/50 group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={product.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">{product.description}</CardDescription>
                  <Button variant="ghost" asChild className="group/btn p-0 h-auto text-primary hover:bg-transparent font-semibold">
                    <Link href={product.link} className="flex items-center gap-2">
                      Discover More 
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Delivering specialized AI solutions across diverse sectors.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              {industry.icon}
              <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Brix AI Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Brix AI?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Partner with us for transformative AI solutions that deliver tangible results.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyBrixAiStats.map((stat) => (
              <div key={stat.text} className="flex flex-col items-center text-center p-4">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                  {stat.icon}
                </div>
                <p className="text-lg font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
