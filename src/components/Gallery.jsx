import Reveal from "./Reveal.jsx";

// Reemplazar los seeds por fotografías reales de entrenamientos y torneos.
const PHOTOS = [
  { seed: "qfc-gol-celebracion", h: 520, alt: "Celebración de gol en torneo de liga" },
  { seed: "qfc-practica-pases", h: 380, alt: "Práctica de pases en pareja" },
  { seed: "qfc-arquero-atajada", h: 440, alt: "Arquero infantil realizando una atajada" },
  { seed: "qfc-charla-tecnica", h: 360, alt: "Charla técnica antes del partido" },
  { seed: "qfc-torneo-premiacion", h: 500, alt: "Premiación de torneo intercolegiado" },
  { seed: "qfc-calentamiento-grupo", h: 400, alt: "Calentamiento grupal en la cancha" },
  { seed: "qfc-partido-liga", h: 460, alt: "Partido oficial de la categoría Sub-12" },
  { seed: "qfc-equipo-foto", h: 380, alt: "Foto oficial del plantel Sub-14" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Así se vive un sábado en Quindío F.C.
          </h2>
        </Reveal>

        {/* Masonry con CSS columns; colapsa a 2 columnas en móvil */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.seed} delay={Math.min(i * 0.05, 0.25)} y={20}>
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/${p.h}`}
                alt={p.alt}
                loading="lazy"
                className="w-full break-inside-avoid rounded-2xl object-cover transition duration-300 hover:scale-[1.015]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
