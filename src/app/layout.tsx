import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://tahsel-page.vercel.app'),
  title: {
    default: 'تطبيق تحصيل | نظام إدارة الأعمال والديون والمخزون',
    template: '%s | تطبيق تحصيل'
  },
  description:
    'تطبيق تحصيل هو أفضل نظام شامل لإدارة مبيعاتك، فواتيرك، ديون العملاء والموردين، المخزون، المصروفات، الموظفين، ورصيد الخزنة بدقة وسهولة. متاح للأندرويد، الآيفون، والكمبيوتر.',
  applicationName: 'تطبيق تحصيل - Tahsel App',
  keywords: [
    'تطبيق تحصيل',
    'برنامج تحصيل',
    'تحصيل',
    'Tahsel',
    'برنامج حسابات',
    'إدارة المحلات',
    'إدارة الديون',
    'تذكيرات واتساب',
    'برنامج مخزون وفواتير',
    'برنامج كافيه وبلايستيشن',
    'إدارة المصروفات والخزنة',
    'تطبيق كاشير',
    'نظام نقاط البيع POS',
    'إدارة الموظفين'
  ],
  authors: [{ name: 'Tahsel Team', url: 'https://tahsel-page.vercel.app' }],
  creator: 'Tahsel Team',
  publisher: 'Tahsel Team',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'تطبيق تحصيل | إدارة مشروعك بالكامل من مكان واحد',
    description:
      'تطبيق تحصيل هو الحل الأمثل لإدارة الفواتير، الديون، المخزون، المصروفات، الموظفين والخزنة. صُمم خصيصاً لأصحاب الأعمال في مصر والوطن العربي.',
    url: 'https://tahsel-page.vercel.app',
    siteName: 'تطبيق تحصيل - Tahsel',
    images: [
      {
        url: '/assets/images/appLogo.png',
        width: 512,
        height: 512,
        alt: 'تطبيق تحصيل Logo',
        type: 'image/png',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تطبيق تحصيل | إدارة مشروعك بالكامل',
    description:
      'تطبيق تحصيل لإدارة مبيعاتك، فواتيرك، ديونك، المخزون، والمصروفات بسهولة.',
    images: ['/assets/images/appLogo.png'],
    creator: '@tahsel',
  },
  icons: {
    icon: [
      { url: '/assets/images/appLogo.png', type: 'image/png' },
    ],
    shortcut: ['/assets/images/appLogo.png'],
    apple: [
      { url: '/assets/images/appLogo.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-[#0A0E1A] text-white antialiased selection:bg-blue-600/30" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
