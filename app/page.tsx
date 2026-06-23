import Link from 'next/link';
import { asset } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="hero" id="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={asset('/assets/brand/hero.mp4')} type="video/mp4" />
        </video>
        <div className="hero-scrim"></div>
        <div className="court-lines"></div>
        <span className="hero-side">NextGen · Performance · Est. 2025</span>
        <div className="wrap hero-in">
          <p className="eyebrow on-dark" data-reveal style={{ marginBottom: '1.4rem' }}>
            Leistungstennis · Hallein · Salzburg
          </p>
          <h1>
            <span className="line-mask">
              <span>Die nächste</span>
            </span>
            <span className="line-mask">
              <span>Generation</span>
            </span>
            <span className="line-mask">
              <span>
                beginnt hier<span className="ball"></span>
              </span>
            </span>
          </h1>
          <p className="hlead" data-reveal>
            Die NextGen Tennisacademy ist die spezialisierte Leistungsförderung der Lindenbauer
            Tennis Academy in Hallein — für die größten Talente von morgen, gemeinsam mit Ex-Profi
            Jakob Aichhorn.
          </p>
          <div className="hero-cta" data-reveal>
            <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
              Training anfragen <span className="arrow">→</span>
            </Link>
            <Link href="/programme" className="btn btn-ghost-light">
              Programme entdecken
            </Link>
          </div>
        </div>
      </header>

      {/* STAT BAR */}
      <section className="statbar">
        <div className="wrap statbar-in">
          <div className="stat">
            <div className="n">
              <span data-count="5">0</span>
            </div>
            <div className="c">Sandplätze</div>
          </div>
          <div className="stat">
            <div className="n">
              <span data-count="3">0</span>
            </div>
            <div className="c">Hallenplätze</div>
          </div>
          <div className="stat">
            <div className="n">
              <span data-count="3">0</span>
            </div>
            <div className="c">Coaches im Team</div>
          </div>
          <div className="stat">
            <div className="n">
              1:<span data-count="4">0</span>
            </div>
            <div className="c">max. Gruppengröße</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee petrol" aria-hidden="true">
        <div className="marquee-track">
          <span>Aufschlag</span><span className="sep">/</span><span>Vorhand</span><span className="sep">/</span><span>Mindset</span><span className="sep">/</span><span>Athletik</span><span className="sep">/</span><span>Strategie</span><span className="sep">/</span><span>Next Gen</span><span className="sep">/</span>
          <span>Aufschlag</span><span className="sep">/</span><span>Vorhand</span><span className="sep">/</span><span>Mindset</span><span className="sep">/</span><span>Athletik</span><span className="sep">/</span><span>Strategie</span><span className="sep">/</span><span>Next Gen</span><span className="sep">/</span>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow" style={{ marginBottom: '1.2rem' }}>
              LTA wird NextGen
            </p>
            <h2 className="h2">
              Spezialisiert
              <br />
              auf Leistung<span className="dot">.</span>
            </h2>
            <p className="lead" style={{ marginTop: '1.4rem' }}>
              Die NextGen Tennisacademy ist die spezialisierte Leistungsakademie der LTA in Hallein —
              gemeinsam aufgebaut von Alexander Lindenbauer und Ex-Profi Jakob Aichhorn. Wir richten
              uns an talentierte Nachwuchsspieler mit großem Potenzial und arbeiten ganzheitlich an
              Technik, Taktik, Mentalstärke und Athletik.
            </p>
            <div className="flex gap-l wrap-flex" style={{ marginTop: '2rem' }}>
              <div>
                <div
                  className="n"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 900,
                    fontSize: '2.6rem',
                    color: 'var(--ng-petrol)',
                    lineHeight: 0.85,
                  }}
                >
                  2025
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ng-slate)',
                    textTransform: 'uppercase',
                    marginTop: '0.4rem',
                  }}
                >
                  gegründet
                </div>
              </div>
              <div>
                <div
                  className="n"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 900,
                    fontSize: '2.6rem',
                    color: 'var(--ng-petrol)',
                    lineHeight: 0.85,
                  }}
                >
                  1:4
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ng-slate)',
                    textTransform: 'uppercase',
                    marginTop: '0.4rem',
                  }}
                >
                  max. Gruppe
                </div>
              </div>
            </div>
          </div>
          <div className="court-media" data-parallax="0.06" style={{ minHeight: '440px' }} data-reveal>
            <div className="court-lines"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
            <span className="media-tag">FOTO · LEISTUNGSTRAINING AM SANDPLATZ</span>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section section--paper2">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Vier Wege · ein Ziel
              </p>
              <h2 className="h2">Programme</h2>
            </div>
            <Link href="/programme" className="btn btn-ghost">
              Alle Programme <span className="arrow">→</span>
            </Link>
          </div>
          <div className="prog-grid" data-reveal-stagger>
            <Link href="/programme" className="prog">
              <div className="media court-media">
                <div className="court-lines"></div>
              </div>
              <div className="body">
                <span className="idx">01 · Der Klassiker</span>
                <h3>Trainerstunde</h3>
                <p>
                  Perfekt für den Einstieg — individuelles Training nach deinen Wünschen.
                  Regelmäßigkeit bringt sichtbaren Erfolg.
                </p>
                <span className="go">Mehr erfahren →</span>
              </div>
            </Link>
            <Link href="/programme" className="prog">
              <div className="media court-media">
                <div className="court-lines"></div>
              </div>
              <div className="body">
                <span className="idx">02 · Athletik</span>
                <h3>Kondition</h3>
                <p>
                  Tennisspezifische Übungen für alle, die am Platz fitter werden wollen. In Gruppen
                  bis zu acht Spielern.
                </p>
                <span className="go">Mehr erfahren →</span>
              </div>
            </Link>
            <Link href="/programme" className="prog">
              <div className="media court-media">
                <div className="court-lines"></div>
              </div>
              <div className="body">
                <span className="idx">03 · Leistungssport</span>
                <h3>NextGen Performance</h3>
                <p>
                  Das spezialisierte Leistungsprogramm: ganzheitliche, individuelle Förderung für
                  ambitionierte Talente.
                </p>
                <span className="go">Mehr erfahren →</span>
              </div>
            </Link>
            <Link href="/programme" className="prog">
              <div className="media court-media">
                <div className="court-lines"></div>
              </div>
              <div className="body">
                <span className="idx">04 · Nachwuchs</span>
                <h3>Jugendförderung</h3>
                <p>
                  Wir bringen die Jugendarbeit im Leistungstennis in Salzburg auf ein neues Level —
                  vom ersten Schlag bis zur Meisterschaft.
                </p>
                <span className="go">Mehr erfahren →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITY (dark) */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow on-dark" style={{ marginBottom: '0.9rem' }}>
                Ein Verein · eine Academy
              </p>
              <h2 className="h2">
                Trainieren am
                <br />
                1. Halleiner TC.
              </h2>
            </div>
            <p className="sub">
              Unsere Heimat: der 1. Halleiner Tennisclub. Fünf Sandplätze im Freien, drei
              Teppich-Granulat-Hallenplätze und eine Kraftkammer direkt an der Anlage — ganzjährig
              ideale Bedingungen.
            </p>
          </div>
          <div className="feat-grid" data-reveal-stagger>
            <div className="court-media big">
              <div className="court-lines"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
              <span className="media-tag">1. HALLEINER TENNISCLUB</span>
            </div>
            <div className="court-media">
              <div className="court-lines"></div>
              <span className="media-tag">5 SANDPLÄTZE OUTDOOR</span>
            </div>
            <div className="court-media">
              <div className="court-lines"></div>
              <span className="media-tag">3 HALLENPLÄTZE</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.4rem' }} data-reveal>
            <Link href="/standort" className="btn btn-ghost-light" data-magnetic="0.2">
              Standort ansehen <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Das Trainerteam
              </p>
              <h2 className="h2">Geführt von Profis</h2>
            </div>
            <Link href="/trainer" className="btn btn-ghost">
              Alle Trainer <span className="arrow">→</span>
            </Link>
          </div>
          <div className="coach-row" data-reveal-stagger>
            <Link href="/trainer" className="coach">
              <div className="ph court-media">
                <div className="court-lines"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
              </div>
              <h4>Alexander Lindenbauer</h4>
              <p className="role">Head Coach · Gründer</p>
            </Link>
            <Link href="/trainer" className="coach">
              <div className="ph court-media">
                <div className="court-lines"></div>
              </div>
              <h4>Jakob Aichhorn</h4>
              <p className="role">Ex-Profi · Performance</p>
            </Link>
            <Link href="/trainer" className="coach">
              <div className="ph court-media">
                <div className="court-lines"></div>
              </div>
              <h4>Robert Eckschlager</h4>
              <p className="role">Athletik on &amp; off court</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CHAMPIONS / PILLARS */}
      <section className="section section--paper2">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Was uns ausmacht
              </p>
              <h2 className="h2">Ganzheitlich denken</h2>
            </div>
          </div>
          <div data-reveal-stagger>
            <div className="champ-row">
              <span className="rank">01</span>
              <span className="name">Technik &amp; Taktik</span>
              <span className="cmeta">Saubere Schläge, kluges Spiel — Entwicklung am Platz</span>
            </div>
            <div className="champ-row">
              <span className="rank">02</span>
              <span className="name">Mentalstärke</span>
              <span className="cmeta">Der Kopf entscheidet über Sieg und Niederlage</span>
            </div>
            <div className="champ-row">
              <span className="rank">03</span>
              <span className="name">Athletik</span>
              <span className="cmeta">Betreuung on &amp; off court mit Robert Eckschlager</span>
            </div>
            <div className="champ-row">
              <span className="rank">04</span>
              <span className="name">Individuell</span>
              <span className="cmeta">Jeder Spieler, sein eigener Entwicklungsplan</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band" data-reveal>
            <div className="court-lines"></div>
            <div className="cta-band-in">
              <div>
                <p className="eyebrow on-dark" style={{ marginBottom: '1rem' }}>
                  Dein erster Aufschlag
                </p>
                <h2 className="h2">
                  Komm auf den Court<span className="dot">.</span>
                </h2>
              </div>
              <div>
                <p className="lead on-dark" style={{ marginBottom: '1.6rem', maxWidth: '34ch' }}>
                  Kontaktiere uns für eine Trainingseinheit nach deinen Wünschen — wir finden das
                  passende Programm für dich.
                </p>
                <div className="flex gap-m wrap-flex">
                  <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                    Training anfragen <span className="arrow">→</span>
                  </Link>
                  <Link href="/preise" className="btn btn-ghost-light">
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
