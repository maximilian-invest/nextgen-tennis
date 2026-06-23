import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { asset } from '@/lib/site';

export const metadata: Metadata = { title: 'Programme' };

type Program = {
  num: string;
  title: string;
  mark?: boolean;
  tag: string;
  chips: string[];
  lead: string;
  features: string[];
  facts: { v: string; l: string }[];
};

const PROGRAMS: Program[] = [
  {
    num: '01 — Der Klassiker',
    title: 'Trainerstunde',
    mark: true,
    tag: 'FOTO · TRAINERSTUNDE AM PLATZ',
    chips: ['Einzel & Gruppe', 'Alle Level', 'Nach Wunsch'],
    lead: 'Perfekt für den Einstieg und um uns kennenzulernen. Nimm Kontakt auf und buche eine Trainingseinheit ganz nach deinen Wünschen. Für sichtbare Erfolge ist eine gewisse Regelmäßigkeit entscheidend.',
    features: [
      'Einzeln oder in Gruppen bis vier Spieler',
      'Individuelle Schwerpunkte nach Absprache',
      'Flexible Termine am 1. Halleiner Tennisclub',
    ],
    facts: [
      { v: 'ab 15€', l: 'pro Stunde' },
      { v: '1–4', l: 'Spieler' },
      { v: 'flexibel', l: 'Termine' },
    ],
  },
  {
    num: '02 — Athletik',
    title: 'Kondition',
    tag: 'FOTO · KONDITIONSTRAINING',
    chips: ['max. 8 Teilnehmer', 'Tennisspezifisch', 'Fitness'],
    lead: 'Für alle, die nicht unbedingt am Tennisspiel arbeiten, sich aber dennoch am Platz verbessern wollen. Unsere speziell für den Tennissport angepassten Übungen heben deine körperliche Fitness — und damit dein Spiel — auf ein neues Niveau.',
    features: [
      'Tennisspezifische Kraft, Schnelligkeit & Koordination',
      'Gruppen von 1 bis 8 Teilnehmern',
      'Kraftkammer direkt an der Anlage in Hallein',
    ],
    facts: [
      { v: 'ab 10€', l: 'pro Stunde' },
      { v: 'max 8', l: 'Teilnehmer' },
      { v: 'ganzjährig', l: 'verfügbar' },
    ],
  },
  {
    num: '03 — Leistungssport',
    title: 'NextGen Performance',
    mark: true,
    tag: 'FOTO · LEISTUNGSTRAINING',
    chips: ['Nachwuchs', 'Leistungstennis', 'Individuell'],
    lead: 'Das neue Konzept für Leistungsspieler. Gemeinsam mit Ex-Profi Jakob Aichhorn entwickeln wir die bestmögliche Förderung für die Entwicklung von Nachwuchstalenten — ganzheitlich und individuell.',
    features: [
      'Technische, taktische & mentale Entwicklung',
      'Körperliche Betreuung on & off court mit Robert Eckschlager',
      'Individueller Entwicklungsplan pro Spieler',
    ],
    facts: [
      { v: '2025', l: 'Start' },
      { v: '1:4', l: 'max. Gruppe' },
      { v: 'auf Anfrage', l: 'Aufnahme' },
    ],
  },
  {
    num: '04 — Nachwuchs',
    title: 'Jugendförderung',
    tag: 'FOTO · JUGENDTRAINING',
    chips: ['Kinder & Jugend', 'Meisterschaft', 'Vereine'],
    lead: 'Die Förderung der Jugend steht bei uns an oberster Stelle. Am 1. Halleiner Tennisclub werden alle Meisterschaftsspieler finanziell beim Training unterstützt.',
    features: [
      'Finanzielle Unterstützung für Meisterschaftsspieler',
      'Strukturierte Nachwuchsförderung im Verein',
      'Strukturierter Weg vom Anfänger bis ins Meisterschaftsteam',
    ],
    facts: [
      { v: 'Jugend', l: 'im Fokus' },
      { v: 'Förderung', l: 'Meisterschaft' },
      { v: 'alle', l: 'Altersklassen' },
    ],
  },
];

