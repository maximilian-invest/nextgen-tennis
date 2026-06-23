'use client';

import Link from 'next/link';
import { useState } from 'react';

const PROGRAMS = ['Trainerstunde', 'Kondition', 'NextGen Performance', 'Jugendförderung'];
const LEVELS = ['Anfänger', 'Fortgeschritten', 'Turnierspieler', 'Leistungsspieler'];

export default function ContactForm() {
  const [prog, setProg] = useState(PROGRAMS[0]);
  const [step, setStep] = useState<1 | 2>(1);
  const [done, setDone] = useState(false);
  const [fn, setFn] = useState('');

  return (
    <div className="form-card" data-reveal>
      {!done ? (
        <>
          <div className="steps">
            <div className={`s${step >= 1 ? ' on' : ''}`} data-s="1"></div>
            <div className={`s${step >= 2 ? ' on' : ''}`} data-s="2"></div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="h3" style={{ color: 'var(--ng-petrol)', marginBottom: '0.4rem' }}>
                Wähle dein Programm
              </h2>
              <p style={{ color: 'var(--ng-slate)', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Wir ordnen dich danach passend ein.
              </p>
              <div className="field">
                <label>Programm</label>
                <div className="seg">
                  {PROGRAMS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      className={prog === p ? 'on' : undefined}
                      onClick={() => setProg(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label htmlFor="level">Aktuelles Level</label>
                <select id="level">
                  {LEVELS.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                onClick={() => setStep(2)}
              >
                Weiter <span className="arrow">→</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="h3" style={{ color: 'var(--ng-petrol)', marginBottom: '0.4rem' }}>
                Deine Kontaktdaten
              </h2>
              <p style={{ color: 'var(--ng-slate)', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Wir melden uns innerhalb von 24 Stunden.
              </p>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fn">Vorname</label>
                  <input
                    type="text"
                    id="fn"
                    placeholder="Max"
                    value={fn}
                    onChange={(e) => setFn(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="ln">Nachname</label>
                  <input type="text" id="ln" placeholder="Mustermann" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="em">E-Mail</label>
                <input type="email" id="em" placeholder="max@email.at" />
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="ph">Telefon</label>
                  <input type="tel" id="ph" placeholder="+43 …" />
                </div>
                <div className="field">
                  <label htmlFor="dt">Wunschtermin</label>
                  <input type="date" id="dt" />
                </div>
              </div>
              <div className="flex gap-m" style={{ marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
                  ← Zurück
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => setDone(true)}
                >
                  Probetraining sichern <span className="arrow">→</span>
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="success">
          <div className="ok">✓</div>
          <h2 className="h3" style={{ color: 'var(--ng-petrol)' }}>
            Platz reserviert!
          </h2>
          <p style={{ color: 'var(--ng-slate)', maxWidth: '36ch', margin: '0.8rem auto 0' }}>
            Danke, {fn.trim() || 'Spieler'}. Wir haben deine Anfrage für <strong>{prog}</strong>{' '}
            erhalten und melden uns per Mail mit den Details.
          </p>
          <Link href="/" className="btn btn-ghost" style={{ marginTop: '1.6rem' }}>
            Zurück zur Startseite
          </Link>
        </div>
      )}
    </div>
  );
}
