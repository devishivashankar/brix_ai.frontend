import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  BarChartBig,
  Users,
  Target,
  Lightbulb,
  Handshake,
  CheckSquare,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brix AI: our mission, values, and core offerings.",
};

const coreOfferings = [
  {
    id: "ai-products",
    title: "AI Products",
    icon: <Brain className="h-8 w-8 mb-2 text-primary" />,
    description: "AI tools like no-code RPA, invoice intelligence, and call analytics.",
    details: "Our AI tools automate business challenges at scale.",
    image: "/images/offerings/ai-products.png",
    imageHint: "AI brain",
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    icon: <BarChartBig className="h-8 w-8 mb-2 text-primary" />,
    description: "Turn data into insights with dashboards and predictions.",
    details: "Empower strategic decisions with real-time data.",
    image: "/images/offerings/real-time-analytics.png",
    imageHint: "data dashboard",
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: <Users className="h-8 w-8 mb-2 text-primary" />,
    description: "From strategy to AI implementation.",
    details: "Tailored roadmaps and guided adoption.",
    image: "/images/offerings/consulting.png",
    imageHint: "team meeting",
  },
];

const values = [
  {
    title: "Integrity & Innovation",
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    description: "Ethical AI with innovative solutions.",
  },
  {
    title: "Partnership over Push",
    icon: <Handshake className="h-8 w-8 text-accent" />,
    description: "Collaboration first, always.",
  },
  {
    title: "Data-Driven Decisions",
    icon: <Target className="h-8 w-8 text-accent" />,
    description: "Your data guides our strategy.",
  },
  {
    title: "Scalable Solutions",
    icon: <CheckSquare className="h-8 w-8 text-accent" />,
    description: "Built to grow with your business.",
  },
];

const teamMembers = [
  {
    name: "Syed Abu Iqbal Murshedi",
    role: "Co-founder & CEO",
    institution: "IIM KOZHIKODE",
    image: "/images/team/syed.jpg",
    linkedin: "https://www.linkedin.com/in/syed-murshedi",
  },
  {
    name: "Parvat Khattak",
    role: "Gen AI Developer",
    institution: "IIT PALAKKAD",
    image: "/images/team/parvat.jpg",
    linkedin: "https://www.linkedin.com/in/parvat-khattak",
  },
  {
    name: "Somnath Mahata",
    role: "Gen AI Developer",
    institution: "IIT KHARAGPUR",
    image: "/images/team/somnath.jpg",
    linkedin: "https://www.linkedin.com/in/somnath-mahata-3bb469223",
  },
  {
    name: "Manan Parakh",
    role: "Gen AI Developer",
    institution: "IIT KHARAGPUR",
    image: "/images/team/manan_parakh.jpg",
    linkedin: "https://linkedin.com/in/mananparakh",
  },
  {
    name: "Ankit Negi",
    role: "Gen AI Developer",
    institution: "IU INTERNATIONAL UNIVERSITY Germany",
    image: "/images/team/ankit_negi.jpg",
    linkedin: "https://www.linkedin.com/in/negiankitsingh/",
  },
  {
    name: "Priyadarshi Kumar",
    role: "Gen AI Developer",
    institution: "IIT KHARAGPUR",
    image: "/images/team/priyadarshi.jpg",
    linkedin: "https://www.linkedin.com/in/priyadarshi-kumar-092388264/",
  },
  {
    name: "Shiva Shankar Devi",
    role: "SEO & Web Developer",
    institution: "IIT PALAKKAD",
    image: "/images/team/shiva.jpg",
    linkedin: "https://linkedin.com/in/shivashankardevi",
  },
  {
    name: "Adarsh Kumar",
    role: "AI Engineer",
    institution: "IIT GUWAHATI",
    image: "/images/team/adarsh.jpg",
    linkedin: "https://www.linkedin.com/in/aadarshkumars/",
  },
  {
    name: "Abishek N",
    role: "AI Engineer (Digital Marketing)",
    institution: "R.M.D.Engineering College",
    image: "/images/team/abhishek.jpg",
    linkedin: "https://www.linkedin.com/in/abishek7124/",
  },
  {
    name: "Suranjan Karmakar",
    role: "Full Stack Developer",
    institution: "IIT KHARAGPUR",
    image: "/images/team/suranjan_karmakar.jpg",
    linkedin: "https://www.linkedin.com/in/suranjan-karmakar1207",
  },
  {
    name: "Umang Kataria",
    role: "Market Research Expert",
    institution: "IIT JAMMU",
    image: "/images/team/umang.jpg",
    linkedin: "https://linkedin.com/in/umangkataria",
  },
  {
    name: "Durgesh Singh",
    role: "Market Research Expert",
    institution: "IIM Indore",
    image: "/images/team/durgesh_singh.jpeg",
    linkedin: "https://www.linkedin.com/in/durgesh1506/",
  },
  {
    name: "Geetheswar",
    role: "Frontend Developer",
    institution: "IIT Palakkad",
    image: "/images/team/geetheswar.jpeg",
    linkedin: "https://linkedin.com/in/geetheswar",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Who We Are</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
          Brix AI is a dedicated and dynamic team of AI experts, data scientists, and strategic professionals, 
          united by a shared passion for leveraging artificial intelligence to support growth, drive efficiency, and foster innovation.
           With deep respect for the unique challenges and goals of each organization, we collaborate closely with our partners to design thoughtful, intelligent solutions that create lasting impact.
            At Brix AI, we are committed to advancing technology with integrity, purpose, and a human-centered approach
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center shadow-xl">
          <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="text-2xl font-semibold italic text-foreground md:text-3xl">
          At Brix AI, we respectfully support and empower businesses to make informed, data-driven decisions, automate complex operations, and pursue sustainable, long-term growth.
           By combining cutting-edge artificial intelligence with strategic insight, we offer more than just technology—we provide trusted partnership.
            Our team is committed to working collaboratively, listening closely, and delivering intelligent solutions tailored to each organization’s unique needs and values.
             With integrity at the heart of all we do, we aim to contribute meaningfully to our clients' success in an evolving digital world.

          </h2>
          <p className="mt-4 text-muted-foreground">- The Brix AI Team</p>
        </div>
      </section>

      {/* Offerings */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Offerings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover how we help businesses thrive with AI.
          </p>
        </div>
        <Tabs defaultValue={coreOfferings[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            {coreOfferings.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {coreOfferings.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              <Card>
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <p className="text-sm text-foreground/90">{item.details}</p>
                  </div>
                  <div className="h-64 md:h-full">
                    <Image
                      src={item.image}
                      alt={item.imageHint}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Values */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-12 text-4xl font-semibold tracking-tight sm:text-5xl">Our Values</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {values.map(({ icon, title, description }) => (
                <div key={title} className="flex items-start gap-6">
                  {icon}
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            United by passion, powered by purpose — the team behind Brix AI's success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map(({ name, role, institution, image, linkedin }) => (
            <Card key={name} className="text-center">
              <CardHeader className="flex flex-col items-center space-y-4">
                <div className="relative h-[320px] w-[250px] overflow-hidden bg-muted">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground">
                      {name.charAt(0)}
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                <p className="text-sm text-muted-foreground">{role}</p>
                {institution && (
                  <p className="text-sm font-medium text-primary">{institution}</p>
                )}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary hover:text-primary/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
