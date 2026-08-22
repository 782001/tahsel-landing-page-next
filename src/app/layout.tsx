import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://tahsel.app'),
  title: 'تحصيل | نظام إدارة الأعمال والديون والمخزون والمصروفات الأول في مصر',
  description:
    'نظام شامل لإدارة مبيعاتك، فواتيرك، ديون العملاء والموردين، المخزون، المصروفات، الموظفين، ورصيد الخزنة بدقة وسهولة. متاح للأندرويد، الآيفون، والكمبيوتر.',
  keywords: [
    'تطبيق تحصيل',
    'برنامج حسابات',
    'إدارة المحلات',
    'إدارة الديون',
    'تذكيرات واتساب',
    'برنامج مخزون وفواتير',
    'برنامج كافيه وبلايستيشن',
    'إدارة المصروفات والخزنة',
  ],
  authors: [{ name: 'Tahsel Team' }],
  openGraph: {
    title: 'تحصيل | إدارة مشروعك بالكامل من مكان واحد',
    description:
      'من الفواتير والديون والمخزون إلى المصروفات والموظفين والخزنة والتقارير. صُمم خصيصاً لأصحاب الأعمال في مصر.',
    url: 'https://tahsel.app',
    siteName: 'Tahsel App',
    images: [
      {
        url: '/assets/images/appLogo.png',
        width: 512,
        height: 512,
        alt: 'تحصيل Logo',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  icons: {
    icon: '/assets/images/appLogo.png',
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
