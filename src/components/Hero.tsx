import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-neon opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk text-foreground mb-6 leading-tight tracking-tight">
              Transforming <span className="text-primary-bright">Ideas</span> into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-neon">
                Scalable Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-poppins">
              KKTEK Group delivers <span className="text-accent-cyan font-semibold">high-impact</span> software and consulting solutions that 
              propel businesses into the <span className="text-primary-glow font-semibold">future</span>.
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-10 text-lg md:text-xl text-foreground">
              <Zap className="h-6 w-6 text-accent animate-float" />
              <span className="font-medium font-poppins tracking-tight">
                💡 Your <span className="text-primary-bright">vision</span>. Our <span className="text-accent-cyan">engineering</span>. One <span className="text-accent">unstoppable growth story</span>.
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 font-poppins hover:shadow-neon hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-poppins hover:shadow-glow hover:scale-105 transition-all duration-300">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;