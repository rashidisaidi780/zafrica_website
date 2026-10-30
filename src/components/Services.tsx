import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, Gavel, Landmark } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';

const services = [
  {
    icon: Gavel,
    title: 'Auctioneering Services',
    termsPath: '/terms/auction-services',
    description:
      'End-to-end auction support for public, court-ordered, and voluntary asset sales.',
    offerings: [
      {
        title: 'Public asset auctions',
        image: 'https://images.pexels.com/photos/31066018/pexels-photo-31066018.jpeg',
        imageAlt: 'Vehicle offered for public auction',
        description:
          'We provides professional public auction services for vehicles, land, houses, and other assets. We facilitate transparent and well-organized auction processes, connecting sellers with potential buyers while promoting fairness, accountability, and the best possible value for our clients.',
      },
      {
        title: 'Court-ordered auctions',
        image: 'https://images.pexels.com/photos/6950140/pexels-photo-6950140.jpeg',
        imageAlt: 'Legal documents on a desk',
        description:
          'We facilitates court-ordered auctions in accordance with applicable legal procedures, ensuring transparency, fairness, and professionalism throughout the process. We support the lawful sale of assets pursuant to court orders while protecting the interests of relevant parties and promoting accountability at every stage.',
      },
      {
        title: 'Voluntary liquidation sales',
        image: 'https://images.pexels.com/photos/5622928/pexels-photo-5622928.jpeg',
        imageAlt: 'Commercial office buildings',
        description:
          'We provides professional voluntary liquidation auction services to businesses and individuals seeking to sell assets efficiently. We facilitate transparent and well-organized sales of vehicles, machinery, equipment, and other assets, helping clients maximize value while ensuring fairness and professionalism throughout the process.',
      },
      {
        title: 'Valuation and appraisal',
        image: 'https://images.pexels.com/photos/37121447/pexels-photo-37121447.jpeg',
        imageAlt: 'House keys and property documents',
        description:
          'We provides professional valuation and appraisal services to help clients determine the market value of vehicles, properties, machinery, and other assets. We apply careful assessment methods and industry knowledge to deliver reliable valuations that support informed decisions in asset recovery, auctions, and financial transactions.',
      },
    ],
  },
  {
    icon: Landmark,
    title: 'Debt Collection Services',
    termsPath: '/terms/debt-collection-services',
    description:
      'Structured, client-focused recovery solutions from early follow-up through legal enforcement support.',
    offerings: [
      {
        title: 'Pre-legal debt recovery',
        image: 'https://images.pexels.com/photos/7926653/pexels-photo-7926653.jpeg',
        imageAlt: 'Financial documents being reviewed at a desk',
        description:
          'We provides professional pre-legal debt recovery services to help clients recover outstanding debts before proceeding to legal action. Through structured follow-ups, effective communication, and negotiated payment arrangements, we aim to achieve timely recoveries while maintaining professionalism, confidentiality, and positive business relationships.',
      },
      {
        title: 'Corporate and individual follow-up',
        image: 'https://images.pexels.com/photos/9491008/pexels-photo-9491008.jpeg',
        imageAlt: 'Business professionals meeting around a table',
        description:
          'We provides professional follow-up services for businesses and individuals to support debt recovery, payment commitments, and outstanding obligations. We ensure consistent communication, timely follow-ups, and a professional approach to achieving effective results while protecting our clients’ interests and maintaining confidentiality.',
      },
      {
        title: 'Negotiated repayment solutions',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Calculator and financial paperwork',
        description:
          'We facilitates fair and practical repayment arrangements between creditors and debtors. Through professional negotiation and effective communication, we help establish mutually acceptable payment plans that support debt recovery, protect our clients’ interests, and encourage timely settlement of outstanding obligations.',
      },
      {
        title: 'Repossession of secured assets',
        image: 'https://images.pexels.com/photos/29799518/pexels-photo-29799518.jpeg',
        imageAlt: 'Car being prepared for repossession',
        description:
          'We provides professional support in the repossession of secured assets in accordance with applicable laws and contractual obligations. We assist clients in recovering assets linked to outstanding debts while ensuring that every process is handled with professionalism, transparency, and respect for the rights of all parties involved.',
        termsPath: '/terms/repossession-services',
      },
      {
        title: 'Legal enforcement support',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Legal books and documents',
        description:
          'We provides professional support in legal enforcement processes related to debt recovery and asset realization. We work with clients and relevant legal professionals to facilitate the enforcement of lawful claims, ensuring that all actions are handled in accordance with applicable laws, with professionalism, transparency, and accountability.',
      },
    ],
  },
];

