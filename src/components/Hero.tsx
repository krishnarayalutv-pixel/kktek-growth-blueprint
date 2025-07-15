import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transforming Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Scalable Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              KKTEK Group delivers high-impact software and consulting solutions that 
              propel businesses into the future.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-10 text-lg md:text-xl text-foreground">
              <Zap className="h-6 w-6 text-accent animate-float" />
              <span className="font-medium">
                Your vision. Our engineering. One unstoppable growth story.
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
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