import Reveal from "./Reveal.jsx";
import { TESTIMONIALS } from "../data/site.js";

function Quote({ t, featured = false }) {
  return (
    <figure
      className={`flex h-full flex-col justify-between rounded-2xl p-8 ${
        featured
          ? "bg-pitch-700 text-white"
          : "border border-pitch-100 bg-white text-pitch-950"
      }`}
    >
      <blockquote
        className={`leading-relaxed ${
          featured ? "text-xl font-medium" : "text-base text-pitch-900/75"
        }`}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className={`font-bold ${featured ? "text-gold-300" : "text-pitch-950"}`}>
          {t.name}
        </p>
        <p className={`text-sm ${featured ? "text-pitch-100" : "text-pitch-900/55"}`}>
          {t.role}
        </p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="bg-pitch-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Lo que dicen las familias
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="h-full">
            <Quote t={featured} featured />
          </Reveal>
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={0.1 + i * 0.08} className="flex-1">
                <Quote t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
