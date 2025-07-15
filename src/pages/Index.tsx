import Header from "@/components/Header";
import ServicesCarousel from "@/components/ServicesCarousel";
import Hero from "@/components/Hero";
import CounterMetrics from "@/components/CounterMetrics";
import AboutPreview from "@/components/AboutPreview";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServicesCarousel />
      <Hero />
      <CounterMetrics />
      <AboutPreview />
      <WhatSetsUsApart />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
