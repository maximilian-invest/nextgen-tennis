'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { asset } from '@/lib/site';

type Item = {
  cat: 'hallein' | 'training' | 'team';
  catLabel: string;
  ttl: string;
  tag: string;
  ar: 'ar-tall' | 'ar-square' | 'ar-wide' | 'ar-land';
};

const ITEMS: Item[] = [
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Sandplätze im Freien', tag: '1. HALLEINER TC · SANDPLÄTZE', ar: 'ar-land' },
  { cat: 'training', catLabel: 'Training', ttl: 'Trainerstunde', tag: 'EINZELTRAINING AM PLATZ', ar: 'ar-tall' },
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Center bei Flutlicht', tag: '1. HALLEINER TC · ABEND', ar: 'ar-square' },
  { cat: 'team', catLabel: 'Team', ttl: 'Alexander Lindenbauer', tag: 'HEAD COACH · GRÜNDER', ar: 'ar-wide' },
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Teppich-Granulat-Halle', tag: '3 HALLENPLÄTZE', ar: 'ar-square' },
  { cat: 'training', catLabel: 'Training', ttl: 'Aufschlagtraining', tag: 'TECHNIK AM PLATZ', ar: 'ar-tall' },
  { cat: 'training', catLabel: 'Training', ttl: 'Konditionstraining', tag: 'ATHLETIK · GRUPPE', ar: 'ar-land' },
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Kraftkammer', tag: 'KRAFT & FITNESS', ar: 'ar-square' },
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Outdoor von Feb bis Nov', tag: 'SANDPLATZ · OUTDOOR', ar: 'ar-wide' },
  { cat: 'team', catLabel: 'Team', ttl: 'Jakob Aichhorn', tag: 'EX-PROFI · PERFORMANCE', ar: 'ar-tall' },
  { cat: 'training', catLabel: 'Training', ttl: 'Jugendförderung', tag: 'NACHWUCHS AM PLATZ', ar: 'ar-wide' },
  { cat: 'hallein', catLabel: 'Plätze', ttl: 'Sommerabend am Platz', tag: '1. HALLEINER TC · SOMMER', ar: 'ar-tall' },
];

const FILTERS: { f: 'all' | Item['cat']; label: string; count: string }[] = [
  { f: 'all', label: 'Alle', count: '12' },
  { f: 'hallein', label: 'Plätze', count: '06' },
  { f: 'training', label: 'Training', count: '04' },
  { f: 'team', label: 'Team', count: '02' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | Item['cat']>('all');
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(0);

  // Indices into ITEMS that are currently visible (preserves source order).
  const visible = useMemo(
    () => ITEMS.map((_, i) => i).filter((i) => filter === 'all' || ITEMS[i].cat === filter),
    [filter]
  );

  const openAt = useCallback(
    (itemIndex: number) => {
      const pos = visible.indexOf(itemIndex);
      setCur(pos < 0 ? 0 : pos);
      setOpen(true);
    },
    [visible]
  );
  const close = useCallback(() => setOpen(false), []);
  const step = useCallback(
    (d: number) => setCur((c) => (c + d + visible.length) % visible.length),
    [visible.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close, step]);

  const active = visible.length ? ITEMS[visible[cur]] : undefined;

  return (
    <>
      <section className="section" style={{ paddingTop: 'clamp(2.5rem,4vw,4rem)' }}>
        <div className="wrap">
          <div className="filterbar" data-reveal>
            {FILTERS.map((f) => (
              <button
                key={f.f}
                className={`filter${filter === f.f ? ' on' : ''}`}
                onClick={() => setFilter(f.f)}
              >
                {f.label}
                <span className="c">{f.count}</span>
              </button>
            ))}
          </div>

          <div className="gallery" data-reveal-stagger>
            {ITEMS.map((it, i) => {
              const hidden = filter !== 'all' && it.cat !== filter;
              return (
                <a
                  key={i}
                  className={`g-item ${it.ar}${hidden ? ' hide' : ''}`}
                  onClick={() => openAt(i)}
                >
                  <div className="court-media">
                    <div className="court-lines"></div>
                    <span className="media-tag">{it.tag}</span>
                  </div>
                  <span className="plus">+</span>
                  <div className="overlay">
                    <span className="cat">{it.catLabel}</span>
                    <span className="ttl">{it.ttl}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <div className={`lightbox${open ? ' open' : ''}`} aria-hidden={open ? 'false' : 'true'}>
        <button className="lb-close" aria-label="Schließen" onClick={close}>
          ✕
        </button>
        <button className="lb-btn lb-prev" aria-label="Vorheriges" onClick={() => step(-1)}>
          ←
        </button>
        <button className="lb-btn lb-next" aria-label="Nächstes" onClick={() => step(1)}>
          →
        </button>
        <div className="lb-stage">
          <div className="lb-media court-media">
            <div className="court-lines"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
            <span className="media-tag">{active?.tag ?? 'FOTO'}</span>
          </div>
          <div className="lb-cap">
            <div>
              <div className="cat">{active?.catLabel ?? 'Standort'}</div>
              <div className="ttl">{active?.ttl ?? 'Titel'}</div>
            </div>
            <div className="count">
              {cur + 1} / {visible.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
