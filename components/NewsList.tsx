'use client';

import { useState } from 'react';

type Post = {
  cat: 'erfolge' | 'camps' | 'team';
  catLabel: string;
  date: string;
  tag: string;
  ttl: string;
  txt: string;
};

const POSTS: Post[] = [
  {
    cat: 'erfolge',
    catLabel: 'Erfolge',
    date: '29. August 2025',
    tag: 'STV LANDESMEISTERSCHAFT',
    ttl: 'Moritz Schernthaner ist U18-Landesmeister',
    txt: 'Bei den STV Landesmeisterschaften setzte sich Moritz Schernthaner gegen seine Konkurrenten durch und darf nun seinen hart erarbeiteten Landesmeistertitel im Einzel feiern.',
  },
  {
    cat: 'camps',
    catLabel: 'Camps',
    date: 'Juli 2025',
    tag: '1. HALLEINER TC',
    ttl: 'Tenniscamp 2025: zwei volle Wochen',
    txt: 'Vom 7.–11. und 14.–18. Juli liefen zwei professionell organisierte Trainingswochen: 3–4h Tennis, 1h Athletik und tägliche Theorie zu Regeln, Taktik und mentalen Strategien — in kleinen Gruppen, betreut von Trainern und Sportwissenschaftlern.',
  },
  {
    cat: 'erfolge',
    catLabel: 'Erfolge',
    date: '17. September 2024',
    tag: 'OUTDOOR-JUGEND-LM · EUGENDORF',
    ttl: '2× Doppel-Landesmeistertitel in Eugendorf',
    txt: 'Bei den Outdoor-Jugend-Landesmeisterschaften holte Moritz mit Yasin Blickle den Titel im U18-Doppel, Bruder Maximilian gewann das U12-Doppel mit Florian Gruber. Johanna erreichte bei den U18-Mädchen Platz 2.',
  },
  {
    cat: 'erfolge',
    catLabel: 'Erfolge',
    date: '15. Februar 2024',
    tag: 'SALZBURGER LANDESMEISTERSCHAFT',
    ttl: 'Johanna Schernthaner gewinnt U14',
    txt: 'Johanna gewinnt souverän den U14-Bewerb der Mädchen und ist Landesmeisterin. Maximilian wird Vize-Landesmeister U12 und holt im Doppel mit Florian Gruber den Titel.',
  },
  {
    cat: 'erfolge',
    catLabel: 'Erfolge',
    date: '08. Jänner 2024',
    tag: 'ÖTV KAT 1 · WOLFSBERG',
    ttl: 'Doppel-Halbfinale beim Kat-1-Turnier',
    txt: 'Beim ÖTV-Kat-1-Turnier in Wolfsberg erreichte Johanna im Einzel und im Doppel mit Anna-Lena Demmelbauer das Halbfinale — inklusive eines 6:1 6:2-Sieges gegen die Nummer 6 Österreichs.',
  },
  {
    cat: 'team',
    catLabel: 'Team',
    date: '14. April 2022',
    tag: 'SCHULSPORT-MODELL SALZBURG',
    ttl: 'SSM-Aufnahme für Moritz Schernthaner',
    txt: 'Als erster Academy-Spieler schaffte Moritz Schernthaner die Aufnahme ins Schulsport-Modell Salzburg — unter den besten 60 Spielern Österreichs seiner Altersklasse. Leistungssport und Schule unter einem Dach.',
  },
];

const FILTERS: { f: 'all' | Post['cat']; label: string }[] = [
  { f: 'all', label: 'Alle' },
  { f: 'erfolge', label: 'Erfolge' },
  { f: 'camps', label: 'Camps' },
  { f: 'team', label: 'Team' },
];

export default function NewsList() {
  const [filter, setFilter] = useState<'all' | Post['cat']>('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* POST GRID */}
      <section className="section">
        <div className="wrap">
          <div className="filterbar" data-reveal>
            {FILTERS.map((f) => (
              <button
                key={f.f}
                className={`filter${filter === f.f ? ' on' : ''}`}
                onClick={() => setFilter(f.f)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="news-grid" data-reveal-stagger>
            {POSTS.map((p, i) => (
              <article
                className={`post${filter !== 'all' && p.cat !== filter ? ' hide' : ''}`}
                key={i}
              >
                <div className="media court-media">
                  <div className="court-lines"></div>
                  <span className="cat-on-media">
                    <span className="cat-tag">{p.catLabel}</span>
                  </span>
                  <span className="media-tag">{p.tag}</span>
                </div>
                <div className="body">
                  <span className="pdate">{p.date}</span>
                  <h3>{p.ttl}</h3>
                  <p>{p.txt}</p>
                  <span className="more">
                    Weiterlesen <span className="arrow">→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="news-cta" data-reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>
                Bleib am Ball
              </p>
              <h2 className="h2" style={{ fontSize: 'clamp(1.8rem,1.4rem+1.6vw,2.6rem)' }}>
                Keine News verpassen<span className="dot">.</span>
              </h2>
            </div>
            <form
              className="nl-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) {
                  setSubscribed(true);
                  setEmail('');
                }
              }}
            >
              <input
                type="email"
                placeholder="deine@email.at"
                aria-label="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
              />
              <button type="submit" className="btn btn-primary">
                {subscribed ? (
                  'Angemeldet ✓'
                ) : (
                  <>
                    Anmelden <span className="arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
