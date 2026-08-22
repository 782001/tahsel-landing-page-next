'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Star, MonitorSmartphone } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      labelKey: 'landing_stats_rating',
      color: 'from-amber-400 to-yellow-500',
    },
    {
      icon: MonitorSmartphone,
      value: '3',
      labelKey: 'landing_stats_platforms',
      color: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <section className="relative py-14 bg-[#0E1424] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center justify-center divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center pt-6 sm:pt-0"
              >
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-blue-400 mb-3 shadow-inner">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 mt-2 max-w-xs">
                  {t(stat.labelKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
