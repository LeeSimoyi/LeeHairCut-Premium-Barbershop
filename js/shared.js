/* ============================================================
   LEEHAIRCUT — SHARED JS (v3 — Final)
   ============================================================ */
'use strict';

/* ================================================================
   NAVBAR
   ================================================================ */
const navbar     = document.getElementById('navbar') || document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks') || document.querySelector('.nav-links');
const navClose   = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function openNav() {
  if (!navLinks) return;
  menuToggle && menuToggle.classList.add('active');
  navLinks.classList.add('active');
  navOverlay && navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  if (!navLinks) return;
  menuToggle && menuToggle.classList.remove('active');
  navLinks.classList.remove('active');
  navOverlay && navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuToggle  && menuToggle.addEventListener('click', openNav);
navClose    && navClose.addEventListener('click', closeNav);
navOverlay  && navOverlay.addEventListener('click', closeNav);
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeNav));

/* ================================================================
   ACTIVE NAV LINK
   ================================================================ */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.nav-book-btn)').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

/* ================================================================
   SCROLL ANIMATIONS
   ================================================================ */
const animEls = document.querySelectorAll('.fade-up,.fade-left,.fade-right,.scale-in');
if (animEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  animEls.forEach(el => obs.observe(el));
}

/* ================================================================
   BACK TO TOP
   ================================================================ */
const backTop = document.querySelector('.back-top');
if (backTop) {
  window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 400), { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ================================================================
   TOAST NOTIFICATION SYSTEM — Premium
   ================================================================ */
function showToast(title, msg = '', type = 'success') {
  // Remove existing toast
  const old = document.getElementById('lhcToast');
  if (old) { old.remove(); }

  const iconMap = {
    success: { icon: 'circle-check',   cls: 'green',  toast: 'toast-success' },
    error:   { icon: 'circle-xmark',   cls: 'red',    toast: 'toast-error'   },
    warning: { icon: 'triangle-exclamation', cls: 'yellow', toast: 'toast-warning' },
    info:    { icon: 'circle-info',    cls: 'blue',   toast: 'toast-info'    },
  };
  const { icon, cls, toast: toastCls } = iconMap[type] || iconMap.success;

  const t = document.createElement('div');
  t.id = 'lhcToast';
  t.className = `toast ${toastCls}`;
  t.innerHTML = `
    <div class="toast-icon ${cls}"><i class="fa-solid fa-${icon}"></i></div>
    <div class="toast-content"><h4>${title}</h4>${msg ? `<p>${msg}</p>` : ''}</div>
    <button class="toast-close" onclick="this.closest('.toast').remove()"><i class="fa-solid fa-xmark"></i></button>
    <div class="toast-bar ${cls}"></div>`;
  document.body.appendChild(t);

  // Force reflow then show
  void t.offsetHeight;
  requestAnimationFrame(() => t.classList.add('show'));

  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 600);
  }, 4000);
}
window.showToast = showToast;

/* ================================================================
   BOOKING MODAL (quick modal on homepage)
   ================================================================ */
const bookingModal   = document.getElementById('bookingModal');
const bookingOverlay = document.querySelector('.booking-overlay');
const bookingClose   = document.getElementById('bookingClose');

function openBooking()  { if (!bookingModal) return; bookingModal.classList.add('active');    document.body.style.overflow = 'hidden'; }
function closeBooking() { if (!bookingModal) return; bookingModal.classList.remove('active'); document.body.style.overflow = ''; }

document.querySelectorAll('[data-booking]').forEach(btn =>
  btn.addEventListener('click', e => { e.preventDefault(); openBooking(); })
);
bookingClose   && bookingClose.addEventListener('click', closeBooking);
bookingOverlay && bookingOverlay.addEventListener('click', closeBooking);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeBooking(); closeNav(); }
});

/* Booking form (modal) */
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    closeBooking();
    showToast('Booking Submitted!', 'We will confirm your appointment shortly.', 'success');
    bookingForm.reset();
  });
}

/* ================================================================
   CONTACT FORM
   ================================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message Sent!', "We'll get back to you shortly.", 'success');
    contactForm.reset();
  });
}

/* ================================================================
   FAQ ACCORDION
   ================================================================ */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn  = item.querySelector('.faq-question');
  const icon = item.querySelector('.faq-icon i');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item.active').forEach(i => {
      i.classList.remove('active');
      const ic = i.querySelector('.faq-icon i');
      if (ic) { ic.className = 'fa-solid fa-plus'; }
    });
    if (!isOpen) {
      item.classList.add('active');
      if (icon) { icon.className = 'fa-solid fa-minus'; }
    }
  });
});

/* ================================================================
   COUNTER ANIMATION
   ================================================================ */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current  = 0;
    const step   = target / 55;
    const timer  = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 22);
  });
}
const counterSection = document.querySelector('.stats-section, .hero-stats');
if (counterSection) {
  const cObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); cObs.disconnect(); }
  }, { threshold: 0.3 });
  cObs.observe(counterSection);
}

/* ================================================================
   TESTIMONIAL AUTO-SLIDER
   ================================================================ */
const trackEl = document.querySelector('.testimonial-track');
if (trackEl) {
  let idx = 0, autoTimer;
  function getCardW() {
    const c = trackEl.querySelector('.testimonial-card');
    return c ? c.offsetWidth + 22 : 340;
  }
  function visCount() { return window.innerWidth < 640 ? 1 : window.innerWidth < 992 ? 2 : 3; }
  function maxIdx()   { return Math.max(0, trackEl.querySelectorAll('.testimonial-card').length - visCount()); }
  function slideTo(n) {
    idx = Math.max(0, Math.min(n, maxIdx()));
    trackEl.style.transform = `translateX(-${idx * getCardW()}px)`;
  }
  function startAuto() { autoTimer = setInterval(() => slideTo(idx >= maxIdx() ? 0 : idx + 1), 4200); }
  startAuto();
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  prevBtn && prevBtn.addEventListener('click', () => { clearInterval(autoTimer); slideTo(idx - 1); startAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { clearInterval(autoTimer); slideTo(idx + 1); startAuto(); });
  let tx = 0;
  trackEl.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  trackEl.addEventListener('touchend',   e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) { clearInterval(autoTimer); slideTo(diff > 0 ? idx + 1 : idx - 1); startAuto(); }
  });
  window.addEventListener('resize', () => slideTo(idx));
}

/* ================================================================
   SMOOTH ANCHOR SCROLL
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});
