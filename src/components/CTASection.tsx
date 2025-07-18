import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with us to create secure, scalable, revenue-driving systems that stand the test of time.
          </p>
          
          < a href ="/contact" >
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-glow" >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
