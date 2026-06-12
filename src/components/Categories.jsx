import Reveal from "./Reveal.jsx";
import { CATEGORIES } from "../data/site.js";

export default function Categories() {
  return (
    <section id="categorias" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pitch-600">
            Categorías
          </p>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Un grupo para cada edad, de los 4 a los 14 años
          </h2>
        </Reveal>
      </div>

      {/* Carrusel con scroll-snap: en móvil se desliza, en desktop muestra 3+ tarjetas */}
      <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <ul className="mx-auto flex max-w-7xl snap-x snap-mandatory gap-5 px-4 sm:px-6 lg:px-8">
          {CATEGORIES.map((c, i) => (
            <li
              key={c.name}
              className="w-[280px] flex-none snap-start md:w-[320px]"
            >
              <Reveal delay={Math.min(i * 0.06, 0.3)} y={20}>
                <article className="group overflow-hidden rounded-2xl border border-pitch-100 bg-pitch-50 transition hover:border-pitch-300 hover:shadow-lg hover:shadow-pitch-900/10">
                  {/* Reemplazar por foto real de la categoría */}
                  <img
                    src={`https://picsum.photos/seed/${c.seed}/640/400`}
                    alt={`Entrenamiento de la categoría ${c.name}`}
                    loading="lazy"
                    className="aspect-[8/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-xl font-bold text-pitch-950">{c.name}</h3>
                      <span className="rounded-full bg-pitch-100 px-3 py-1 text-xs font-bold text-pitch-700">
                        {c.ages}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-pitch-900/60">
                      {c.focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
