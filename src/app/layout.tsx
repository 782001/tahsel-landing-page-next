import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://tahsel-page.vercel.app'),
  title: {
    default: 'تطبيق تحصيل | إدارة مشروعك بالكامل من مكان واحد',
    template: '%s | تطبيق تحصيل'
  },
  description:
    'تطبيق تحصيل هو أفضل نظام شامل لإدارة مبيعاتك، فواتيرك، ديون العملاء والموردين، المخزون، المصروفات، الموظفين، ورصيد الخزنة بدقة وسهولة. متاح للأندرويد، الآيفون، والكمبيوتر.',
  applicationName: 'تطبيق تحصيل - Tahsel App',
  keywords: [
    // العلامة التجارية واسم التطبيق
    'تطبيق تحصيل',
    'تحصيل',
    'برنامج تحصيل',
    'موقع تحصيل',
    'موقع تطبيق تحصيل',
    'تطبيق تحصيل لادارة مشروعك',
    'تطبيق تحصيل لإدارة مشروعك بالكامل',
    'منصة تحصيل',
    'Tahsel',
    'Tahsel App',
    'Tahsel Application',

    // إدارة المشاريع والمحلات
    'إدارة المشاريع',
    'إدارة المشاريع الصغيرة',
    'إدارة المشروعات',
    'إدارة المحلات التجارية',
    'برنامج إدارة المحلات',
    'برنامج إدارة المتاجر',
    'نظام إدارة الأنشطة التجارية',
    'تطبيق إدارة الأعمال',

    // الحسابات والمحاسبة
    'برنامج حسابات',
    'برنامج محاسبة',
    'برنامج حسابات ومخازن',
    'برنامج حسابات للمحلات',
    'برنامج محاسبة للمحلات والشركات',
    'دفتر حسابات رقمي',
    'دفتر حسابات إلكتروني',
    'بديل الدفتر الورقي',

    // الديون والعملاء والموردين
    'إدارة الديون',
    'دفتر الديون',
    'كشكول الديون',
    'تسجيل ديون العملاء',
    'متابعة ديون الموردين',
    'تذكيرات واتساب',
    'تذكير الديون بالواتساب',
    'إرسال تذكير بالدين واتساب',
    'كشف حساب عميل',
    'كشف حساب مورد',

    // الكاشير ونقاط البيع والفواتير
    'تطبيق كاشير',
    'برنامج كاشير',
    'برنامج كاشير للمحلات',
    'نظام نقاط البيع',
    'نظام نقاط البيع POS',
    'برنامج POS',
    'برنامج فواتير',
    'إصدار الفواتير',
    'طباعة الفواتير',
    'طباعة فواتير بلوتوث',
    'طباعة إيصالات حرارية',

    // المخزون والمستودعات
    'إدارة المخزون',
    'برنامج مخزون وفواتير',
    'برنامج إدارة المخازن',
    'جرد المخازن',
    'جرد المخزون',
    'تتبع حركة الأصناف',
    'قارئ الباركود',
    'نظام الباركود للمحلات',

    // الخزنة والمصروفات والأرباح
    'إدارة الخزنة',
    'حساب الأرباح والخسائر',
    'تسجيل المصروفات اليومية',
    'حركة النقدية',
    'تقارير مالية',
    'تقارير المبيعات',
    'إدارة الموظفين',
    'رواتب الموظفين والعمولات',
    'صلاحيات الكاشير والمستخدمين',

    // أنشطة تجارية متخصصة
    'برنامج كافيه وبلايستيشن',
    'برنامج إدارة الكافيهات',
    'برنامج إدارة المقاهي',
    'برنامج صالات البلايستيشن',
    'برنامج سوبر ماركت',
    'برنامج محلات الملابس',
    'برنامج محلات الموبايل',
    'برنامج محلات العطارة',
    'برنامج للمطاعم',
    'برنامج للمكتبات',
    'برنامج تجارة الجملة والقطاعي',

    // المنصات والأنظمة
    'برنامج حسابات للأندرويد',
    'برنامج حسابات للآيفون',
    'برنامج حسابات للكمبيوتر',
    'برنامج حسابات ويندوز',
    'تطبيق تحصيل APK',
    'تطبيق محاسبي سحابي',

    // كلمات بحث بالإنجليزية
    'pos system',
    'accounting app',
    'inventory management',
    'cashier app',
    'debt manager',
    'invoicing software',
    'small business management'
  ],
  authors: [{ name: 'Tahsel Team', url: 'https://tahsel-page.vercel.app' }],
  creator: 'Tahsel Team',
  publisher: 'Tahsel Team',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google696e958d2625ad02',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'تطبيق تحصيل',
  alternateName: [
    'Tahsel',
    'Tahsel App',
    'برنامج تحصيل',
    'موقع تحصيل',
    'تطبيق تحصيل لادارة مشروعك',
    'تطبيق تحصيل لإدارة مشروعك بالكامل',
    'نظام تحصيل لإدارة الأعمال'
  ],
  description:
    'تطبيق تحصيل هو أفضل نظام شامل لإدارة مبيعاتك، فواتيرك، ديون العملاء والموردين، المخزون، المصروفات، الموظفين، ورصيد الخزنة بدقة وسهولة. متاح للأندرويد، الآيفون، والكمبيوتر.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS, Windows',
  url: 'https://tahsel-page.vercel.app',
  image: 'https://tahsel-page.vercel.app/assets/images/appLogo.png',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EGP',
    description: '15 يوم تجربة مجانية',
  },
  featureList: [
    'إدارة الديون والعملاء مع تذكيرات واتساب التلقائية',
    'إدارة الفواتير والطباعة الحرارية والبلوتوث',
    'إدارة المخزون والمستودعات والباركود',
    'إدارة الخزنة والمصروفات وحساب الأرباح والخسائر',
    'إدارة الموظفين وتحديد الصلاحيات',
    'نظام خاص لإدارة الكافيهات وصالات البلايستيشن',
    'متاح على الهواتف (أندرويد وآيفون) وأجهزة الكمبيوتر (ويندوز)'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0E1A] text-white antialiased selection:bg-blue-600/30" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
