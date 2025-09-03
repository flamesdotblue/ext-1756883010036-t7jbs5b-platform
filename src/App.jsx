import Hero from './components/Hero';
import CrowdMeter from './components/CrowdMeter';
import FirstTimers from './components/FirstTimers';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Hero />
      <main>
        <section id="crowd">
          <CrowdMeter />
        </section>
        <section id="first-timers">
          <FirstTimers />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} North Shore Climbing Co. • Vancouver, BC
      </footer>
    </div>
  );
}

export default App;
