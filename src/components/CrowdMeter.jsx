import { useEffect, useMemo, useState } from 'react';
import { Activity, Clock, Wifi } from 'lucide-react';

const ChalkEdge = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      maskImage:
        'radial-gradient(1200px 300px at 50% -100px, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%), radial-gradient(1200px 300px at 50% calc(100% + 100px), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)',
      WebkitMaskImage:
        'radial-gradient(1200px 300px at 50% -100px, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%), radial-gradient(1200px 300px at 50% calc(100% + 100px), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)',
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 6px)',
      opacity: 0.45,
    }}
  />
);

function useLiveOccupancy() {
  const baseByHour = useMemo(() => {
    const hours = new Array(24).fill(0).map((_, h) => {
      // Morning low, evening peak
      const morning = Math.max(0, 30 - Math.abs(10 - h) * 4);
      const evening = Math.max(0, 85 - Math.abs(19 - h) * 9);
      const midday = Math.max(0, 55 - Math.abs(14 - h) * 6);
      return Math.max(morning, midday, evening);
    });
    return hours; // 0-100 baseline
  }, []);

  const [levels, setLevels] = useState({ bouldering: 0, toprope: 0, lead: 0 });

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const h = now.getHours();
      const base = baseByHour[h];
      const noise = () => (Math.sin(now.getMinutes() / 60 * Math.PI * 2) + 1) * 5 + Math.random() * 6;
      const clamp = (n) => Math.max(0, Math.min(100, Math.round(n)));
      setLevels({
        bouldering: clamp(base + noise() + 5),
        toprope: clamp(base + noise() - 5),
        lead: clamp(base + noise() - 10),
      });
    };
    compute();
    const id = setInterval(compute, 15000);
    return () => clearInterval(id);
  }, [baseByHour]);

  return levels;
}

function Meter({ label, value }) {
  const hue = 120 - Math.min(120, (value / 100) * 120); // green to red
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 shadow-lg shadow-black/30 backdrop-blur">
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-300">
        <span className="font-semibold tracking-wide">{label}</span>
        <span className="inline-flex items-center gap-1 text-neutral-400"><Activity className="h-4 w-4" /> Live</span>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full transition-[width] duration-700 ease-out"
          style={{ width: `${value}%`, background: `linear-gradient(90deg, hsl(${hue} 80% 50%), hsl(${hue} 90% 45%))` }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 6px)' }} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-neutral-400">Capacity</span>
        <span className="text-sm font-bold" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.35)' }}>{value}%</span>
      </div>
    </div>
  );
}

export default function CrowdMeter() {
  const { bouldering, toprope, lead } = useLiveOccupancy();

  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-6 pb-16">
      <div className="relative rounded-3xl border border-white/10 bg-neutral-950/60 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
        <ChalkEdge />
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              Real-time Crowd Meter
            </h2>
            <p className="mt-1 text-sm text-neutral-300">Live estimates update every few seconds.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            <Wifi className="h-3.5 w-3.5" /> Connected
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Meter label="Bouldering" value={bouldering} />
          <Meter label="Top-Rope" value={toprope} />
          <Meter label="Lead" value={lead} />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
            <div className="mb-1 font-semibold text-neutral-200">Good to Go</div>
            <p>Early mornings and late evenings are typically quiet. Weekdays before 4pm are ideal for training.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
            <div className="mb-1 font-semibold text-neutral-200">Busier Times</div>
            <p>Weeknights 6–9pm and rainy weekends fill up fastest. Expect wait times for top-rope belays.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
            <div className="mb-1 flex items-center gap-2 font-semibold text-neutral-200"><Clock className="h-4 w-4" /> Pro Tip</div>
            <p>Try a power hour: warm-up, project 2–3 burns, finish with core. Less time on the mats, more sends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
