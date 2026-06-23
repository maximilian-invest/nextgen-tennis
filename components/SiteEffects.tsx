'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Ports the shared interactions from the prototype's assets/site.js into React:
 * custom cursor, scroll-reveals + counters, magnetic buttons, parallax,
 * the hero "loaded" headline animation, and the lime page-transition wipe.
 *
 * Mount-once pieces (cursor, transition overlay) run in an empty-dep effect;
 * DOM-dependent pieces re-initialise on every route change.
 */
export default function SiteEffects() {
  const pathname = usePathname();
  const transRef = useRef<HTMLDivElement | null>(null);

  /* ---------- mount-once: custom cursor + transition overlay ---------- */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Page-transition overlay (reused on every navigation).
    const trans = document.createElement('div');
    trans.className = 'page-trans';
    document.body.appendChild(trans);
    transRef.current = trans;

    let cleanupCursor: (() => void) | undefined;
    if (!reduce && window.matchMedia('(min-width: 901px)').matches && !('ontouchstart' in window)) {
      const dot = document.createElement('div');
      dot.className = 'cursor';
      const ring = document.createElement('div');
      ring.className = 'cursor-ring';
      document.body.append(dot, ring);

      let mx = innerWidth / 2,
        my = innerHeight / 2,
        rx = mx,
        ry = my,
        raf = 0;

      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      };
      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        raf = requestAnimationFrame(loop);
      };
      loop();

      const hot = 'a, button, .btn, .card, [data-hot], input, textarea, select';
      const onOver = (e: MouseEvent) => {
        if ((e.target as Element).closest?.(hot)) {
          dot.classList.add('hot');
          ring.classList.add('hot');
        }
      };
      const onOut = (e: MouseEvent) => {
        if ((e.target as Element).closest?.(hot)) {
          dot.classList.remove('hot');
          ring.classList.remove('hot');
        }
      };
      const onLeave = () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
      };
      const onEnter = () => {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      };

      window.addEventListener('mousemove', onMove);
      document.addEventListener('mouseover', onOver);
      document.addEventListener('mouseout', onOut);
      document.addEventListener('mouseleave', onLeave);
      document.addEventListener('mouseenter', onEnter);

      cleanupCursor = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseover', onOver);
        document.removeEventListener('mouseout', onOut);
        document.removeEventListener('mouseleave', onLeave);
        document.removeEventListener('mouseenter', onEnter);
        dot.remove();
        ring.remove();
      };
    }

    return () => {
      cleanupCursor?.();
      trans.remove();
      transRef.current = null;
    };
  }, []);

  /* ---------- per-route: reveals, counters, magnetic, parallax, hero ---------- */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 901px)').matches;

    // Play the lime reveal wipe on arrival.
    const trans = transRef.current;
    let transTimer: number | undefined;
    if (trans && !reduce) {
      trans.className = 'page-trans reveal';
      transTimer = window.setTimeout(() => {
        trans.className = 'page-trans';
      }, 650);
    }

    // Hero headline "loaded" state.
    const hero = document.getElementById('hero');
    let heroRaf1 = 0,
      heroRaf2 = 0,
      heroTimer: number | undefined;
    if (hero) {
      const go = () => hero.classList.add('loaded');
      heroRaf1 = requestAnimationFrame(() => {
        heroRaf2 = requestAnimationFrame(go);
      });
      heroTimer = window.setTimeout(go, 120);
    }

    // Scroll-reveal + counters (rAF/IO-free, mirrors site.js).
    const revealEls = [
      ...document.querySelectorAll('[data-reveal], [data-reveal-stagger], .clip-up'),
    ] as HTMLElement[];
    const counters = [...document.querySelectorAll('[data-count]')] as HTMLElement[];
    const started = new WeakSet<Element>();

    const inView = (el: Element, margin?: number) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return false;
      return r.top < innerHeight * (margin || 0.9) && r.bottom > 0;
    };

    const startCounter = (el: HTMLElement) => {
      if (started.has(el)) return;
      started.add(el);
      const target = parseFloat(el.dataset.count || '0');
      const dec = parseInt(el.dataset.dec || '0', 10) || 0;
      const dur = 1500,
        start = performance.now();
      const fmt = (v: number) =>
        v.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(target);
      };
      if (reduce) {
        el.textContent = fmt(target);
        return;
      }
      requestAnimationFrame(tick);
      window.setTimeout(() => {
        el.textContent = fmt(target);
      }, 1700);
    };

    const check = () => {
      revealEls.forEach((el) => {
        if (el.classList.contains('in')) return;
        if (inView(el)) {
          el.classList.add('in');
          if (el.hasAttribute('data-reveal-stagger')) {
            [...el.children].forEach((k, i) => {
              (k as HTMLElement).style.transitionDelay = i * 0.08 + 's';
            });
          }
        }
      });
      counters.forEach((el) => {
        if (inView(el, 0.95)) startCounter(el);
      });
    };

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check();
    const checkTimers = [50, 250, 600, 1200, 2400].map((t) => window.setTimeout(check, t));

    // Magnetic buttons — dedupe so persistent nav buttons aren't double-bound.
    const magCleanups: (() => void)[] = [];
    if (!reduce && wide) {
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        if (el.dataset.magInit) return;
        el.dataset.magInit = '1';
        const strength = parseFloat(el.dataset.magnetic || '') || 0.35;
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const onLeave = () => {
          el.style.transform = '';
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        magCleanups.push(() => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
          delete el.dataset.magInit;
          el.style.transform = '';
        });
      });
    }

    // Parallax.
    const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]');
    let pTicking = false;
    const updateParallax = () => {
      const vh = innerHeight;
      parallax.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '') || 0.2;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
      });
      pTicking = false;
    };
    const onParallaxScroll = () => {
      if (!pTicking) {
        requestAnimationFrame(updateParallax);
        pTicking = true;
      }
    };
    if (!reduce && parallax.length) {
      window.addEventListener('scroll', onParallaxScroll, { passive: true });
      updateParallax();
    }

    return () => {
      window.clearTimeout(transTimer);
      cancelAnimationFrame(heroRaf1);
      cancelAnimationFrame(heroRaf2);
      window.clearTimeout(heroTimer);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      checkTimers.forEach((t) => window.clearTimeout(t));
      magCleanups.forEach((fn) => fn());
      window.removeEventListener('scroll', onParallaxScroll);
    };
  }, [pathname]);

  return null;
}
