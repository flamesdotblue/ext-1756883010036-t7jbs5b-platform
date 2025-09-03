import { Check } from 'lucide-react';

function Tier({ name, price, period, features, highlight }) {
  return (
    <div className={`relative rounded-3xl p-6 shadow-xl ring-1 ${highlight ? 'bg-white text-neutral-900 ring-white/60' : 'bg-neutral-900/50 text-white ring-white/10'} border border-white/10`}>
      {highlight && (
        <div className="absolute -top-3 right-4 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow ring-1 ring-black/20">
          Best value
        </div>
      )}
      <h3 className={`text-xl font-extrabold ${highlight ? 'text-neutral-900' : 'text-white'}`}>{name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <div className={`text-4xl font-extrabold ${highlight ? 'text-neutral-900' : 'text-white'}`}>{price}</div>
        <div className={`pb-1 text-sm ${highlight ? 'text-neutral-700' : 'text-neutral-300'}`}>/{period}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className={`inline-flex items-center gap-2 ${highlight ? 'text-neutral-800' : 'text-neutral-200'}`}>
            <Check className={`h-4 w-4 ${highlight ? 'text-emerald-600' : 'text-emerald-400'}`} /> {f}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold shadow ${highlight ? 'bg-neutral-900 text-white hover:bg-black' : 'bg-white text-neutral-900 hover:bg-neutral-100'}`}>
        Get started
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
          Pricing
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-300">Flexible options for first-timers, casual sessions, and committed crushers.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Tier
          name="Day Pass"
          price="$24"
          period="visit"
          features={["All-day access", "Includes fitness & stretch zones", "Rental gear +$8"]}
        />
        <Tier
          name="10-Visit Pack"
          price="$210"
          period="pack"
          features={["Shareable between 2 people", "Expires in 12 months", "Member perks on retail"]}
          highlight
        />
        <Tier
          name="Membership"
          price="$89"
          period="month"
          features={["Unlimited climbing", "1 guest pass / month", "10% off classes & retail"]}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
        Rentals: Shoes $6 • Harness $4 • Chalk $2. Student & youth discounts available with ID.
      </div>
    </section>
  );
}