export default function Services() {
  const { t } = useLanguage();
  const { ref, visible } = useReveal();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeOfferingIndex, setActiveOfferingIndex] = useState(0);
  const activeCategory = services[activeCategoryIndex];
  const activeOffering = activeCategory.offerings[activeOfferingIndex];
  const activeTermsPath =
    activeOffering.termsPath ??
    (activeCategoryIndex === 0 ? activeCategory.termsPath : undefined);

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="font-signature text-3xl font-normal leading-none text-accent-600">
            {t('What We Do')}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
            {t('Comprehensive professional services')}
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            {t('Professional auction and debt recovery solutions, tailored to each client and assignment.')}
          </p>
        </div>

        <div className="mx-auto grid max-w-screen-xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="grid grid-cols-2 rounded-lg bg-gray-100 p-1" role="tablist" aria-label={t('Service categories')}>
              {services.map((service, index) => (
                <button
                  key={service.title}
                  id={`service-category-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCategoryIndex === index}
                  aria-controls="service-offerings"
                  onClick={() => {
                    setActiveCategoryIndex(index);
                    setActiveOfferingIndex(0);
                  }}
                  className={`min-h-12 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    activeCategoryIndex === index
                      ? 'bg-white text-primary-900 shadow-sm'
                      : 'text-gray-600 hover:text-primary-900'
                  }`}
                >
                  {t(service.title)}
                </button>
              ))}
            </div>

            <div className="mt-7">
              <p className="text-sm leading-relaxed text-gray-600">
                {t(activeCategory.description)}
              </p>
              <div
                id="service-offerings"
                role="tabpanel"
                aria-labelledby={`service-category-${activeCategoryIndex}`}
                className="mt-5 divide-y divide-gray-200 border-y border-gray-200"
              >
                {activeCategory.offerings.map((offering, index) => (
                  <button
                    key={offering.title}
                    type="button"
                    aria-pressed={activeOfferingIndex === index}
                    onClick={() => setActiveOfferingIndex(index)}
                    className={`group flex w-full items-center gap-4 py-4 text-left transition-colors ${
                      activeOfferingIndex === index
                        ? 'text-accent-700'
                        : 'text-primary-800 hover:text-accent-700'
                    }`}
                  >
                    <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-accent-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-sm font-semibold leading-relaxed">
                      {t(offering.title)}
                    </span>
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform ${
                        activeOfferingIndex === index
                          ? 'translate-x-1'
                          : 'group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <article
            key={`${activeCategory.title}-${activeOffering.title}`}
            aria-live="polite"
            className="animate-fade-in overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={activeOffering.image}
                alt={t(activeOffering.imageAlt)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/75 via-primary-900/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3 text-white">
                <activeCategory.icon size={22} aria-hidden="true" />
                <span className="text-sm font-semibold">{t(activeCategory.title)}</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                {t('Service')} {String(activeOfferingIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-snug text-primary-900">
                {t(activeOffering.title)}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                {t(activeOffering.description)}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-5">
                {activeTermsPath && (
                  <a
                    href={activeTermsPath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-700 hover:text-accent-900"
                  >
                    {t('View service terms')}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900"
                >
                  {t('Discuss this service')}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-12 flex max-w-screen-xl flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary-900">
              {t('Need a different service?')}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-600">
              {t('We tailor our approach to your specific needs. Reach out to discuss your requirements.')}
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="shrink-0 rounded-md bg-accent-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-600"
          >
            {t('Contact Us')}
          </button>
        </div>
      </div>
    </section>
  );
}
