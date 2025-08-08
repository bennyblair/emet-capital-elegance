import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSignals from "@/components/TrustSignals";
import AboutSnippet from "@/components/AboutSnippet";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  console.log('Index page rendering...');
  useScrollAnimation();

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Emet Capital - Bespoke Commercial Lending Solutions"
        description="Australia's premier commercial lending brokerage. Expert asset finance, debtor funding & structured lending solutions engineered for ambitious businesses."
      />
      <OrganizationStructuredData />
      
      <Navigation />
      <main id="main-content">
        <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <TrustSignals />
      <div id="about">
        <StatsSection />
      </div>
      <TestimonialsSection />
      <div id="process">
        <ProcessSection />
      </div>
      <AboutSnippet />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;