'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { landingConfig } from '@/config/landingConfig';
import {
  Star,
  Crown,
  Smartphone,
  Monitor,
  MonitorSmartphone,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

type PlanLevel = 'standard' | 'vip';
type PlatformType = 'mobile' | 'windows' | 'both';
type BillingCycle = 'monthly' | 'semiAnnual' | 'yearly' | 'lifetime';

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const [selectedLevel, setSelectedLevel] = useState<PlanLevel>('standard');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('both');
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('semiAnnual');

  const isVip = selectedLevel === 'vip';
  const isBoth = selectedPlatform === 'both';

  // Calculate current price
  const calculatePrice = (): number => {
    if (isVip) {
      switch (selectedCycle) {
        case 'monthly':
          return isBoth ? landingConfig.vipBothMonthlyPrice : landingConfig.vipSingleMonthlyPrice;
        case 'semiAnnual':
          return isBoth ? landingConfig.vipBoth6MonthPrice : landingConfig.vipSingle6MonthPrice;
        case 'yearly':
          return isBoth ? landingConfig.vipBothYearlyPrice : landingConfig.vipSingleYearlyPrice;
        case 'lifetime':
          return isBoth ? landingConfig.vipBothLifetimePrice : landingConfig.vipSingleLifetimePrice;
      }
    } else {
      switch (selectedCycle) {
        case 'monthly':
          return isBoth ? landingConfig.standardBothMonthlyPrice : landingConfig.standardSingleMonthlyPrice;
        case 'semiAnnual':
          return isBoth ? landingConfig.standardBoth6MonthPrice : landingConfig.standardSingle6MonthPrice;
        case 'yearly':
          return isBoth ? landingConfig.standardBothYearlyPrice : landingConfig.standardSingleYearlyPrice;
        case 'lifetime':
          return isBoth ? landingConfig.standardBothLifetimePrice : landingConfig.standardSingleLifetimePrice;
      }
    }
  };

  // Calculate original un-discounted price
  const calculateOriginalPrice = (): number | null => {
    const baseMonthly = isVip
      ? isBoth ? landingConfig.vipBothMonthlyPrice : landingConfig.vipSingleMonthlyPrice
      : isBoth ? landingConfig.standardBothMonthlyPrice : landingConfig.standardSingleMonthlyPrice;

    if (selectedCycle === 'semiAnnual') return baseMonthly * 6;
    if (selectedCycle === 'yearly') return baseMonthly * 12;
    return null;
  };

  // Calculate monthly equivalent
  const calculateMonthlyEquivalent = (): number | null => {
    const price = calculatePrice();
    if (selectedCycle === 'semiAnnual') return Math.round(price / 6);
    if (selectedCycle === 'yearly') return Math.round(price / 12);
    return null;
  };

  const currentPrice = calculatePrice();
  const originalPrice = calculateOriginalPrice();
  const monthlyEquivalent = calculateMonthlyEquivalent();

  const getWhatsAppUrl = () => {
    const levelStr = isVip ? 'VIP (الكاملة)' : 'Standard (الأساسية)';
    const platformStr =
      selectedPlatform === 'both'
        ? 'هاتف + كمبيوتر'
        : selectedPlatform === 'mobile'
        ? 'هاتف'
        : 'كمبيوتر';

    let cycleStr = 'شهري';
    if (selectedCycle === 'semiAnnual') cycleStr = '6 أشهر (نصف سنوي)';
    if (selectedCycle === 'yearly') cycleStr = 'سنوي';
    if (selectedCycle === 'lifetime') cycleStr = 'ترخيص مدى الحياة';

    const text = `أهلاً بك، أريد الاشتراك في تطبيق تحصيل:\n• المستوى: ${levelStr}\n• المنصة: ${platformStr}\n• نظام السداد: ${cycleStr}\n• السعر: ${currentPrice} ج.م`;
    return `https://wa.me/${landingConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const standardFeatures = [
    t('landing_pricing_feat_sales'),
    t('landing_pricing_feat_debts'),
    t('landing_pricing_feat_my_debts'),
    t('landing_pricing_feat_expenses'),
    t('landing_pricing_feat_reports'),
    t('landing_pricing_feat_whatsapp'),
    t('landing_pricing_feat_sync'),
    t('landing_pricing_feat_support'),
  ];

  const vipFeatures = [
    t('landing_pricing_feat_inventory'),
    t('landing_pricing_feat_purchases'),
    t('landing_pricing_feat_employees'),
    t('landing_pricing_feat_vault'),
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0E1424] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
            {t('landing_pricing_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t('landing_pricing_subtitle')}
          </p>
        </div>

        {/* SELECTOR CONTROLS */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {/* 1. Level Selector (Standard vs VIP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setSelectedLevel('standard')}
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 text-start ${
                selectedLevel === 'standard'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Star className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-bold text-base">{t('landing_pricing_level_standard')}</div>
                <div className="text-xs opacity-80 mt-0.5">{t('landing_pricing_level_standard_sub')}</div>
              </div>
            </button>

            <button
              onClick={() => setSelectedLevel('vip')}
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 text-start relative overflow-hidden ${
                selectedLevel === 'vip'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Crown className="w-6 h-6 shrink-0 text-amber-300" />
              <div>
                <div className="font-bold text-base flex items-center gap-2">
                  <span>{t('landing_pricing_level_vip')}</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-[10px] font-black uppercase tracking-wider text-amber-200">
                    {t('landing_pricing_popular_badge')}
                  </span>
                </div>
                <div className="text-xs opacity-80 mt-0.5">{t('landing_pricing_level_vip_sub')}</div>
              </div>
            </button>
          </div>

          {/* 2. Platform Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setSelectedPlatform('mobile')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                selectedPlatform === 'mobile'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{t('landing_pricing_platform_mobile')}</span>
            </button>

            <button
              onClick={() => setSelectedPlatform('windows')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                selectedPlatform === 'windows'
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>{t('landing_pricing_platform_windows')}</span>
            </button>

            <button
              onClick={() => setSelectedPlatform('both')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                selectedPlatform === 'both'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MonitorSmartphone className="w-4 h-4" />
              <span>{t('landing_pricing_platform_both')}</span>
            </button>
          </div>

          {/* 3. Billing Cycle Selector (matching Flutter _buildBillingCycleSelector) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'monthly', label: t('landing_pricing_cycle_monthly'), badge: null, isGold: false },
              { id: 'semiAnnual', label: t('landing_pricing_cycle_6months'), badge: t('landing_pricing_save_1month'), isGold: false },
              { id: 'yearly', label: t('landing_pricing_cycle_yearly'), badge: t('landing_pricing_save_2months'), isGold: false },
              { id: 'lifetime', label: t('landing_pricing_cycle_lifetime'), badge: t('landing_pricing_lifetime_badge'), isGold: true },
            ].map((cycle) => {
              const isSelected = selectedCycle === cycle.id;
              return (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id as BillingCycle)}
                  className={`px-4 py-3.5 rounded-2xl transition-all duration-200 flex flex-col items-center justify-center text-center ${
                    isSelected
                      ? 'bg-[#1E293B] border-2 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0F172A] border border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[15px] ${isSelected ? 'font-bold text-white' : 'font-medium text-gray-400'}`}>
                    {cycle.label}
                  </span>

                  {cycle.badge && (
                    <span
                      className={`mt-1.5 px-2 py-0.5 rounded-[10px] text-[11px] font-bold ${
                        cycle.isGold
                          ? 'bg-amber-400/20 text-amber-300'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {cycle.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* DYNAMIC PRICE DISPLAY CARD */}
        <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#161F36] to-[#0F172A] border-2 border-blue-500/30 shadow-2xl relative overflow-hidden">
          {/* Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-2xl ${
                  isVip ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
                }`}
              >
                {isVip ? <Crown className="w-8 h-8" /> : <Star className="w-8 h-8" />}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  {isVip ? t('landing_pricing_level_vip') : t('landing_pricing_level_standard')}
                </h3>
                <p className="text-sm text-gray-400">
                  {selectedPlatform === 'both'
                    ? t('landing_pricing_platform_both')
                    : selectedPlatform === 'mobile'
                    ? t('landing_pricing_platform_mobile')
                    : t('landing_pricing_platform_windows')}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('landing_hero_trial_badge')}</span>
            </div>
          </div>

          {/* Pricing Calculation Row */}
          <div className="flex flex-wrap items-baseline gap-4 mb-8">
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
              {currentPrice}{' '}
              <span className="text-xl font-bold text-gray-400">
                {t('landing_pricing_currency')}
              </span>
            </div>

            {originalPrice && (
              <div className="text-xl font-semibold text-gray-500 line-through">
                {originalPrice} {t('landing_pricing_currency')}
              </div>
            )}

            {monthlyEquivalent && (
              <div className="text-sm font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl">
                {t('landing_pricing_monthly_equiv')} {monthlyEquivalent} {t('landing_pricing_currency')} {t('landing_pricing_per_month_short')}
              </div>
            )}
          </div>

          {/* Included Features Grid */}
          <div className="space-y-4 mb-10">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
              {t('landing_pricing_included_features')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {standardFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm text-gray-200">{feat}</span>
                </div>
              ))}

              {isVip &&
                vipFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm text-amber-200 font-semibold">{feat}</span>
                  </div>
                ))}

              {isBoth && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-sm text-blue-200 font-semibold">
                    {t('landing_pricing_feat_devices_both')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Links */}
          <div className="space-y-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 active:scale-[0.99]"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>{t('landing_pricing_cta')}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3 text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-2xl transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>{t('landing_pricing_order_whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
