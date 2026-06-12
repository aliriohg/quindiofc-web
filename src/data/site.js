// Datos editables del sitio. Cambia aquí el número de WhatsApp,
// la sede y los textos sin tocar los componentes.

export const WHATSAPP_NUMBER = "573000000000"; // <- reemplazar por el número real (sin "+" ni espacios)

export const WHATSAPP_LINK = (
  text = "Hola, quiero información para inscribir a mi hijo en Quindío F.C."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const SEDE = {
  nombre: "Cancha sintética La Esperanza", // <- reemplazar por la sede real
  direccion: "Armenia, Quindío, Colombia",
  mapEmbed: "https://www.google.com/maps?q=Armenia,Quindio,Colombia&output=embed",
};

// Cifras de la escuela. Reemplazar por los datos reales.
export const STATS = [
  { value: "2020", label: "Año de fundación" },
  { value: "120+", label: "Niños y jóvenes en formación" },
  { value: "6", label: "Categorías por edades" },
  { value: "100%", label: "Entrenadores certificados" },
];

export const CATEGORIES = [
  {
    name: "Semillitas",
    ages: "4 a 6 años",
    focus: "Juego, coordinación y amor por el balón.",
    seed: "qfc-semillitas",
  },
  {
    name: "Sub-8",
    ages: "7 a 8 años",
    focus: "Fundamentos técnicos y primeros partidos.",
    seed: "qfc-sub8",
  },
  {
    name: "Sub-10",
    ages: "9 a 10 años",
    focus: "Control, pase y lectura básica del juego.",
    seed: "qfc-sub10",
  },
  {
    name: "Sub-12",
    ages: "11 a 12 años",
    focus: "Táctica por líneas y competencia federada.",
    seed: "qfc-sub12",
  },
  {
    name: "Sub-14",
    ages: "13 a 14 años",
    focus: "Posición, ritmo de juego y preparación física.",
    seed: "qfc-sub14",
  },
];

// Cada profe tiene una imagen de fondo relacionada con su rol.
// Reemplazar "image" por la ruta de la foto real (ej: "/profes/julian.jpg").
export const COACHES = [
  {
    name: "Julián Ocampo",
    role: "Director técnico y fundador",
    bio: "Más de 12 años formando jugadores en el Eje Cafetero. Lidera la metodología de la escuela y dirige la categoría Sub-14.",
    creds: ["Licencia C CONMEBOL", "Tecnólogo en Entrenamiento Deportivo"],
    image: "https://picsum.photos/seed/qfc-julian-tactica/1400/900",
  },
  {
    name: "Diana Cardona",
    role: "Entrenadora de iniciación",
    bio: "Especialista en iniciación deportiva. Responsable de Semillitas y Sub-8, donde el juego es la principal herramienta de aprendizaje.",
    creds: ["Lic. en Educación Física", "Curso de iniciación FCF"],
    image: "https://picsum.photos/seed/qfc-diana-iniciacion/1400/900",
  },
  {
    name: "Laura Botero",
    role: "Entrenadora Sub-10 y Sub-12",
    bio: "Acompaña la etapa donde se consolida la técnica. Trabaja el pase, el control y la lectura del juego en espacios reducidos.",
    creds: ["Profesional en Deporte", "Licencia D FCF"],
    image: "https://picsum.photos/seed/qfc-laura-tecnica/1400/900",
  },
  {
    name: "Sebastián Marín",
    role: "Entrenador de arqueros",
    bio: "Forma a los porteros de todas las categorías: técnica de atajada, juego con los pies y personalidad bajo los tres palos.",
    creds: ["Curso de arqueros ATFA"],
    image: "https://picsum.photos/seed/qfc-sebastian-arqueros/1400/900",
  },
  {
    name: "Mauricio Henao",
    role: "Preparador físico",
    bio: "Diseña el trabajo físico adaptado a cada edad, priorizando la salud, la coordinación y la prevención de lesiones.",
    creds: ["Profesional en Ciencias del Deporte"],
    image: "https://picsum.photos/seed/qfc-mauricio-fisico/1400/900",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Samuel llegó tímido y hoy lidera a sus compañeros dentro y fuera de la cancha. La disciplina que aprendió aquí se nota hasta en el colegio.",
    name: "Carolina Restrepo",
    role: "Mamá de Samuel, Sub-8",
    featured: true,
  },
  {
    quote:
      "Los profes conocen a cada niño por su nombre y le hablan a uno con claridad sobre su proceso.",
    name: "Jorge Iván Muñoz",
    role: "Papá de Emiliano, Sub-12",
  },
  {
    quote:
      "Entrenar acá me enseñó que el talento sin disciplina no alcanza. Quiero llegar a un club profesional.",
    name: "Tomás Arango",
    role: "Jugador, categoría Sub-14",
  },
];

export const SCHEDULE = [
  {
    group: "Semillitas (4 a 6 años)",
    times: ["Sábados 8:00 a 9:30 a.m."],
  },
  {
    group: "Sub-8 y Sub-10",
    times: ["Martes y jueves 5:00 a 6:30 p.m.", "Sábados 9:30 a 11:00 a.m."],
  },
  {
    group: "Sub-12 y Sub-14",
    times: ["Martes y jueves 6:30 a 8:00 p.m.", "Sábados 11:00 a 12:30 p.m."],
  },
  {
    group: "Arqueros (todas las categorías)",
    times: ["Viernes 5:00 a 6:30 p.m."],
  },
];
