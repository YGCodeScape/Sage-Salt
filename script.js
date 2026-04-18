/* =============================================
   SAGE & SALT — script.js
   Clean, professional GSAP animations
   ============================================= */

// === GSAP SETUP ===
gsap.registerPlugin(ScrollTrigger);

// === 1. CUSTOM CURSOR ===
(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(animateCursor);
  }
  animateCursor();
})();

// === 2. STICKY NAV ===
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  ScrollTrigger.create({
    start: 'top -80px',
    onUpdate: (self) => {
      nav.classList.toggle('scrolled', self.progress > 0);
    }
  });
})();

// === 3. HAMBURGER / MOBILE MENU ===
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobLinks = document.querySelectorAll('.mob-link');

  if (!hamburger || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);

  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
})();

// === 4. HERO ENTRANCE ANIMATION ===
(function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
    .to('#heroTitle .line', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
    }, '-=0.4')
    .to('#heroSub', { opacity: 1, duration: 0.7 }, '-=0.4')
    .to('#heroCta', { opacity: 1, duration: 0.7 }, '-=0.4');
})();

// === 5. HERO PARALLAX ===
(function initHeroParallax() {
  const heroImg = document.getElementById('heroImg');
  if (!heroImg) return;

  gsap.to(heroImg, {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
})();

// === 6. RESERVATION SECTION PARALLAX ===
(function initReserveParallax() {
  const reserveImg = document.getElementById('reserveImg');
  if (!reserveImg) return;

  gsap.to(reserveImg, {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.reserve-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
})();

// === 7. SCROLL REVEAL (Intersection Observer) ===
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// === 8. DISH CARDS STAGGERED REVEAL ===
(function initDishCards() {
  const cards = document.querySelectorAll('.dish-card');
  if (!cards.length) return;

  ScrollTrigger.create({
    trigger: '.dishes-grid',
    start: 'top 75%',
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }
  });
})();

// === 9. STATS COUNT-UP ===
(function initCountUp() {
  const stats = document.querySelectorAll('.stat-item strong');
  if (!stats.length) return;

  function parseValue(text) {
    const match = text.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  }

  function formatValue(original, val) {
    if (original.includes('★')) return `${val.toFixed(1)}★`;
    if (original.includes('+')) return `${Math.round(val)}+`;
    return `${Math.round(val)}`;
  }

  ScrollTrigger.create({
    trigger: '.stats-bar',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      stats.forEach((stat) => {
        const original = stat.textContent.trim();
        const target = parseValue(original);
        gsap.fromTo(
          { val: 0 },
          { val: target },
          {
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: function () {
              stat.textContent = formatValue(original, this.targets()[0].val);
            }
          }
        );
      });
    }
  });
})();

// === 10. SMOOTH ANCHOR SCROLL ===
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
})();