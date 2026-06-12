import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";
import { SEDE } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-pitch-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/escudo.png" alt="Escudo Quindío F.C." className="h-12 w-12 object-contain" />
          <div>
            <p className="font-extrabold text-white">
              Quindío <span className="text-gold-400">F.C.</span>
            </p>
            <p className="text-sm text-pitch-200">{SEDE.direccion}</p>
          </div>
        </div>

        {/* Reemplazar "#" por los perfiles reales de la escuela */}
        <ul className="flex items-center gap-5">
          <li>
            <a href="#" aria-label="Instagram" className="text-pitch-200 transition hover:text-gold-300">
              <InstagramLogo size={26} weight="fill" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook" className="text-pitch-200 transition hover:text-gold-300">
              <FacebookLogo size={26} weight="fill" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="TikTok" className="text-pitch-200 transition hover:text-gold-300">
              <TiktokLogo size={26} weight="fill" />
            </a>
          </li>
        </ul>

        <p className="text-sm text-pitch-300">
          © {new Date().getFullYear()} Quindío F.C. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
