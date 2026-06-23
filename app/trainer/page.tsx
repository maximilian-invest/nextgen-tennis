import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import CoachExplorer from '@/components/CoachExplorer';

export const metadata: Metadata = { title: 'Trainer' };

export default function TrainerPage() {
  return (
    <div className="p-trainer">
      <PageHead
        crumb="Trainer"
        eyebrow="Das Team hinter NextGen"
        title="Trainer"
        lead="Lizenzierte Coaches, ein Ex-Profi und ein Athletiktrainer. Ein Team, das qualitativ hochwertige Betreuung für Spieler aller Leistungsstufen gewährleistet."
      />

      {/* STAT BAR */}
      <section className="statbar">
        <div className="wrap statbar-in">
          <div className="stat">
            <div className="n">
              <span data-count="3">0</span>
            </div>
            <div className="c">Coaches im Team</div>
          </div>
          <div className="stat">
            <div className="n">Hallein</div>
            <div className="c">Standort</div>
          </div>
          <div className="stat">
            <div className="n">
              1:<span data-count="4">0</span>
            </div>
            <div className="c">max. Gruppe</div>
          </div>
          <div className="stat">
            <div className="n">2025</div>
            <div className="c">gegründet</div>
          </div>
        </div>
      </section>

      {/* COACH GRID + PROFILE OVERLAY */}
      <CoachExplorer />

      {/* PHILOSOPHY band */}
      <section className="section section--dark">
        <div
          className="wrap split"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }}
        >
          <div data-reveal>
            <p className="eyebrow on-dark" style={{ marginBottom: '1.2rem' }}>
              Unser Versprechen
            </p>
            <h2 className="h2" style={{ color: '#fff' }}>
              Kein Spieler ist
              <br />
              nur eine Nummer
            </h2>
            <p className="lead on-dark" style={{ marginTop: '1.4rem' }}>
              Bei uns kennt jeder Trainer jeden Namen. Wir coachen Menschen, nicht Statistiken — und
              genau deshalb funktioniert die Entwicklung.
            </p>
          </div>
          <div className="court-media" data-reveal style={{ aspectRatio: '4/3', borderRadius: 'var(--r-xl)' }}>
            <div className="court-lines"></div>
            <span className="media-tag">FOTO · TEAM AM CENTER COURT</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div
            className="cta-band"
            data-reveal
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}
          >
            <div className="court-lines"></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <p className="eyebrow on-dark" style={{ marginBottom: '0.9rem' }}>
                Lern uns kennen
              </p>
              <h2 className="h2" style={{ color: '#fff' }}>
                Triff dein Team<span className="dot">.</span>
              </h2>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                Training anfragen <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
