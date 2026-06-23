/* ============================================================
   NEXTGEN TENNISAKADEMIE — shared interactions
   ============================================================ */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- NAV scroll state ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Burger ---------- */
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('open');
      burger.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open'); burger.classList.remove('active');
    }));
  }

  /* ---------- Scroll reveal + counters (rAF/IO-free, fully robust) ---------- */
  const revealEls = [...document.querySelectorAll('[data-reveal], [data-reveal-stagger], .clip-up')];
  const counters = [...document.querySelectorAll('[data-count]')];
  const started = new WeakSet();

  const inView = (el, margin) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return false;
    return r.top < innerHeight * (margin || 0.9) && r.bottom > 0;
  };

  const startCounter = (el) => {
    if (started.has(el)) return; started.add(el);
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.dec | 0);
    const dur = 1500, start = performance.now();
    const fmt = (v) => v.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(target);
    };
    if (reduce) { el.textContent = fmt(target); return; }
    requestAnimationFrame(tick);
    // fallback if rAF is throttled: settle after 1.6s
    setTimeout(() => { el.textContent = fmt(target); }, 1700);
  };

  const check = () => {
    revealEls.forEach(el => {
      if (el.classList.contains('in')) return;
      if (inView(el)) {
        el.classList.add('in');
        if (el.hasAttribute('data-reveal-stagger')) {
          [...el.children].forEach((k, i) => { k.style.transitionDelay = (i * 0.08) + 's'; });
        }
      }
    });
    counters.forEach(el => { if (inView(el, 0.95)) startCounter(el); });
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check, { passive: true });
  check();
  [50, 250, 600, 1200, 2400].forEach(t => setTimeout(check, t));

  /* ---------- Custom cursor ---------- */
  if (!reduce && window.matchMedia('(min-width: 901px)').matches && !('ontouchstart' in window)) {
    const dot = document.createElement('div'); dot.className = 'cursor';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.append(dot, ring);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };
    loop();
    const hot = 'a, button, .btn, .card, [data-hot], input, textarea, select';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hot)) { dot.classList.add('hot'); ring.classList.add('hot'); }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hot)) { dot.classList.remove('hot'); ring.classList.remove('hot'); }
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
  }

  /* ---------- Magnetic buttons ---------- */
  if (!reduce && window.matchMedia('(min-width: 901px)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.dataset.magnetic) || 0.35;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Parallax ---------- */
  const parallax = document.querySelectorAll('[data-parallax]');
  if (!reduce && parallax.length) {
    let ticking = false;
    const update = () => {
      const vh = innerHeight;
      parallax.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---------- Page transitions ---------- */
  const trans = document.createElement('div'); trans.className = 'page-trans';
  document.body.appendChild(trans);
  // reveal in on load
  if (!reduce) {
    trans.classList.add('reveal');
    setTimeout(() => trans.className = 'page-trans', 650);
  }
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    const internal = href && !href.startsWith('#') && !href.startsWith('http') && !a.hasAttribute('target') && !href.startsWith('mailto') && !href.startsWith('tel');
    if (!internal) return;
    a.addEventListener('click', (e) => {
      if (reduce) return;
      e.preventDefault();
      trans.className = 'page-trans cover';
      setTimeout(() => { window.location.href = href; }, 560);
    });
  });

  /* ---------- Animated court line draw (hero) ---------- */
  document.querySelectorAll('.court-draw path, .court-draw line, .court-draw rect, .court-draw circle').forEach((el, i) => {
    try {
      const len = el.getTotalLength ? el.getTotalLength() : 300;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = `stroke-dashoffset 1.6s ${0.2 + i * 0.12}s var(--ease, ease)`;
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.strokeDashoffset = 0; }));
    } catch (e) {}
  });
})();
