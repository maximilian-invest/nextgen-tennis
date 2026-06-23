'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, asset } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Petrol blur backdrop after a little scroll (ported from site.js). */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock the menu closed on every route change. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Prevent the page behind the full-screen mobile menu from scrolling. */
  useEffect(() => {
    const root = document.documentElement;
    const { body } = document;
    if (open) {
      root.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      root.style.overflow = '';
      body.style.overflow = '';
    }
    return () => {
      root.style.overflow = '';
      body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' nav-open' : ''}`}>
      <Link href="/" aria-label="NextGen Tennis Academy">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="nav-logo" src={asset('/assets/brand/logo-white.png')} alt="NextGen Tennis Academy" />
      </Link>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="nav-right">
        <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.25">
          Training anfragen <span className="arrow">→</span>
        </Link>
      </div>

      <button
        className={`burger${open ? ' active' : ''}`}
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <span className="burger-x" aria-hidden="true">
            ✕
          </span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>
    </nav>
  );
}
