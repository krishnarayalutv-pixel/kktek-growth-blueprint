import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-12 w-12 rounded-full bg-primary hover:bg-primary-glow shadow-glow hover:shadow-neon transition-all duration-300 hover:scale-110 animate-scroll-fade-up"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default BackToTop;