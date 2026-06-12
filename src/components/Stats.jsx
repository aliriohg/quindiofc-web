import Reveal from "./Reveal.jsx";
import { STATS } from "../data/site.js";

export default function Stats() {
  return (
    <section className="border-b border-pitch-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={16} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight text-pitch-700 md:text-5xl">
              {s.value}
            </p>
            <p className="mx-auto mt-2 max-w-[16ch] text-sm font-medium text-pitch-900/60">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
