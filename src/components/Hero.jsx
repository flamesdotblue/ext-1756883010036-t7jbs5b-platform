import { motion } from 'framer-motion';
import { ArrowRight, Users, Ticket } from 'lucide-react';

const ChalkDust = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30"
    style={{
      backgroundImage:
        'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 50%, transparent 51%), radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.25) 50%, transparent 51%), radial-gradient(1px 1px at 60% 10%, rgba(255,255,255,0.25) 50%, transparent 51%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.25) 50%, transparent 51%)',
      backgroundSize: '180px 180px, 220px 220px, 260px 260px, 300px 300px',
      backgroundPosition: '0 0, 40px 20px, 80px -30px, -50px 60px',
    }}
  />
);

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605762830623-bf85bef626ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY3Rpb24lMjBzaG90JTIwb2YlMjBjbGltYmVyfGVufDB8MHx8fDE3NTY4ODMwOTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
          alt="Action shot of climber on an overhang wall"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-neutral-950" />
        <ChalkDust />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center gap-8 px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl font-extrabold tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
        >
          North Shore Climbing Co.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-2xl text-lg text-neutral-200"
        >
          Vancouver’s community hub for bouldering, top-rope, and lead. Chalk up, climb hard, and connect.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#crowd"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-neutral-900 shadow-xl shadow-white/10 transition hover:translate-y-[-1px] hover:bg-neutral-100"
          >
            Check Crowd Meter
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#first-timers"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900/60 px-5 py-3 font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:translate-y-[-1px] hover:bg-neutral-900/80"
          >
            <Users className="h-5 w-5" /> First time? Start here
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900/60 px-5 py-3 font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:translate-y-[-1px] hover:bg-neutral-900/80"
          >
            <Ticket className="h-5 w-5" /> Pricing
          </a>
        </motion.div>
      </div>
    </header>
  );
}
