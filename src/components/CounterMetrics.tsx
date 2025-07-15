import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Briefcase, Globe } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  icon: React.ComponentType<any>;
  description: string;
}

const Counter = ({ end, duration, suffix = "", prefix = "", icon: Icon, description }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0); // Reset count each time it comes into view
          setHasAnimated(false);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center animate-scroll-fade-up">
      <div className="mb-4">
        <Icon className="h-8 w-8 text-primary mx-auto animate-float" />
      </div>
      <div className={`text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-2 transition-all duration-500 ${
        hasAnimated ? 'animate-bounce-scale shadow-neon' : ''
      }`}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-sm text-accent-cyan font-medium mb-1">
        {description}
      </p>
    </div>
  );
};

const CounterMetrics = () => {
  const metrics = [
    { 
      value: 11, 
      suffix: "+", 
      label: "Years in Industry",
      description: "Delivering tech excellence since 2014",
      icon: TrendingUp
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Clients Served",
      description: "Trusted partnerships worldwide",
      icon: Users
    },
    { 
      value: 100, 
      suffix: "+", 
      label: "Projects Delivered",
      description: "Solutions that drive growth",
      icon: Briefcase
    },
    { 
      value: 6, 
      suffix: "+", 
      label: "Countries Reached",
      description: "Global impact, local expertise",
      icon: Globe
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-neon opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <Counter
                end={metric.value}
                duration={2000}
                suffix={metric.suffix}
                icon={metric.icon}
                description={metric.description}
              />
              <p className="text-lg font-medium font-poppins text-muted-foreground mt-2">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterMetrics;