import { Heart, Medal, UsersThree, Target } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";

const VALUES = [
  {
    icon: Heart,
    title: "Respeto",
    text: "Por el rival, el árbitro, los compañeros y la familia.",
  },
  {
    icon: Medal,
    title: "Disciplina",
    text: "Puntualidad, esfuerzo y constancia en cada entrenamiento.",
  },
  {
    icon: UsersThree,
    title: "Trabajo en equipo",
    text: "Nadie gana solo. El grupo siempre está primero.",
  },
  {
    icon: Target,
    title: "Sueños con plan",
    text: "Metas deportivas claras, acompañadas paso a paso.",
  },
];

export default function About() {
  return (
    <section id="escuela" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
              Una escuela que nació en 2020 con una idea simple: formar bien.
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-base leading-relaxed text-pitch-900/70">
              <p>
                Quindío F.C. nació en Armenia con un grupo pequeño de niños y un
                propósito grande: que cada jugador reciba formación de calidad,
                sin importar su nivel al llegar.
              </p>
              <p>
                Nuestra filosofía es clara. Primero la persona, después el
                jugador. El fútbol es la herramienta con la que enseñamos
                hábitos que sirven para toda la vida.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Reemplazar por fotografía real del equipo celebrando */}
            <img
              src="https://picsum.photos/seed/qfc-equipo-celebrando/900/700"
              alt="Jugadores de Quindío F.C. celebrando en equipo"
              loading="lazy"
              className="aspect-[9/7] w-full rounded-2xl object-cover shadow-xl shadow-pitch-900/10"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} y={20}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pitch-100 text-pitch-700">
                <v.icon size={26} weight="duotone" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-pitch-950">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-pitch-900/60">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
