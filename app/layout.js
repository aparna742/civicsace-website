import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'CivicsAce — Privacy Policy, Terms, & Support',
  description:
    'Official Legal and Support Center for CivicsAce, the premier U.S. citizenship preparation application. View our Privacy Policy, Terms of Use, and contact support.',
  icons: {
    icon: '/logo.png',
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-sans text-ink antialiased transition-colors duration-normal ease-brand">
        <Header />
        <main className="mt-[72px] flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
