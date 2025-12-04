'use client';

import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MetricsSection from '@/components/sections/MetricsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection'; 
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-[#0B0B0D] min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MetricsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
