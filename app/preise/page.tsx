import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';

export const metadata: Metadata = { title: 'Preise' };

const TRAINERSTUNDE = [
  { grp: 'Einzelstunde', amt: '49€' },
  { grp: '2er Gruppe', amt: '27€' },
  { grp: '3er Gruppe', amt: '20€' },
  { grp: '4er Gruppe', amt: '15€' },
];

const KONDITION = [
  { grp: 'Einzelstunde', amt: '49€' },
  { grp: '2er Gruppe', amt: '27€' },
  { grp: '3er Gruppe', amt: '20€' },
  { grp: '4er Gruppe', amt: '15€' },
  { grp: '5er & 6er Gruppe', amt: '12€' },
  { grp: '7er & 8er Gruppe', amt: '10€' },
];

export default function PreisePage() {
  return (
    <div className="p-preise">
      <PageHead
        crumb="Mitgliedschaft"
        eyebrow="Pro Person · exkl. Platzkosten"
        title="Preise"
        lead="Transparente Stundensätze für Trainerstunde und Kondition. Alle Preise gelten pro Person und exklusive Platzkosten — je kleiner die Gruppe, desto intensiver das Training."
      />

      {/* PRICING */}
      <section className="section" style={{ paddingTop: 'clamp(2.5rem,4vw,4rem)' }}>
        <div className="wrap">
          <div className="rate-grid" data-reveal-stagger>
            <div className="rate-card">
              <span className="rtag">01 · Der Klassiker</span>
              <h2>Trainerstunde</h2>
              <p className="rdesc">Individuelles Tennistraining, einzeln oder in der Gruppe.</p>
              <ul className="rate-list">
                {TRAINERSTUNDE.map((r) => (
                  <li key={r.grp}>
                    <span className="grp">{r.grp}</span>
                    <span className="amt">
                      {r.amt}
                      <span className="per">/Std</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rate-card dark">
              <span className="rtag">02 · Athletik · max. 8</span>
              <h2>Kondition</h2>
              <p className="rdesc">
                Tennisspezifisches Fitnesstraining in Gruppen bis zu acht Teilnehmern.
              </p>
              <ul className="rate-list">
                {KONDITION.map((r) => (
                  <li key={r.grp}>
                    <span className="grp">{r.grp}</span>
                    <span className="amt">
                      {r.amt}
                      <span className="per">/Std</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="note-card" data-reveal>
            <h4>Gut zu wissen</h4>
            <ul>
              <li>Alle Preise gelten pro Person und exklusive Platzkosten.</li>
              <li>Platzkosten im Winter: je nach Tag und Uhrzeit zwischen 12€ und 30€ pro Stunde.</li>
              <li>
                Stunden, die nicht wahrgenommen werden können, müssen am Vortag abgesagt werden.
                Erfolgt keine zeitgerechte Absage, werden sie verrechnet — Ausnahmen in
                unvorhersehbaren Fällen.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper2">
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Häufige Fragen
              </p>
              <h2 className="h2">Gut zu wissen</h2>
            </div>
          </div>
          <div className="faq" data-reveal>
            <details open>
              <summary>Sind die Platzkosten im Preis enthalten?</summary>
              <p>
                Nein. Alle Stundensätze gelten exklusive Platzkosten und pro Person. Die Platzkosten
                richten sich nach Tag und Uhrzeit — im Winter liegen sie zwischen 12€ und 30€ pro
                Stunde.
              </p>
            </details>
            <details>
              <summary>Wie sage ich eine Stunde ab?</summary>
              <p>
                Stunden, die nicht wahrgenommen werden können, müssen am Vortag bekannt gegeben
                werden. Erfolgt keine zeitgerechte Absage, wird die Stunde verrechnet. Ausnahmen
                machen wir in unvorhersehbaren Fällen.
              </p>
            </details>
            <details>
              <summary>Gibt es Vergünstigungen für die Jugend?</summary>
              <p>
                Ja. Am 1. Halleiner Tennisclub werden alle Meisterschaftsspieler finanziell beim
                Training unterstützt — die Nachwuchsförderung steht bei uns an oberster Stelle.
              </p>
            </details>
            <details>
              <summary>Wie buche ich ein Training?</summary>
              <p>
                Nimm einfach über das Kontaktformular Verbindung mit uns auf. Wir stimmen Programm,
                Gruppengröße und Termine ab und finden die passende Trainingszeit für dich.
              </p>
            </details>
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
                Bereit für die erste Stunde?
              </p>
              <h2 className="h2" style={{ color: '#fff' }}>
                Training anfragen<span className="dot">.</span>
              </h2>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                Jetzt anfragen <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
