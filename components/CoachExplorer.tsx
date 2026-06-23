'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/site';

type CoachId = 'alexander' | 'jakob' | 'robert';

const CARDS: {
  id: CoachId;
  role: string;
  name: string;
  blurb: string;
  creds: string[];
  mark?: boolean;
}[] = [
  {
    id: 'alexander',
    role: 'Head Coach · Gründer',
    name: 'Alexander Lindenbauer',
    blurb:
      'Staatlich geprüfter Tennislehrer mit MSc in Sport- und Bewegungswissenschaften. Treibende Kraft hinter der Academy und dem neuen Leistungskonzept.',
    creds: ['MSc Sportwiss.', 'Tennislehrer'],
    mark: true,
  },
  {
    id: 'jakob',
    role: 'Ex-Profi · Performance',
    name: 'Jakob Aichhorn',
    blurb:
      'Ehemaliger Profispieler. Entwickelt gemeinsam mit der Academy das Konzept für die Förderung der nächsten Generation im Leistungstennis.',
    creds: ['Ex-Profi', 'Performance'],
  },
  {
    id: 'robert',
    role: 'Athletiktrainer',
    name: 'Robert Eckschlager',
    blurb:
      'Verantwortlich für die athletische Betreuung der Spieler on & off court. Macht jeden Körper bereit für die Belastung im Leistungstennis.',
    creds: ['Athletik', 'On & off court'],
  },
];

const MEDIA_NAMES: Record<CoachId, string> = {
  jakob: 'JAKOB AICHHORN',
  alexander: 'ALEXANDER LINDENBAUER',
  robert: 'ROBERT ECKSCHLAGER',
};

