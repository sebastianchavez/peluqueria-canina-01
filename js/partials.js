/* ============================================
   Componentes compartidos (Navbar + Footer)
   ============================================ */
(function() {
  'use strict';

  const NAVBAR = (activePage) => `
    <nav class="navbar fixed top-0 left-0 right-0 z-50 py-3 px-3 sm:px-6">
      <div class="container mx-auto flex items-center justify-between gap-2 sm:gap-3 flex-nowrap">
        <a href="index.html" class="flex items-center gap-2 text-base sm:text-xl font-bold nav-brand flex-shrink-0 whitespace-nowrap">
          <span class="text-2xl sm:text-3xl animate-wag inline-block">🐶</span>
          <span class="nav-logo">Paw Spa</span>
        </a>
        <div class="navbar-nav-links items-center gap-6">
          <a href="index.html" class="navbar-link font-medium ${activePage === 'index' ? 'active' : ''}">Inicio</a>
          <a href="sobre-nosotros.html" class="navbar-link font-medium ${activePage === 'sobre-nosotros' ? 'active' : ''}">Sobre nosotros</a>
          <a href="servicios.html" class="navbar-link font-medium ${activePage === 'servicios' ? 'active' : ''}">Servicios</a>
          <a href="galeria.html" class="navbar-link font-medium ${activePage === 'galeria' ? 'active' : ''}">Galería</a>
          <a href="precios.html" class="navbar-link font-medium ${activePage === 'precios' ? 'active' : ''}">Precios</a>
          <a href="horarios.html" class="navbar-link font-medium ${activePage === 'horarios' ? 'active' : ''}">Clases</a>
          <a href="contacto.html" class="navbar-link font-medium ${activePage === 'contacto' ? 'active' : ''}">Contacto</a>
          <a href="contacto.html" class="navbar-cta btn-primary cta-pulse">📅 Reservar</a>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button class="navbar-menu-toggle menu-toggle text-xl sm:text-2xl text-gray-800" aria-label="Menú">☰</button>
        </div>
      </div>
    </nav>

    <div class="mobile-menu">
      <a href="index.html">Inicio</a>
      <a href="sobre-nosotros.html">Sobre nosotros</a>
      <a href="servicios.html">Servicios</a>
      <a href="galeria.html">Galería</a>
      <a href="precios.html">Precios</a>
      <a href="horarios.html">Clases</a>
      <a href="contacto.html">Contacto</a>
    </div>
  `;

  const FOOTER = () => `
    <footer class="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">🐶 Paw Spa</h3>
            <p class="text-sm">Peluquería y spa canino de lujo en el corazón de Santiago.</p>
            <div class="flex gap-3 mt-4">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">📷</a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">f</a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">t</a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Navegación</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="hover:text-primary transition">Inicio</a></li>
              <li><a href="sobre-nosotros.html" class="hover:text-primary transition">Sobre nosotros</a></li>
              <li><a href="servicios.html" class="hover:text-primary transition">Servicios</a></li>
              <li><a href="galeria.html" class="hover:text-primary transition">Galería</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Servicios</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="precios.html" class="hover:text-primary transition">Precios</a></li>
              <li><a href="horarios.html" class="hover:text-primary transition">Clases</a></li>
              <li><a href="contacto.html" class="hover:text-primary transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="politicas.html" class="hover:text-primary transition">Políticas de privacidad</a></li>
              <li><a href="terminos.html" class="hover:text-primary transition">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-6 text-center text-sm">
          © <span data-year>2026</span> Paw Spa · Todos los derechos reservados · Hecho con ❤️ para los peludos
        </div>
      </div>
    </footer>
  `;

  // Función no usada (la lógica de colores está ahora en main.js)
  function initNavbarColors() { /* deprecated */ }

  window.PARTIALS = { NAVBAR, FOOTER, initNavbarColors };
})();
