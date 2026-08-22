'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { qKey: 'landing_faq_q1', aKey: 'landing_faq_a1' },
    { qKey: 'landing_faq_q2', aKey: 'landing_faq_a2' },
    { qKey: 'landing_faq_q3', aKey: 'landing_faq_a3' },
    { qKey: 'landing_faq_q4', aKey: 'landing_faq_a4' },
    { qKey: 'landing_faq_q5', aKey: 'landing_faq_a5' },
    { qKey: 'landing_faq_q6', aKey: 'landing_faq_a6' },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
            {t('landing_faq_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t('landing_faq_subtitle')}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-start gap-4 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {t(faq.qKey)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {t(faq.aKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
