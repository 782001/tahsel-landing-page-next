'use client';

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { ScreenshotsSection } from '@/components/ScreenshotsSection';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ComparisonSection />
      <ScreenshotsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
