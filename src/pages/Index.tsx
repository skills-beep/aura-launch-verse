
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import ProductFeatures from '../components/ProductFeatures';
import ProductShowcase from '../components/ProductShowcase';
import CountdownTimer from '../components/CountdownTimer';
import TestimonialsSlider from '../components/TestimonialsSlider';
import PricingPlans from '../components/PricingPlans';
import FAQAccordion from '../components/FAQAccordion';
import DeveloperSection from '../components/DeveloperSection';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection scrollY={scrollY} />
        <ProductFeatures />
        <ProductShowcase />
        <CountdownTimer />
        <TestimonialsSlider />
        <PricingPlans />
        <FAQAccordion />
        <DeveloperSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
