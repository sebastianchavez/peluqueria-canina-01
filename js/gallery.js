/* ============================================
   Galería + Lightbox
   ============================================ */

(function() {
  'use strict';

  // Sistema de fallback para imágenes rotas
  function setupImageFallback(img) {
    if (!img || img.dataset.fallbackSet) return;
    const originalSrc = img.src;
    img.dataset.fallbackSet = 'true';
    img.addEventListener('error', function handler() {
      // Generar placeholder con placehold.co
      const w = img.naturalWidth || img.width || 600;
      const h = img.naturalHeight || img.height || 600;
      const cats = { 'corte': 'f59e0b', 'banio': '3b82f6', 'spa': '10b981', 'antes-despues': 'ec4899' };
      const cat = (img.closest('.gallery-item')?.dataset.cat) || 'corte';
      const bg = cats[cat] || 'f59e0b';
      const labels = { 'corte': '✂️ Corte', 'banio': '🛁 Baño', 'spa': '💆 Spa', 'antes-despues': '✨ Antes/Después' };
      img.removeEventListener('error', handler);
      img.src = `https://placehold.co/${w}x${h}/${bg}/ffffff?text=${encodeURIComponent(labels[cat] || '🐶')}?font=poppins&bold=true`;
      img.style.objectFit = 'contain';
    }, { once: false });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#gallery-mount');
    if (!grid) return;
    grid.classList.add('gallery-grid');

    const data = window.DATA;
    let currentFilter = 'todos';
    let currentIndex = 0;
    let visibleItems = [];

    // Renderizar galería
    function render(filter = 'todos') {
      currentFilter = filter;
      grid.innerHTML = '';
      data.galeria.forEach((item, idx) => {
        if (filter === 'todos' || filter === item.cat) {
          const div = document.createElement('div');
          div.className = 'gallery-item animate-on-scroll aspect-square';
          div.dataset.index = idx;
          div.dataset.cat = item.cat;
          div.innerHTML = `<img loading="lazy" src="${item.url}" alt="${item.alt}" class="fallback-img">`;
          div.addEventListener('click', () => openLightbox(idx));
          grid.appendChild(div);
        }
      });
      // Re-observer para animaciones
      setTimeout(() => {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.1 });
        grid.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
      }, 50);
    }

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.filter);
      });
    });

    // Lightbox
    function openLightbox(globalIdx) {
      // Encontrar índice dentro de items visibles
      visibleItems = data.galeria
        .map((item, idx) => ({ item, idx }))
        .filter(x => currentFilter === 'todos' || x.item.cat === currentFilter);
      currentIndex = visibleItems.findIndex(v => v.idx === globalIdx);
      createLightbox();
      showImage();
    }

    function createLightbox() {
      if (document.querySelector('.lightbox')) return;
      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar">✕</button>
        <button class="lightbox-prev" aria-label="Anterior">‹</button>
        <button class="lightbox-next" aria-label="Siguiente">›</button>
        <img alt="Imagen ampliada" class="fallback-img">
      `;
      document.body.appendChild(lb);

      lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
      lb.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
      lb.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));
      lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
      });
    }

    function showImage() {
      const lb = document.querySelector('.lightbox');
      const img = lb.querySelector('img');
      const visIdx = visibleItems[currentIndex]?.idx ?? 0;
      img.src = data.galeria[visIdx].url;
      img.alt = data.galeria[visIdx].alt;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function navigate(dir) {
      currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
      const lb = document.querySelector('.lightbox');
      const img = lb.querySelector('img');
      const visIdx = visibleItems[currentIndex].idx;
      img.style.animation = 'none';
      // Forzar reflow
      void img.offsetWidth;
      img.style.animation = 'bounceIn 0.4s ease-out';
      img.src = data.galeria[visIdx].url;
    }

    function closeLightbox() {
      const lb = document.querySelector('.lightbox');
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
      const lb = document.querySelector('.lightbox');
      if (!lb || !lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    // Render inicial
    render();

    // Aplicar fallback a todas las imágenes
    setTimeout(() => {
      document.querySelectorAll('.fallback-img, img[data-needs-fallback]').forEach(setupImageFallback);
    }, 100);

    // Aplicar fallback globalmente a TODAS las imágenes
    window.addEventListener('load', () => {
      document.querySelectorAll('img').forEach(img => {
        if (!img.dataset.fallbackSet) setupImageFallback(img);
      });
    });
  });
})();
