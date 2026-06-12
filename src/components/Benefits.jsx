import { SoccerBall, Barbell, HandHeart } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";

export default function Benefits() {
  return (
    <section className="bg-pitch-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Lo que tu hijo gana entrenando con nosotros
          </h2>
        </Reveal>

        {/* Bento 2x2 asimétrico: celda grande con foto + 3 celdas de contenido */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
              {/* Reemplazar por fotografía real de entrenamiento técnico */}
              <img
                src="https://picsum.photos/seed/qfc-entrenamiento-tecnico/1200/900"
                alt="Niño dominando el balón durante un entrenamiento"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-950/90 via-pitch-950/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <SoccerBall size={32} weight="duotone" className="text-gold-400" aria-hidden="true" />
                <h3 className="mt-3 text-2xl font-bold text-white">Formación deportiva real</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-pitch-100">
                  Metodología por edades, planificación de temporada y
                  competencia en torneos de liga. No improvisamos: cada sesión
                  tiene un objetivo.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-pitch-700 p-7">
              <Barbell size={30} weight="duotone" className="text-gold-400" aria-hidden="true" />
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white">Desarrollo físico sano</h3>
                <p className="mt-2 text-sm leading-relaxed text-pitch-100">
                  Cargas adaptadas a cada edad con preparador físico
                  profesional. Crecer fuerte, sin lesiones.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-pitch-200 bg-white p-7">
              <HandHeart size={30} weight="duotone" className="text-pitch-600" aria-hidden="true" />
              <div className="mt-6">
                <h3 className="text-xl font-bold text-pitch-950">Carácter y disciplina</h3>
                <p className="mt-2 text-sm leading-relaxed text-pitch-900/65">
                  Hábitos, puntualidad y respeto que los padres notan en casa y
                  en el colegio.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