export default function ProgrammePage() {
  return (
    <div className="p-programme">
      <PageHead
        crumb="Programme"
        eyebrow="Trainerstunde · Kondition · Performance"
        title="Programme"
        lead="Vom Klassiker bis zur spezialisierten Leistungsförderung. Wähle das Training, das zu deinen Zielen passt — wir holen dich dort ab, wo du stehst."
      />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Trainerstunde</span><span className="sep">/</span><span>Kondition</span><span className="sep">/</span><span>NextGen Performance</span><span className="sep">/</span><span>Jugendförderung</span><span className="sep">/</span>
          <span>Trainerstunde</span><span className="sep">/</span><span>Kondition</span><span className="sep">/</span><span>NextGen Performance</span><span className="sep">/</span><span>Jugendförderung</span><span className="sep">/</span>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'clamp(2rem,3vw,3rem)' }}>
        <div className="wrap">
          {PROGRAMS.map((p) => (
            <div className="prog-row" data-reveal key={p.title}>
              <div className="media court-media">
                <div className="court-lines"></div>
                {p.mark && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
                )}
                <span className="media-tag">{p.tag}</span>
              </div>
              <div>
                <span className="num">{p.num}</span>
                <h2>{p.title}</h2>
                <div className="chips">
                  {p.chips.map((c) => (
                    <span className="tag" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
                <p className="lead" style={{ fontSize: '1.05rem' }}>
                  {p.lead}
                </p>
                <ul className="feat-list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="facts">
                  {p.facts.map((f) => (
                    <div className="f" key={f.l}>
                      <div className="v">{f.v}</div>
                      <div className="l">{f.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow on-dark" style={{ marginBottom: '0.9rem' }}>
                Die Methode
              </p>
              <h2 className="h2">So trainieren wir</h2>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }} data-reveal-stagger>
            <div className="card on-dark" style={{ padding: '1.8rem' }}>
              <div className="mono" style={{ color: 'var(--ng-lime)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                01
              </div>
              <h3 className="h3" style={{ color: '#fff', fontSize: '1.4rem' }}>
                Technik &amp; Taktik
              </h3>
              <p className="lead on-dark" style={{ fontSize: '0.98rem', marginTop: '0.6rem' }}>
                Saubere Schläge und kluges Spiel. Wir bauen das Fundament, auf dem alles andere
                wachsen kann.
              </p>
            </div>
            <div className="card on-dark" style={{ padding: '1.8rem' }}>
              <div className="mono" style={{ color: 'var(--ng-lime)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                02
              </div>
              <h3 className="h3" style={{ color: '#fff', fontSize: '1.4rem' }}>
                Athletik
              </h3>
              <p className="lead on-dark" style={{ fontSize: '0.98rem', marginTop: '0.6rem' }}>
                Tennisspezifische Fitness on &amp; off court — betreut von Athletiktrainer Robert
                Eckschlager.
              </p>
            </div>
            <div className="card on-dark" style={{ padding: '1.8rem' }}>
              <div className="mono" style={{ color: 'var(--ng-lime)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                03
              </div>
              <h3 className="h3" style={{ color: '#fff', fontSize: '1.4rem' }}>
                Mentalstärke
              </h3>
              <p className="lead on-dark" style={{ fontSize: '0.98rem', marginTop: '0.6rem' }}>
                Der Kopf entscheidet. Wir entwickeln die mentale Seite, die im Match den Unterschied
                macht.
              </p>
            </div>
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
                Unsicher, welches Programm?
              </p>
              <h2 className="h2" style={{ color: '#fff' }}>
                Wir finden deins<span className="dot">.</span>
              </h2>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                Beratung anfragen <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
