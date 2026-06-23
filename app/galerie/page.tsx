import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = { title: 'Galerie' };

export default function GaleriePage() {
  return (
    <div className="p-galerie">
      <PageHead
        crumb="Galerie"
        eyebrow="Einblicke · 1. Halleiner TC"
        title="Galerie"
        lead="Plätze, Training und Team. Ein Blick auf das, was die NextGen Tennisacademy ausmacht — am 1. Halleiner Tennisclub in Salzburg."
      />

      <Gallery />

      {/* CTA */}
      <section className="section section--dark">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow on-dark" data-reveal style={{ marginBottom: '1rem', justifyContent: 'center' }}>
            Mehr sehen
          </p>
          <h2 className="h2" data-reveal style={{ color: '#fff' }}>
            Komm vorbei und
            <br />
            spiel mit uns<span className="dot">.</span>
          </h2>
          <div data-reveal style={{ marginTop: '2rem' }}>
            <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
              Training anfragen <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
