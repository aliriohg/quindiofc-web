"use client";
import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";
import { WhatsAppCTA } from "./Buttons.jsx";
import { CATEGORIES, WHATSAPP_LINK } from "../data/site.js";

const FIELD =
  "w-full rounded-xl border border-pitch-600 bg-pitch-800 px-4 py-3 text-white placeholder:text-pitch-300 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

export default function FinalCTA() {
  const [form, setForm] = useState({ parent: "", child: "", category: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.parent.trim()) next.parent = "Escribe tu nombre.";
    if (!form.child.trim()) next.child = "Escribe el nombre del niño o niña.";
    if (!form.category) next.category = "Selecciona una categoría.";
    if (!/^[\d\s+()-]{7,}$/.test(form.phone.trim()))
      next.phone = "Escribe un teléfono válido.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // La inscripción llega directo al WhatsApp de la escuela con los datos prediligenciados.
    const msg = `Hola, soy ${form.parent}. Quiero inscribir a ${form.child} en la categoría ${form.category}. Mi teléfono es ${form.phone}.`;
    window.open(WHATSAPP_LINK(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="inscripcion" className="relative overflow-hidden bg-pitch-950 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-pitch-700/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img src="/escudo.png" alt="" aria-hidden="true" className="w-20" />
          <h2 className="mt-6 max-w-lg text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            El primer paso del sueño de tu hijo empieza hoy.
          </h2>
          <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-pitch-100">
            Déjanos los datos y te contactamos el mismo día para agendar una
            clase de prueba sin costo.
          </p>
          <div className="mt-8">
            <WhatsAppCTA dark />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="rounded-2xl border border-pitch-600 bg-pitch-900 p-10 text-center">
              <p className="text-2xl font-bold text-gold-300">¡Listo!</p>
              <p className="mt-3 text-pitch-100">
                Abrimos WhatsApp con tus datos. Si no se abrió, escríbenos
                directamente y te respondemos enseguida.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsAppCTA dark />
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-pitch-600 bg-pitch-900 p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="parent" className="mb-2 block text-sm font-semibold text-white">
                    Tu nombre
                  </label>
                  <input
                    id="parent"
                    type="text"
                    autoComplete="name"
                    value={form.parent}
                    onChange={set("parent")}
                    placeholder="Nombre del padre, madre o acudiente"
                    className={FIELD}
                  />
                  {errors.parent && (
                    <p className="mt-1.5 text-sm font-medium text-gold-300">{errors.parent}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="child" className="mb-2 block text-sm font-semibold text-white">
                    Nombre del niño o niña
                  </label>
                  <input
                    id="child"
                    type="text"
                    value={form.child}
                    onChange={set("child")}
                    placeholder="¿A quién inscribimos?"
                    className={FIELD}
                  />
                  {errors.child && (
                    <p className="mt-1.5 text-sm font-medium text-gold-300">{errors.child}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-semibold text-white">
                    Categoría
                  </label>
                  <select
                    id="category"
                    value={form.category}
                    onChange={set("category")}
                    className={`${FIELD} ${form.category ? "" : "text-pitch-300"}`}
                  >
                    <option value="" disabled>
                      Selecciona la edad
                    </option>
                    {CATEGORIES.map((c) => (
                      <option key={c.name} value={`${c.name} (${c.ages})`} className="text-white">
                        {c.name} · {c.ages}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1.5 text-sm font-medium text-gold-300">{errors.category}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white">
                    Teléfono de contacto
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="Ej: 310 123 4567"
                    className={FIELD}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm font-medium text-gold-300">{errors.phone}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-bold text-pitch-950 transition hover:bg-gold-300 active:scale-[0.98]"
              >
                <PaperPlaneTilt size={20} weight="fill" aria-hidden="true" />
                Enviar inscripción
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
