'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Receipt,
  Wallet,
  ArrowDownLeft,
  Banknote,
  Package,
  BadgeCheck,
  Landmark,
  BarChart3,
  RefreshCw,
  Crown,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Receipt,
      titleKey: 'landing_feat_sales_title',
      descKey: 'landing_feat_sales_desc',
      accentColor: '#3B82F6', // Blue
      isVip: false,
    },
    {
      icon: Wallet,
      titleKey: 'landing_feat_debts_title',
      descKey: 'landing_feat_debts_desc',
      accentColor: '#10B981', // Green
      isVip: false,
    },
    {
      icon: ArrowDownLeft,
      titleKey: 'landing_feat_my_debts_title',
      descKey: 'landing_feat_my_debts_desc',
      accentColor: '#8B5CF6', // Purple
      isVip: false,
    },
    {
      icon: Banknote,
      titleKey: 'landing_feat_expenses_title',
      descKey: 'landing_feat_expenses_desc',
      accentColor: '#EF4444', // Red
      isVip: false,
    },
    {
      icon: Package,
      titleKey: 'landing_feat_inventory_title',
      descKey: 'landing_feat_inventory_desc',
      accentColor: '#F59E0B', // Amber
      isVip: true,
    },
    {
      icon: BadgeCheck,
      titleKey: 'landing_feat_employees_title',
      descKey: 'landing_feat_employees_desc',
      accentColor: '#EC4899', // Pink
      isVip: true,
    },
    {
      icon: Landmark,
      titleKey: 'landing_feat_vault_title',
      descKey: 'landing_feat_vault_desc',
      accentColor: '#06B6D4', // Cyan
      isVip: true,
    },
    {
      icon: BarChart3,
      titleKey: 'landing_feat_reports_title',
      descKey: 'landing_feat_reports_desc',
      accentColor: '#6366F1', // Indigo
      isVip: false,
    },
    {
      icon: RefreshCw,
      titleKey: 'landing_feat_sync_title',
      descKey: 'landing_feat_sync_desc',
      accentColor: '#14B8A6', // Teal
      isVip: false,
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
            {t('landing_features_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t('landing_features_subtitle')}
          </p>
        </div>

        {/* Feature Cards Grid (matching Flutter _FeatureCard design 100%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className={`p-7 rounded-[20px] bg-[#1A2232] border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
                  feat.isVip
                    ? 'border-amber-500/40 hover:border-amber-400 shadow-lg hover:shadow-[0_12px_24px_rgba(245,158,11,0.15)]'
                    : 'border-[#1E293B] hover:border-blue-500/50 shadow-md hover:shadow-[0_12px_24px_rgba(59,130,246,0.15)]'
                }`}
              >
                <div>
                  {/* Top Row: Icon Container & VIP Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-xl border flex items-center justify-center"
                      style={{
                        backgroundColor: `${feat.accentColor}1A`, // 10% opacity
                        borderColor: `${feat.accentColor}33`,     // 20% opacity
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: feat.accentColor }} />
                    </div>

                    {feat.isVip && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-[11px] font-bold shadow-md shadow-amber-500/20">
                        <Crown className="w-3.5 h-3.5 fill-white text-white" />
                        <span>{t('landing_feat_vip_badge')}</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-[#F1F5F9] mb-2.5 leading-snug">
                    {t(feat.titleKey)}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {t(feat.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
