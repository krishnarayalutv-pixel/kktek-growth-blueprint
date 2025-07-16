import { useEffect, useState } from "react";
import servicesSoftware from "@/assets/service-software-engineering.jpg";
import servicesConsulting from "@/assets/service-consulting.jpg";
import servicesCloud from "@/assets/service-cloud.jpg";
import servicesAutomation from "@/assets/service-automation.jpg";
import servicesSecurity from "@/assets/service-security.jpg";

const services = [
  { 
    name: "Software Engineering", 
    image: servicesSoftware,
    description: "Custom software solutions"
  },
  { 
    name: "Technology Consulting", 
    image: servicesConsulting,
    description: "Strategic technology guidance"
  },
  { 
    name: "Cloud Solutions", 
    image: servicesCloud,
    description: "Scalable cloud infrastructure"
  },
  { 
    name: "Digital Transformation", 
    image: servicesAutomation,
    description: "Process automation & innovation"
  },
  { 
    name: "Cybersecurity", 
    image: servicesSecurity,
    description: "Comprehensive security solutions"
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-xl bg-background shadow-card cursor-pointer group" onClick={() => window.location.href = '/services'}>
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 relative h-64 md:h-80"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90">{service.description}</p>
                  <p className="text-white/70 text-sm mt-2">Click to view all services →</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-4 right-6 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;