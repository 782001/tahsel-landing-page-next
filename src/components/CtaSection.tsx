'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { landingConfig } from '@/config/landingConfig';
import { Smartphone, Apple, Monitor, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const CtaSection: React.FC = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    const url = `https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(landingConfig.whatsappTrialMessage)}`;
    window.open(url, '_blank');
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0E1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#1E1B4B] via-[#111827] to-[#0F172A] border-2 border-blue-500/30 shadow-2xl overflow-hidden text-center">
          {/* Decorative Glow Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Shimmer Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t('landing_hero_trial_badge')}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t('landing_cta_title')}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300">
              {t('landing_cta_subtitle')}
            </p>

            {/* Download & WhatsApp Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>{t('landing_cta_whatsapp')}</span>
              </button>

              <button
                onClick={() => openUrl(landingConfig.androidDownloadUrl)}
                className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>{t('landing_cta_download_android')}</span>
              </button>

              <button
                onClick={() => openUrl(landingConfig.iosDownloadUrl)}
                className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <Apple className="w-4 h-4 text-gray-200" />
                <span>{t('landing_cta_download_ios')}</span>
              </button>

              <button
                onClick={() => openUrl(landingConfig.windowsDownloadUrl)}
                className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <Monitor className="w-4 h-4 text-blue-400" />
                <span>{t('landing_cta_download_windows')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
