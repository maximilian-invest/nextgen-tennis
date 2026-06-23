import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { asset } from '@/lib/site';

export const metadata: Metadata = { title: 'Standort' };

export default function StandortPage() {
  return (
    <div className="p-standort">
      <PageHead
        crumb="Standort"
        eyebrow="1. Halleiner Tennisclub · Salzburg"
        title="Standort"
        lead="Unsere Heimat im Süden von Salzburg: der 1. Halleiner Tennisclub. Fünf Sandplätze im Freien, drei Teppich-Granulat-Hallenplätze und eine Kraftkammer direkt an der Anlage — ganzjährig ideale Bedingungen."
      />

      {/* BENTO GALLERY */}
      <section className="section" style={{ paddingTop: 'clamp(2.5rem,4vw,4rem)' }}>
        <div className="wrap">
          <div className="bento" data-reveal-stagger>
            <div className="court-media b-big">
              <div className="court-lines"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
              <span className="media-tag">1. HALLEINER TENNISCLUB</span>
            </div>
            <div className="court-media b-wide">
              <div className="court-lines"></div>
              <span className="media-tag">5 SANDPLÄTZE OUTDOOR</span>
            </div>
            <div className="court-media">
              <div className="court-lines"></div>
              <span className="media-tag">3 HALLENPLÄTZE</span>
            </div>
            <div className="court-media">
              <div className="court-lines"></div>
              <span className="media-tag">KRAFTKAMMER</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATBAR */}
      <section className="statbar">
        <div className="wrap statbar-in">
          <div className="stat">
            <div className="n">
              <span data-count="5">0</span>
            </div>
            <div className="c">Sandplätze Outdoor</div>
          </div>
          <div className="stat">
            <div className="n">
              <span data-count="3">0</span>
            </div>
            <div className="c">Hallenplätze</div>
          </div>
          <div className="stat">
            <div className="n">
              <span data-count="8">0</span>
            </div>
            <div className="c">Plätze gesamt</div>
          </div>
          <div className="stat">
            <div className="n">ganzjährig</div>
            <div className="c">Halle &amp; Kraftkammer</div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Der Standort
              </p>
              <h2 className="h2">Wo wir trainieren</h2>
            </div>
          </div>
          <div className="spec-grid" data-reveal-stagger>
            <div className="spec">
              <div className="ic">S</div>
              <h3>5 Sandplätze</h3>
              <p>
                Fünf gepflegte Sandplätze im Freien am 1. Halleiner Tennisclub — Outdoor-Spielbetrieb
                in der Regel von Februar bis November.
              </p>
            </div>
            <div className="spec">
              <div className="ic">H</div>
              <h3>3 Hallenplätze</h3>
              <p>
                Drei neue Teppich-Granulat-Hallenplätze sorgen für ganzjährig ideale Bedingungen —
                auch im Winter wird durchtrainiert.
              </p>
            </div>
            <div className="spec">
              <div className="ic">F</div>
              <h3>Kraftkammer</h3>
              <p>
                Direkt bei der Anlage des 1. Halleiner Tennisclubs — für die nötige Fitness und
                Kraft, die es auf dem Platz braucht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION (dark) */}
      <section className="section section--dark">
        <div
          className="wrap split"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }}
        >
          <div data-reveal>
            <p className="eyebrow on-dark" style={{ marginBottom: '1.2rem' }}>
              So findest du uns
            </p>
            <h2 className="h2" style={{ color: '#fff' }}>
              Hallein
              <br />
              Salzburg
            </h2>
            <p className="lead on-dark" style={{ marginTop: '1.4rem' }}>
              Der 1. Halleiner Tennisclub liegt im Süden von Salzburg. Im Winter trainieren wir in der
              Halle, im Sommer outdoor auf Sand — von Februar bis November.
            </p>
            <div className="flex gap-m wrap-flex" style={{ marginTop: '1.8rem' }}>
              <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                Kontakt &amp; Anfahrt <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="court-media" data-reveal style={{ aspectRatio: '4/3', borderRadius: 'var(--r-xl)' }}>
            <div className="court-lines"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
            <span className="media-tag">KARTE · REGION SALZBURG SÜD</span>
          </div>
        </div>
      </section>
    </div>
  );
}
