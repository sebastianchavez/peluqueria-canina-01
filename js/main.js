/* ============================================
   Peluquería Canina - JS principal
   ============================================ */

(function() {
  'use strict';

  // ====== Navbar scroll effect ======
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Esperar a que los partials inyecten el navbar
    const waitForNavbar = () => {
      if (!document.querySelector('.navbar-link')) {
        setTimeout(waitForNavbar, 50);
        return;
      }

      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Color management: Cambia color de todos los elementos cuando se hace scroll
      const navBrand = navbar.querySelector('.nav-brand');
      const navLogo = navbar.querySelector('.nav-logo');
      const navLinks = navbar.querySelectorAll('.navbar-link');
      const menuToggle = navbar.querySelector('.menu-toggle');

      const updateColors = () => {
        const isScrolled = navbar.classList.contains('scrolled');

        if (isScrolled) {
          // Modo "scrolled": fondo claro, texto oscuro
          if (navBrand) { navBrand.classList.add('text-gray-800'); navBrand.classList.remove('text-white'); }
          if (navLogo) { navLogo.classList.add('text-gray-800'); navLogo.classList.remove('text-white'); }
          if (menuToggle) { menuToggle.classList.add('text-gray-800'); menuToggle.classList.remove('text-white'); }
          navLinks.forEach(l => { l.classList.add('text-gray-700'); l.classList.remove('text-white'); });
        } else {
          // Modo "top": fondo transparente (sobre hero), texto blanco
          if (navBrand) { navBrand.classList.add('text-white'); navBrand.classList.remove('text-gray-800'); }
          if (navLogo) { navLogo.classList.add('text-white'); navLogo.classList.remove('text-gray-800'); }
          navLinks.forEach(l => { l.classList.add('text-white'); l.classList.remove('text-gray-700'); });
        }
      };

      document.addEventListener('scroll', updateColors, { passive: true });
      updateColors();
    };

    waitForNavbar();
  }

  // ====== Mobile menu toggle ======
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const isOpen = menu.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Cerrar al hacer click en un link
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.innerHTML = '☰';
      });
    });
  }

  // ====== Animaciones on scroll ======
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stagger effect si hay múltiples dentro del mismo contenedor
          const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) {
              entry.target.style.transitionDelay = `${idx * 80}ms`;
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  // ====== Stats counter ======
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseFloat(el.dataset.counter);
      const duration = 2000;
      const isDecimal = target % 1 !== 0;
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + (el.dataset.suffix || '');
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // ====== Año actual en footer ======
  function setYear() {
    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  // ====== Marcar día actual en horarios ======
  function highlightToday() {
    const today = new Date().getDay(); // 0=Domingo, 1=Lunes...
    document.querySelectorAll('[data-day]').forEach(el => {
      if (parseInt(el.dataset.day) === today) {
        el.classList.add('today');
      }
    });
  }

  // ====== Toast notification ======
  window.showToast = function(message, type = 'success') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = (type === 'success' ? '✓ ' : '! ') + message;
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  };

  // ====== Fallback global para imágenes rotas =====
  function setupImageFallbacks() {
    // Placeholder por defecto si no se especifica uno mejor
    const FALLBACKS = {
      gallery: 'corte',     // categoria por defecto para galería
      team: 'team',
      testimonial: 'testimonial'
    };

    document.querySelectorAll('img').forEach(img => {
      if (img.dataset.fallbackSet) return;

      const setFallback = () => {
        const w = img.getAttribute('width') || 600;
        const h = img.getAttribute('height') || 600;
        let bg = 'f59e0b';
        let text = '🐶';

        // Detectar contexto
        if (img.closest('.gallery-item')) {
          const cat = img.closest('.gallery-item').dataset.cat || 'corte';
          const catMap = { 'corte': ['f59e0b', '✂️ Corte'], 'banio': ['3b82f6', '🛁 Baño'], 'spa': ['10b981', '💆 Spa'], 'antes-despues': ['ec4899', '✨ Antes/Después'] };
          bg = catMap[cat]?.[0] || bg;
          text = catMap[cat]?.[1] || text;
        } else if (img.closest('.testimonial-card')) {
          const cats = ['ec4899', '3b82f6', '10b981', 'f59e0b'];
          bg = cats[Math.floor(Math.random() * cats.length)];
          text = img.closest('.testimonial-card').querySelector('.font-bold')?.textContent?.charAt(0) || 'U';
          text = '🙋 ' + text;
        } else if (img.alt && img.alt.length < 30) {
          text = img.alt;
        }

        img.src = `https://placehold.co/${w}x${h}/${bg}/ffffff?text=${encodeURIComponent(text)}&font=poppins&bold=true`;
        img.style.objectFit = 'cover';
        img.style.background = '#f3f4f6';
      };

      img.dataset.fallbackSet = 'true';
      img.addEventListener('error', setFallback);
    });
  }

  // ====== Init todo ======
  function init() {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    setYear();
    highlightToday();
    setupImageFallbacks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Si el DOM ya cargó (partials ya inyectados), ejecutar inmediatamente
    setTimeout(init, 0);
  }
})();
