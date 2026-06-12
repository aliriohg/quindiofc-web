"use client";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const LINKS = [
  { href: "#escuela", label: "La escuela" },
  { href: "#categorias", label: "Categorías" },
  { href: "#entrenadores", label: "Entrenadores" },
  { href: "#galeria", label: "Galería" },
  { href: "#horarios", label: "Horarios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pitch-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/escudo.png"
            alt="Escudo Quindío F.C."
            className="h-10 w-10 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Quindío <span className="text-gold-400">F.C.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-pitch-100 transition hover:text-gold-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#inscripcion"
          className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-pitch-950 transition hover:bg-gold-300 active:scale-[0.98] lg:inline-flex"
        >
          Inscribe a tu hijo
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-pitch-950 px-4 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-pitch-100 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#inscripcion"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold-400 px-5 py-3 text-center text-base font-bold text-pitch-950"
          >
            Inscribe a tu hijo
          </a>
        </div>
      )}
    </header>
  );
}
