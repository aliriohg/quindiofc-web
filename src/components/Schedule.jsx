import { MapPin, Clock } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";
import { SCHEDULE, SEDE } from "../data/site.js";

export default function Schedule() {
  return (
    <section id="horarios" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Horarios y sede de entrenamiento
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Horarios agrupados por bloque de edad */}
          <div className="grid content-start gap-5 sm:grid-cols-2">
            {SCHEDULE.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.07} y={20}>
                <div className="h-full rounded-2xl bg-pitch-50 p-6">
                  <h3 className="font-bold text-pitch-950">{s.group}</h3>
                  <ul className="mt-3 space-y-2">
                    {s.times.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-sm text-pitch-900/70"
                      >
                        <Clock
                          size={17}
                          weight="duotone"
                          className="mt-0.5 shrink-0 text-pitch-600"
                          aria-hidden="true"
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mapa de la sede */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-pitch-100">
              <iframe
                src={SEDE.mapEmbed}
                title={`Ubicación de ${SEDE.nombre}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 lg:h-80"
                allowFullScreen
              />
              <div className="flex items-start gap-3 bg-pitch-50 p-6">
                <MapPin
                  size={24}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-pitch-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-pitch-950">{SEDE.nombre}</p>
                  <p className="text-sm text-pitch-900/65">{SEDE.direccion}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
