import { useReveal } from '@/hooks/useReveal';
import { CheckCircle } from 'lucide-react';

const values = [
  'Integrity in every transaction',
  'Strict legal compliance',
  'Confidential and discreet',
  'Efficient and results-driven',
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="relative -mt-16 isolate overflow-hidden py-24 lg:py-32 bg-gray-50">
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=85"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.14] mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
              About Zafrica
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
              Professional services built on trust and results
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The Company Established on 31st July 2025 and is specializing in general auctioneering and debt
              collection services. We are committed to providing transparent, efficient, and results-driven solutions to our
              clients, including individuals, businesses, and institutions across Tanzania.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              and strict compliance with legal frameworks to ensure
              that both our clients and debtors are treated fairly and
              ethically throughout the process.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-800">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — visual card */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent-500/10 rounded-2xl" />
              <div className="relative bg-primary-900 rounded-2xl p-10 lg:p-12 shadow-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent-400">5+</span>
                    <span className="text-primary-200">Years of combined experience</span>
                  </div>
                  <div className="h-px bg-primary-700" />
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent-400">150+</span>
                    <span className="text-primary-200">Successful recovery cases</span>
                  </div>
                  <div className="h-px bg-primary-700" />
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent-400">100%</span>
                    <span className="text-primary-200">Legal compliance guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
