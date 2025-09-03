import { CheckCircle2, Info, Shirt, Ticket, Users } from 'lucide-react';

export default function FirstTimers() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
          First time climbing?
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-300">
          Welcome! Whether you’re brand new or returning after a break, our staff will get you sorted. No experience required.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-lg ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
            <Ticket className="h-5 w-5" /> Step 1: Waiver
          </div>
          <p className="text-sm text-neutral-300">Save time at check-in. Complete a digital waiver before you arrive.</p>
          <a href="#" className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-neutral-100">Sign waiver</a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-lg ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
            <Users className="h-5 w-5" /> Step 2: Intro Session
          </div>
          <p className="text-sm text-neutral-300">New to climbing? Book a 60-minute intro. Learn basics, safety, and get your first sends.</p>
          <a href="#" className="mt-4 inline-block rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-neutral-700">Book intro</a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-lg ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
            <Shirt className="h-5 w-5" /> What to Bring
          </div>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Comfortable athletic wear</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Socks for rentals</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Water bottle & tape if you have it</li>
          </ul>
          <p className="mt-3 rounded-lg bg-neutral-800/50 p-3 text-xs text-neutral-300 ring-1 ring-white/10"><Info className="mr-1 inline h-3.5 w-3.5" /> Climbing shoes and harnesses are available to rent at the desk.</p>
        </div>
      </div>
    </section>
  );
}
