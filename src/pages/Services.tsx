import React from "react";
import { CheckCircle, Code, Cloud, TestTube, Wrench, Users, UserCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Robust apps & platforms tailored to your needs.",
    details: "We design, build, and scale custom software — from enterprise systems to customer-facing products — ensuring performance, security & adaptability."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scale securely with agile cloud infrastructure.",
    details: "Our experts architect, migrate, and manage cloud environments (AWS, Azure, GCP) using DevOps & serverless practices — optimizing cost, security & uptime."
  },
  {
    icon: TestTube,
    title: "Automation Testing",
    description: "Ensure quality with intelligent automated testing.",
    details: "We implement CI/CD pipelines and robust test automation frameworks to accelerate deployments, reduce bugs, and elevate overall code reliability."
  },
  {
    icon: Wrench,
    title: "Software Maintenance",
    description: "Keep your systems secure, updated & optimized.",
    details: "Proactive maintenance, bug fixing, and performance tuning ensure your platforms are always stable, current, and future-proofed."
  },
  {
    icon: Users,
    title: "BPO",
    description: "Efficient, scalable back-office support.",
    details: "Free your core team to focus on innovation — we handle operations like data entry, customer service, and admin with precision & flexibility."
  },
  {
    icon: UserCheck,
    title: "Staffing",
    description: "Flexible, skilled teams when you need them.",
    details: "Access vetted professionals — developers, QA, DevOps, PMs — available on-demand to ramp up resources quickly and complement your in-house team."
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Strategic tech advisory to future‑proof your business.",
    details: "Our consultants analyze your tech landscape, align with your objectives, and craft actionable digital roadmaps for long-term growth."
  }
];

const whatSetsUsApart = [
  "Engineering-first mindset",
  "Outcome-driven delivery", 
  "Long-term partnerships"
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Services Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Partner with KKTEK Group to build, scale, and secure digital solutions that give your business a competitive edge. From custom software to strategic consulting — we drive outcomes that matter.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:scale-105 transition-transform duration-300">
            <a href="/contact">Let's Talk</a>
          </Button>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                {/* Icon Section */}
                <div className="flex-1 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300 shadow-glow">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
                    {service.title}
                  </h3>
                  <p className="text-xl text-accent font-medium mb-6">
                    {service.description}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              💡 Your vision. Our engineering. One unstoppable growth story.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {whatSetsUsApart.map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Ready to accelerate your digital journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Talk to our experts to see how KKTEK Group can transform your vision into scalable impact.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:scale-105 transition-transform duration-300">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;