# 🐶 Paw Spa — Landing Page para Peluquería Canina

Plantilla HTML/CSS/JS completa para una peluquería canina, construida con **Tailwind CSS** y JavaScript nativo (sin frameworks).

## 📁 Estructura

```
peluqueria-canina-01/
├── index.html              # Página principal (Inicio)
├── sobre-nosotros.html     # Sobre nosotros, equipo, historia
├── servicios.html          # Servicios + proceso + FAQ
├── galeria.html            # Galería con filtros y lightbox
├── precios.html            # Tabla de precios, paquetes, suscripciones
├── horarios.html           # Clases de adiestramiento (3 niveles)
├── contacto.html           # Formulario + Mapa + Horarios
├── politicas.html          # Política de privacidad (RGPD)
├── terminos.html           # Términos y condiciones
├── css/
│   └── styles.css          # Animaciones y estilos personalizados
└── js/
    ├── data.js             # Datos mockeados (servicios, equipo, etc.)
    ├── partials.js         # Inyección de navbar y footer compartidos
    ├── main.js             # Navbar, animaciones, contadores, formulario
    └── gallery.js          # Lógica de galería y lightbox
```

## 🚀 Cómo abrir

Al ser un sitio estático, **basta con abrir `index.html` en el navegador** o usar cualquier servidor estático:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node
npx serve .

# Opción 3: VS Code → extensión Live Server
```

Luego abre `http://localhost:8000`.

## ✨ Características

- 📱 **100% Responsive** con Tailwind CSS
- 🎨 **Animaciones fluidas** al scroll (IntersectionObserver)
- 🐕 **Diseño temático** con paleta cálida (ámbar + azul)
- 📸 **Galería interactiva** con filtros y lightbox
- 📅 **Formulario completo** con validación JS nativa
- 🗺️ **Mapa embebido** de Google Maps
- 🔢 **Datos mockeados** listos para personalizar
- ⚖️ **Páginas legales** (RGPD + Términos)
- 📱 **Menú móvil** funcional
- 🛡️ **Sistema de fallback automático** para imágenes

## 🎨 Personalización

- **Colores**: modifica las variables en `css/styles.css` (`--color-primary`, `--color-secondary`).
- **Datos del negocio**: edita el objeto `DATA.business` en `js/data.js`.
- **Servicios/Precios**: modifica los arrays `DATA.servicios` y `DATA.precios`.
- **Imágenes**: el proyecto usa **[place.dog](https://placedog.net)** (servicio gratuito específico para perros) para todas las imágenes de galería y heroes, y **[placehold.co](https://placehold.co)** para avatares y placeholders. Reemplaza por tus propias imágenes cuando despliegues.

## 🛡️ Sistema de imágenes robusto

Todas las imágenes tienen **fallback automático** mediante eventos `onerror` y listeners de `error`:
- Si una imagen de `placedog.net` falla, se reemplaza por un placeholder temático con `placehold.co`
- Las imágenes rotas nunca dejan espacios en blanco
- Los placeholders incluyen etiqueta del contexto (Corte, Baño, Spa, etc.)

## 🛠️ Stack técnico

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica |
| Tailwind CSS (CDN) | Estilos utility-first |
| JavaScript ES6+ | Interactividad nativa |
| Google Fonts (Poppins) | Tipografía |
| Unsplash CDN | Imágenes placeholder |

## 📋 Navegación

- **Inicio** → Hero + servicios destacados + testimonios
- **Sobre nosotros** → Historia + equipo + timeline
- **Servicios** → Cards detalladas + proceso + FAQ
- **Galería** → Grid con filtros por categoría
- **Precios** → Tabla por tamaño + paquetes + suscripciones
- **Clases** → Adiestramiento (básico/intermedio/avanzado)
- **Contacto** → Formulario + mapa + horarios
- **Políticas de privacidad** → 10 secciones (RGPD)
- **Términos y condiciones** → 13 secciones legales

---

Hecho con ❤️ para los peludos · © 2026 Paw Spa
