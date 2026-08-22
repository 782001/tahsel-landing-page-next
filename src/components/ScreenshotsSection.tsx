'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  Smartphone,
  Apple,
  Monitor,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  X,
  RotateCcw,
} from 'lucide-react';

type Platform = 'android' | 'ios' | 'windows';

export const ScreenshotsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activePlatform, setActivePlatform] = useState<Platform>('android');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Mouse Drag & Wheel Horizontal Scroll References
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);

  const androidImages = Array.from({ length: 16 }, (_, i) => `/assets/images/android/${i + 1}.png`);
  const iosImages = Array.from({ length: 16 }, (_, i) => `/assets/images/ios/${i + 1}.png`);
  const windowsImages = Array.from({ length: 16 }, (_, i) => `/assets/images/windows/${i + 1}.png`);

  const currentImages =
    activePlatform === 'android'
      ? androidImages
      : activePlatform === 'ios'
      ? iosImages
      : windowsImages;

  const isMobilePlatform = activePlatform === 'android' || activePlatform === 'ios';

  const scrollTrack = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = isMobilePlatform ? 300 : 500;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % currentImages.length));
      setZoomLevel(1);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + currentImages.length) % currentImages.length);
      setZoomLevel(1);
    }
  };

  // Convert Mouse Wheel Scrolling to Horizontal Scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [activePlatform]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isMouseDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !isMouseDownRef.current) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
  };

  const handleCardClick = (index: number) => {
    if (isDraggingRef.current) return;
    setLightboxIndex(index);
    setZoomLevel(1);
  };

  return (
    <section id="screenshots" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
            {t('landing_screenshots_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t('landing_screenshots_subtitle')}
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                setActivePlatform('android');
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activePlatform === 'android'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{t('landing_screenshots_tab_android')}</span>
            </button>

            <button
              onClick={() => {
                setActivePlatform('ios');
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activePlatform === 'ios'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Apple className="w-4 h-4" />
              <span>{t('landing_screenshots_tab_ios')}</span>
            </button>

            <button
              onClick={() => {
                setActivePlatform('windows');
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activePlatform === 'windows'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>{t('landing_screenshots_tab_windows')}</span>
            </button>
          </div>
        </div>

        {/* Gallery Horizontal Scroll Track with Navigation Buttons */}
        <div className="relative group/track">
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollTrack('left')}
            aria-label="Scroll Left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 shadow-xl backdrop-blur-md transition-all duration-200 opacity-90 group-hover/track:opacity-100 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontal Scroll Track (Mouse Drag & Wheel Enabled) */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex items-center gap-6 overflow-x-auto py-6 px-10 scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentImages.map((src, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-blue-500/60 shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group bg-transparent ${
                  isMobilePlatform
                    ? 'w-[240px] h-[480px]'
                    : 'w-[460px] sm:w-[520px] h-[300px]'
                }`}
              >
                <Image
                  src={src}
                  alt={`Tahsel Screenshot ${index + 1}`}
                  fill
                  sizes={isMobilePlatform ? '240px' : '520px'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />

                {/* Hover Zoom Overlay Badge */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-blue-600 text-white shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full border border-white/20">
                    {t('landing_screenshots_click_zoom')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollTrack('right')}
            aria-label="Scroll Right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/20 shadow-xl backdrop-blur-md transition-all duration-200 opacity-90 group-hover/track:opacity-100 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX DIALOG MODAL WITH ZOOM & NAVIGATION */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Lightbox Header Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-50 text-white">
            <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
              {lightboxIndex + 1} / {currentImages.length}
            </div>

            {/* Zoom & Control Tools */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
                title={t('landing_screenshots_zoom_in')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.5, 1))}
                title={t('landing_screenshots_zoom_out')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  onClick={() => setZoomLevel(1)}
                  title={t('landing_screenshots_reset_zoom')}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setLightboxIndex(null)}
                title={t('landing_screenshots_close')}
                className="p-2.5 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white shadow-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Display */}
          <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Image Button */}
            <button
              onClick={handlePrevLightbox}
              className="absolute left-2 z-50 p-3 rounded-full bg-white/10 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Zoomable Image Holder */}
            <div
              className="relative max-w-full max-h-full transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoomLevel})`,
                width: isMobilePlatform ? '340px' : '900px',
                height: isMobilePlatform ? '680px' : '520px',
              }}
            >
              <Image
                src={currentImages[lightboxIndex]}
                alt={`Expanded Screenshot ${lightboxIndex + 1}`}
                fill
                sizes="1000px"
                className="object-contain rounded-2xl shadow-2xl"
              />
            </div>

            {/* Next Image Button */}
            <button
              onClick={handleNextLightbox}
              className="absolute right-2 z-50 p-3 rounded-full bg-white/10 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Bottom Caption Hint */}
          <div className="text-xs text-gray-400 font-medium">
            {t('landing_screenshots_keyboard_hint')}
          </div>
        </div>
      )}
    </section>
  );
};
