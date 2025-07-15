import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            KKTEK Group is a premier technology consulting and software engineering powerhouse 
            that partners with forward-thinking enterprises to drive digital transformation at scale. 
            Founded on the belief that innovation fuels growth, we architect robust, scalable solutions 
            that empower businesses to accelerate, adapt, and lead in their industries.
          </p>
          
          <Button variant="outline" size="lg" className="group">
            Learn more about us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;