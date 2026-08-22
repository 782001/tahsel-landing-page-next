'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();

  const withoutItems = [
    'landing_comp_without_1',
    'landing_comp_without_2',
    'landing_comp_without_3',
    'landing_comp_without_4',
    'landing_comp_without_5',
    'landing_comp_without_6',
  ];

  const withItems = [
    'landing_comp_with_1',
    'landing_comp_with_2',
    'landing_comp_with_3',
    'landing_comp_with_4',
    'landing_comp_with_5',
    'landing_comp_with_6',
  ];

  return (
    <section id="comparison" className="py-24 bg-[#0E1424] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
            {t('landing_comp_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t('landing_comp_subtitle')}
          </p>
        </div>

        {/* Side-by-side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Without Tahsel Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-rose-950/20 to-gray-900/60 border border-rose-500/20 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-500/20 pb-6">
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t('landing_comp_without_title')}
                </h3>
                <p className="text-xs text-rose-300 mt-1">{t('landing_comp_without_sub')}</p>
              </div>
            </div>

            <div className="space-y-4">
              {withoutItems.map((itemKey, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">
                    {t(itemKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* With Tahsel Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-blue-950/40 via-indigo-950/30 to-gray-900/80 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/10 space-y-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 border-b border-blue-500/20 pb-6 relative z-10">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t('landing_comp_with_title')}
                </h3>
                <p className="text-xs text-emerald-300 mt-1">{t('landing_comp_with_sub')}</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {withItems.map((itemKey, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white font-medium">
                    {t(itemKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
