'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { landingConfig } from '@/config/landingConfig';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroScreenshots = [
    '/assets/images/android/1.png',
    '/assets/images/android/2.png',
    '/assets/images/android/3.png',
    '/assets/images/android/4.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroScreenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroScreenshots.length]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#0A0E1A] flex items-center">
      {/* Background Decorative Glow Circles */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Shimmer Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-blue-300">
                {t('landing_hero_badge')}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {t('landing_hero_title_1')}{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent block mt-1">
                  {t('landing_hero_title_2')}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {t('landing_hero_subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>{t('landing_hero_cta_whatsapp')}</span>
              </a>

              <button
                onClick={scrollToPricing}
                className="flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 text-blue-400" />
                <span>{t('landing_hero_cta_download')}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('landing_hero_trial_badge')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{t('landing_hero_no_card')}</span>
              </div>
            </div>
          </div>

          {/* Animated _PhoneMockup (matching Flutter design 100%) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative animate-float">
              <div className="relative w-[280px] h-[580px] rounded-[40px] border-2 border-blue-500/30 shadow-[0_0_60px_5px_rgba(59,130,246,0.3),0_20px_30px_rgba(0,0,0,0.5)] p-0.5 bg-transparent">
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-transparent">
                  {heroScreenshots.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-[700ms] ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Tahsel Screenshot ${index + 1}`}
                        fill
                        sizes="280px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
