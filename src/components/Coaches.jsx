"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SealCheck } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";
import { COACHES } from "../data/site.js";

export default function Coaches() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const coach = COACHES[active];

  return (
    <section id="entrenadores" className="bg-pitch-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-pitch-950 md:text-4xl">
            Profesionales que entrenan con el ejemplo
          </h2>
          <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-pitch-900/65">
            Cinco entrenadores certificados, cada uno con un rol claro dentro
            del proceso. Selecciona un profe para conocerlo.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.6fr]">
            {/* Selector de profes: lista vertical en desktop, fila deslizable en móvil */}
            <div
              role="tablist"
              aria-label="Cuerpo técnico"
              aria-orientation="vertical"
              className="flex snap-x gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {COACHES.map((c, i) => {
                const selected = i === active;
                return (
                  <button
                    key={c.name}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`shrink-0 snap-start rounded-2xl border px-5 py-4 text-left transition active:scale-[0.98] lg:w-full ${
                      selected
                        ? "border-pitch-700 bg-pitch-700 text-white shadow-lg shadow-pitch-900/15"
                        : "border-pitch-200 bg-white text-pitch-950 hover:border-pitch-400"
                    }`}
                  >
                    <span className="block font-bold">{c.name}</span>
                    <span
                      className={`mt-0.5 block text-sm ${
                        selected ? "text-gold-300" : "text-pitch-900/55"
                      }`}
                    >
                      {c.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel con imagen de fondo del profe seleccionado */}
            <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-pitch-950 lg:min-h-[520px]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={coach.image}
                  src={coach.image}
                  alt={`${coach.name} durante un entrenamiento`}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-pitch-950/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={coach.name}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                      {coach.name}
                    </h3>
                    <p className="mt-1 font-semibold text-gold-300">{coach.role}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-pitch-100 sm:text-base">
                      {coach.bio}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {coach.creds.map((cred) => (
                        <li
                          key={cred}
                          className="flex items-center gap-1.5 text-xs font-semibold text-white sm:text-sm"
                        >
                          <SealCheck
                            size={17}
                            weight="fill"
                            className="shrink-0 text-gold-400"
                            aria-hidden="true"
                          />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
