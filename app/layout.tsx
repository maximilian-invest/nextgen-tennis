import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgen-tennisacademy.at'),
  title: {
    default: 'NextGen Tennisacademy — Leistungstennis in Hallein, Salzburg',
    template: '%s — NextGen Tennis Academy',
  },
  description:
    'Die NextGen Tennisacademy ist die spezialisierte Leistungsförderung der Lindenbauer Tennis Academy in Hallein — für die größten Talente von morgen.',
  icons: { icon: asset('/assets/brand/ng-mark.png') },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
