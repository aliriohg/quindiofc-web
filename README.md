# Quindío F.C. | Landing Page

Landing page oficial de **Quindío F.C.**, escuela de formación de fútbol infantil en Armenia, Quindío (Colombia). Diseñada para generar confianza en los padres e incentivar las inscripciones, con conversión directa a WhatsApp sin necesidad de backend.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow) ![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)

## Características

- **Hero** a pantalla completa con el escudo protagonista y doble CTA (inscripción y WhatsApp).
- **Categorías por edades** (Semillitas a Sub-14) en carrusel con scroll-snap.
- **Cuerpo técnico interactivo**: selecciona un profe y el panel cambia a una imagen relacionada con su rol.
- **Formulario de inscripción** que valida los datos y abre WhatsApp con el mensaje prediligenciado.
- Galería masonry, testimonios, horarios con mapa embebido y botón flotante de WhatsApp.
- Animaciones suaves con Motion, con respeto de `prefers-reduced-motion`.
- 100% responsive (móvil primero) y optimizada para conversión.

## Stack

| Herramienta | Uso |
|---|---|
| [React 18](https://react.dev) | Componentes de la interfaz |
| [Vite 6](https://vite.dev) | Bundler y servidor de desarrollo |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos y sistema de diseño |
| [Motion](https://motion.dev) | Animaciones |
| [Phosphor Icons](https://phosphoricons.com) | Iconografía |
| [Outfit Variable](https://fontsource.org/fonts/outfit) | Tipografía autohospedada |

## Inicio rápido

Requiere Node.js 18 o superior.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (carpeta dist/)
npm run build

# Previsualizar el build
npm run preview
```

## Personalización

Todo el contenido editable está centralizado en [`src/data/site.js`](src/data/site.js):

| Qué cambiar | Dónde |
|---|---|
| Número de WhatsApp | `WHATSAPP_NUMBER` (formato `57XXXXXXXXXX`, sin `+` ni espacios) |
| Sede y mapa | `SEDE` |
| Cifras de la escuela | `STATS` |
| Categorías y edades | `CATEGORIES` |
| Entrenadores, bios y fotos | `COACHES` (campo `image`) |
| Testimonios | `TESTIMONIALS` |
| Horarios | `SCHEDULE` |

### Imágenes pendientes de reemplazar

Las fotos actuales son placeholders de [picsum.photos](https://picsum.photos). Para producción:

1. **Escudo**: guardar como `public/escudo.png` (se usa en navbar, hero, CTA final, footer y favicon).
2. **Fondo del hero**: guardar como `public/fondo.png` (niños entrenando).
3. **Fotos de los profes**: guardarlas en `public/profes/` y actualizar el campo `image` de cada entrenador en `site.js`.
4. **Galería, categorías y secciones**: buscar los comentarios `// Reemplazar...` en los componentes de `src/components/`.

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx        # Navegación fija con menú móvil
│   ├── Hero.jsx          # Portada con escudo y CTAs
│   ├── Stats.jsx         # Cifras de confianza
│   ├── About.jsx         # Historia, filosofía y valores
│   ├── Benefits.jsx      # Beneficios en bento grid
│   ├── Categories.jsx    # Carrusel de categorías por edad
│   ├── Coaches.jsx       # Cuerpo técnico interactivo
│   ├── Gallery.jsx       # Galería masonry
│   ├── Testimonials.jsx  # Opiniones de familias y jugadores
│   ├── Schedule.jsx      # Horarios y mapa de la sede
│   ├── FinalCTA.jsx      # Formulario de inscripción → WhatsApp
│   ├── Footer.jsx        # Pie de página y redes sociales
│   ├── WhatsAppFloat.jsx # Botón flotante de WhatsApp
│   ├── Buttons.jsx       # CTAs reutilizables
│   └── Reveal.jsx        # Animación de aparición al hacer scroll
├── data/
│   └── site.js           # Contenido editable del sitio
├── App.jsx
├── main.jsx
└── index.css             # Tokens de diseño (colores del escudo, tipografía)
```

## Despliegue

El proyecto genera un sitio estático, compatible con cualquier hosting:

- **Vercel / Netlify**: conectar el repo y desplegar (detectan Vite automáticamente).
- **GitHub Pages**: ejecutar `npm run build` y publicar la carpeta `dist/`.

---

Hecho con 💚 para la familia Quindío F.C.
