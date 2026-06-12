import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_LINK } from "../data/site.js";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-pitch-950/30 transition hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={30} weight="fill" aria-hidden="true" />
    </a>
  );
}
