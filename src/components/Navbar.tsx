'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { landingConfig } from '@/config/landingConfig';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`;
    window.open(url, '_blank');
  };

  const navItems = [
    { id: 'features', label: t('landing_nav_features') },
    { id: 'comparison', label: t('landing_nav_comparison') },
    { id: 'screenshots', label: t('landing_nav_screenshots') },
    { id: 'pricing', label: t('landing_nav_pricing') },
    { id: 'faq', label: t('landing_nav_faq') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0E1A]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/appLogo.png"
                alt="Tahsel Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              {t('landing_app_name')}
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* CTA Link */}
            <a
              href={`https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-200 active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{t('landing_nav_contact')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-xl"
            >
              <Globe className="w-5 h-5 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-start px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <a
              href={`https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg shadow-emerald-600/30"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{t('landing_hero_cta_whatsapp')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
