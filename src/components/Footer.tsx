'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { landingConfig } from '@/config/landingConfig';
import { Phone, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`;

  return (
    <footer className="bg-[#070A14] border-t border-white/10 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11">
                <Image src="/assets/images/appLogo.png" alt="Tahsel Logo" fill sizes="44px" className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">{t('landing_app_name')}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t('landing_footer_tagline')}
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={landingConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 transition-all duration-200"
              >
                <FacebookIcon />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Support"
                className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-600/20 text-gray-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={`mailto:${landingConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Us"
                className="p-2.5 rounded-full bg-white/5 hover:bg-indigo-600/20 text-gray-300 hover:text-indigo-400 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('landing_footer_links')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">
                  {t('landing_nav_features')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition-colors">
                  {t('landing_nav_comparison')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('screenshots')} className="hover:text-white transition-colors">
                  {t('landing_nav_screenshots')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                  {t('landing_nav_pricing')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  {t('landing_nav_faq')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('landing_footer_contact')}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>{t('landing_footer_whatsapp')} {landingConfig.phoneNumber}</span>
              </a>

              <a
                href={`mailto:${landingConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{landingConfig.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-gray-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{t('landing_footer_support')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Terms / Privacy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} تحصيل Tahsel. {t('landing_footer_rights')}.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={landingConfig.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {t('landing_footer_privacy')}
            </a>
            <a
              href={landingConfig.termsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {t('landing_footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
