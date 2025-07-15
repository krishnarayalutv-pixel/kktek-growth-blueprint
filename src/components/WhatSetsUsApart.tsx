import { Code, Target, Handshake } from "lucide-react";

const WhatSetsUsApart = () => {
  const differentiators = [
    {
      icon: Code,
      title: "Engineering-first mindset",
      description: "We combine deep technical expertise with strategic insight to build systems that aren't just functional—they're future-proof."
    },
    {
      icon: Target,
      title: "Outcome-driven delivery",
      description: "Your goals are our metrics. We measure success by the real impact on your bottom line and your customers' experience."
    },
    {
      icon: Handshake,
      title: "Long-term partnerships",
      description: "We don't just execute projects; we become an extension of your team, invested in your sustained success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Sets Us Apart?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-background shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;