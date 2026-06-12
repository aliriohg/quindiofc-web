"use client";
import { motion, useReducedMotion } from "motion/react";
import { PrimaryCTA, WhatsAppCTA } from "./Buttons.jsx";

export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-pitch-950">
      {/* Foto de fondo: reemplazar por fotografía real de los niños entrenando */}
      <img
        src="/fondo.png"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pitch-950 via-pitch-950/85 to-pitch-900/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pitch-950 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <motion.h1
            {...enter(0.05)}
            className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Aquí nacen los jugadores, <span className="text-gold-400">crecen las personas.</span>
          </motion.h1>

          <motion.p
            {...enter(0.18)}
            className="mt-6 max-w-md text-lg leading-relaxed text-pitch-100"
          >
            Escuela de formación de fútbol infantil y juvenil en el Quindío.
            Técnica, disciplina y valores desde los 4 años.
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCTA />
            <WhatsAppCTA dark />
          </motion.div>
        </div>

        {/* Escudo protagonista */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
              })}
          className="hidden justify-center lg:flex"
        >
          <img
            src="/escudo.png"
            alt="Escudo oficial de Quindío F.C., fundado en 2020"
            className="w-72 max-w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] xl:w-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
