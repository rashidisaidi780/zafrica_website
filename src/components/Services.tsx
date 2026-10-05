import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, Gavel, Landmark } from 'lucide-react';

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
          'Public auctions for vehicles, land, houses, and other assets.',
      },
      {
        title: 'Court-ordered auctions',
        image: 'https://images.pexels.com/photos/6950140/pexels-photo-6950140.jpeg',
        imageAlt: 'Legal documents on a desk',
        description:
          'Auction services for assets being sold under a court order.',
      },
      {
        title: 'Voluntary liquidation sales',
        image: 'https://images.pexels.com/photos/5622928/pexels-photo-5622928.jpeg',
        imageAlt: 'Commercial office buildings',
        description:
          'Organized sales of assets as part of a voluntary liquidation.',
      },
      {
        title: 'Valuation and appraisal',
        image: 'https://images.pexels.com/photos/37121447/pexels-photo-37121447.jpeg',
        imageAlt: 'House keys and property documents',
        description:
          'Valuation and appraisal services to support the sale of assets.',
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
        image: '',
        imageAlt: 'Financial documents being reviewed at a desk',
        description:
          'Follow-up and recovery support before a matter proceeds to legal action.',
      },
      {
        title: 'Corporate and individual follow-up',
        image: 'https://images.pexels.com/photos/9491008/pexels-photo-9491008.jpeg',
        imageAlt: 'Business professionals meeting around a table',
        description:
          'Debt follow-up services for both corporate and individual accounts.',
      },
      {
        title: 'Negotiated repayment solutions',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Calculator and financial paperwork',
        description:
          'Support to help clients and debtors negotiate repayment arrangements.',
      },
      {
        title: 'Repossession of secured assets',
        image: 'https://images.pexels.com/photos/29799518/pexels-photo-29799518.jpeg',
        imageAlt: 'Car being prepared for repossession',
        description:
          'Repossession support for assets pledged as security, handled in line with applicable requirements.',
        termsPath: '/terms/repossession-services',
      },
      {
        title: 'Legal enforcement support',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Legal books and documents',
        description:
          'Enforcement support carried out in collaboration with lawyers.',
      },
    ],
  },
];

export default function Services() {
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
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
            Comprehensive professional services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Professional auction and debt recovery solutions, tailored to each
            client and assignment.
          </p>
        </div>

        <div className="mx-auto grid max-w-screen-xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="grid grid-cols-2 rounded-lg bg-gray-100 p-1" role="tablist" aria-label="Service categories">
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
                  {service.title}
                </button>
              ))}
            </div>

            <div className="mt-7">
              <p className="text-sm leading-relaxed text-gray-600">
                {activeCategory.description}
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
                      {offering.title}
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
                alt={activeOffering.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/75 via-primary-900/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3 text-white">
                <activeCategory.icon size={22} aria-hidden="true" />
                <span className="text-sm font-semibold">{activeCategory.title}</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">
                Service {String(activeOfferingIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-snug text-primary-900">
                {activeOffering.title}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                {activeOffering.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-5">
                {activeTermsPath && (
                  <a
                    href={activeTermsPath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-700 hover:text-accent-900"
                  >
                    View service terms
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900"
                >
                  Discuss this service
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-12 flex max-w-screen-xl flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary-900">
              Need a different service?
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-600">
              We tailor our approach to your specific needs. Reach out to
              discuss your requirements.
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="shrink-0 rounded-md bg-accent-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-600"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
