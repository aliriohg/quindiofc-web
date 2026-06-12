import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_LINK } from "../data/site.js";

// Botones reutilizables. Regla del proyecto: botones siempre pill.
// Intención "inscripción" = un solo rótulo en toda la página: "Inscribe a tu hijo".
// Intención "contacto" = un solo rótulo: "Hablar por WhatsApp".

export function PrimaryCTA({ className = "" }) {
  return (
    <a
      href="#inscripcion"
      className={`inline-flex items-center justify-center rounded-full bg-gold-400 px-7 py-3.5 text-base font-bold text-pitch-950 shadow-lg shadow-pitch-950/20 transition hover:bg-gold-300 active:scale-[0.98] ${className}`}
    >
      Inscribe a tu hijo
    </a>
  );
}

export function WhatsAppCTA({ dark = false, className = "" }) {
  return (
    <a
      href={WHATSAPP_LINK()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-base font-semibold transition active:scale-[0.98] ${
        dark
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-pitch-600 text-pitch-700 hover:bg-pitch-100"
      } ${className}`}
    >
      <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
      Hablar por WhatsApp
    </a>
  );
}