export default function CoachExplorer() {
  const [active, setActive] = useState<CoachId | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((id: CoachId) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setActive(id);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    if (lastFocus.current?.focus) lastFocus.current.focus();
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [active, close]);

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="coach-grid" data-reveal-stagger>
            {CARDS.map((c) => (
              <div
                className="coach-card"
                key={c.id}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => open(c.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open(c.id);
                  }
                }}
              >
                <div className="ph court-media">
                  <div className="court-lines"></div>
                  {c.mark && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
                  )}
                </div>
                <div className="body">
                  <span className="role">{c.role}</span>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <div className="creds">
                    {c.creds.map((cr) => (
                      <span className="tag" key={cr}>
                        {cr}
                      </span>
                    ))}
                  </div>
                  <span className="more">
                    Porträt lesen <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH PROFILE OVERLAY */}
      <div
        className={`coach-modal${active ? ' open' : ''}`}
        aria-hidden={active ? 'false' : 'true'}
      >
        <div className="cm-backdrop" onClick={close}></div>
        <div className="cm-panel" role="dialog" aria-modal="true" aria-label="Trainer-Porträt">
          <button className="cm-close" aria-label="Schließen" ref={closeBtnRef} onClick={close}>
            ✕
          </button>
          <div className="cm-media court-media">
            <div className="court-lines"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
            <span className="media-tag">
              FOTO · {active ? MEDIA_NAMES[active] : 'TRAINER'}
            </span>
          </div>
          <div className="cm-body">
            <article className={`cm-profile${active === 'jakob' ? ' active' : ''}`}>
              <span className="role">Trainer-Vorstellung · Ex-Profi · Performance</span>
              <h2>
                Jakob Aichhorn<span className="dot">.</span>
              </h2>
              <p className="cm-lead">
                Wir freuen uns, euch unseren Trainer Jakob Aichhorn vorzustellen — beeindruckende
                Erfahrung auf und neben dem Platz.
              </p>
              <div className="cm-stats">
                <div className="st">
                  <div className="n">946</div>
                  <div className="c">ATP-Karrierehoch</div>
                </div>
                <div className="st">
                  <div className="n">Nr. 1</div>
                  <div className="c">Jugend Österreich</div>
                </div>
                <div className="st">
                  <div className="n">Top 150</div>
                  <div className="c">Jugend international</div>
                </div>
                <div className="st">
                  <div className="n">2021</div>
                  <div className="c">Österr. Meister</div>
                </div>
                <div className="st">
                  <div className="n">2022</div>
                  <div className="c">Vizestaatsmeister</div>
                </div>
                <div className="st">
                  <div className="n">6 Jahre</div>
                  <div className="c">Trainererfahrung</div>
                </div>
              </div>
              <p>
                Jakob bringt sowohl auf als auch neben dem Platz eine beeindruckende Erfahrung mit.
                Als ehemaliger Profi erreichte er ein Karrierehoch von ATP-Rang 946. Bereits in seiner
                Jugend zählte er zu den erfolgreichsten österreichischen Spielern: Er war die Nummer 1
                Österreichs und gehörte international zu den Top 150 der Jugendrangliste.
              </p>
              <p>
                Auf nationaler Ebene konnte Jakob große Erfolge feiern: 2021 wurde er österreichischer
                Meister, 2022 österreichischer Vizestaatsmeister. Aktuell ist er weiterhin als aktiver
                Spieler in der österreichischen Bundesliga im Einsatz.
              </p>
              <p>
                Neben seiner erfolgreichen Spielerkarriere ist Jakob seit mittlerweile sechs Jahren
                als Trainer tätig. Dabei arbeitet er mit Spielerinnen und Spielern aller Altersklassen
                und Leistungsstufen — vom Nachwuchs bis zum ambitionierten Turnierspieler. Mit seiner
                Erfahrung aus dem internationalen Spitzensport und seiner Leidenschaft für den
                Tennissport unterstützt er seine Schützlinge dabei, ihr volles Potenzial
                auszuschöpfen und ihre individuellen Ziele zu erreichen.
              </p>
              <p className="cm-strong">
                Wir sind stolz, Jakob in unserem Trainerteam zu haben, und freuen uns darauf,
                gemeinsam mit ihm die nächste Generation von Tennisspielern zu fördern!
              </p>
              <div className="cm-foot">
                <Link href="/kontakt" className="btn btn-primary">
                  Training mit Jakob anfragen <span className="arrow">→</span>
                </Link>
              </div>
            </article>

            <article className={`cm-profile${active === 'alexander' ? ' active' : ''}`}>
              <span className="role">Trainer-Vorstellung · Head Coach · Gründer</span>
              <h2>
                Alexander Lindenbauer<span className="dot">.</span>
              </h2>
              <p className="cm-lead">
                Staatlich geprüfter Tennislehrer, Sportwissenschaftler — und die treibende Kraft
                hinter der NextGen Tennis Academy.
              </p>
              <p>
                Alexander ist staatlich geprüfter Tennislehrer und hält einen MSc in Sport- und
                Bewegungswissenschaften. Als Gründer und Head Coach verantwortet er das Trainings- und
                Leistungskonzept der Academy — von der Nachwuchsförderung bis zum ambitionierten
                Turniertennis.
              </p>
              <p>
                Sein Anspruch: jede Spielerin und jeden Spieler individuell kennen und gezielt
                weiterentwickeln. Bei NextGen ist kein Spieler nur eine Nummer.
              </p>
              <div className="creds" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="tag">MSc Sportwiss.</span>
                <span className="tag">Staatl. gepr. Tennislehrer</span>
                <span className="tag">Gründer</span>
              </div>
              <div className="cm-foot">
                <Link href="/kontakt" className="btn btn-primary">
                  Training mit Alexander anfragen <span className="arrow">→</span>
                </Link>
              </div>
            </article>

            <article className={`cm-profile${active === 'robert' ? ' active' : ''}`}>
              <span className="role">Trainer-Vorstellung · Athletiktrainer</span>
              <h2>
                Robert Eckschlager<span className="dot">.</span>
              </h2>
              <p className="cm-lead">
                Verantwortlich für die athletische Entwicklung unserer Spielerinnen und Spieler — on
                &amp; off court.
              </p>
              <p>
                Robert betreut die Spielerinnen und Spieler der Academy in allen athletischen
                Belangen. Er bereitet jeden Körper gezielt auf die Belastungen im Leistungstennis vor
                — von der Grundlagenarbeit im Nachwuchs bis zur Vorbereitung ambitionierter
                Turnierspieler.
              </p>
              <div className="creds" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="tag">Athletik</span>
                <span className="tag">On &amp; off court</span>
              </div>
              <div className="cm-foot">
                <Link href="/kontakt" className="btn btn-primary">
                  Training mit Robert anfragen <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
