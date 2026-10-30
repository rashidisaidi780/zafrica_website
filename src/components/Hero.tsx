import { ArrowDown, Shield, Scale, Gavel } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary-900 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85"
        alt={t('Zafrica service background')}
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900/45" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-800/50 border border-primary-700 rounded-full animate-fade-in-down">
            <Shield size={16} className="text-accent-400" />
            <span className="text-sm text-primary-100 font-medium">
              {t('Trusted Professional Services')}
            </span>
          </div>

          <h1 className="w-full font-signature text-[clamp(2rem,8vw,8rem)] font-normal leading-[1.05] text-accent-400 animate-fade-in-up">
            <span className="block whitespace-nowrap">{t('Recovery, Auctions &')}</span>
            <span className="block">{t('Investigations')}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-primary-200 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            {t('ZAfrica Company Limited is a duly incorporated professional firm operating under the laws of the United Republic of Tanzania, with Certificate of Incorporation No. 187412137. We specialize in Recovery, Auctions, and Investigations, delivering reliable, transparent, and results driven solutions tailored to meet our clients’ needs.')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up justify-center" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/25"
            >
              {t('Our Services')}
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 border border-primary-600 text-white font-semibold rounded-md hover:bg-primary-800 transition-all duration-200"
            >
              {t('Contact Us')}
            </button>
          </div>

          {/* Mini stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg w-full animate-fade-in-up text-center" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {[
              { icon: Scale, label: 'Legally Compliant', value: '100%' },
              { icon: Gavel, label: 'Services Offered', value: '9+' },
              { icon: Shield, label: 'Professional', value: 'Team' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <stat.icon size={20} className="text-accent-400" />
                <span className="text-2xl font-bold text-white">{t(stat.value)}</span>
                <span className="text-xs text-primary-300">{t(stat.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-primary-400" />
      </div>
    </section>
  );
}
