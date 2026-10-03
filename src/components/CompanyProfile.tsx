import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  EyeOff,
  Gauge,
  HandCoins,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import SectionWave from '@/components/SectionWave';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Upholding honesty and fairness in all dealings.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professionalism',
    description: 'Providing expert services with high ethical standards.',
  },
  {
    icon: EyeOff,
    title: 'Confidentiality',
    description: 'Ensuring client information is secure at all times.',
  },
  {
    icon: Gauge,
    title: 'Efficiency',
    description: 'Delivering timely and effective solutions.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparency',
    description: 'Operating openly with clear communication and accountability.',
  },
];

const reasons = [
  {
    icon: UsersRound,
    title: 'Experienced and professional team',
    description:
      'Our team brings professional experience in finance, debt management, and auctioneering.',
  },
  {
    icon: Scale,
    title: 'Compliance with Tanzanian laws and regulations',
    description:
      'We carry out our services with due regard for applicable Tanzanian laws and regulations.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical and respectful handling of all debtors',
    description:
      'We approach every engagement with fairness, discretion, and respect for all parties.',
  },
  {
    icon: HandCoins,
    title: 'Proven strategies to maximize recovery rates',
    description:
      'Structured follow-up, negotiated repayment solutions, and enforcement support help us pursue effective recoveries.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent reporting and accountability',
    description:
      'We value clear communication and accountability throughout each assignment.',
  },
];

const targetClients = [
  'Commercial banks and financial institutions',
  'Microfinance institutions (MFIs)',
  'Savings and Credit Cooperative Societies (SACCOS)',
  'Corporate organizations',
  'Government agencies',
  'Individuals with auction or debt collection needs',
];

export default function CompanyProfile() {
  return (
    <div id="company-profile" className="relative -mt-16 scroll-mt-20">
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Our Core Values
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              The principles behind our work
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.title} className="border-t-2 border-accent-500 pt-5">
                <value.icon size={24} className="text-accent-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-primary-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fromColor="#ffffff" toColor="#0d1b2a" />
      <section id="why-zafrica" className="relative -mt-16 scroll-mt-20 bg-primary-900 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Why Choose Zafrica
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Practical support for sensitive matters
            </h2>
            <p className="mt-5 leading-relaxed text-primary-200">
              We combine a wide range of professional services with a careful,
              client focused approach to help protect your interests.
            </p>
          </div>

          <div className="divide-y divide-primary-700">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <reason.icon size={24} className="mt-1 shrink-0 text-accent-300" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-200">{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fromColor="#0d1b2a" toColor="#f9fafb" />
      <section className="relative -mt-16 bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Who We Serve
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              Target clients
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Zafrica works with institutions, organizations, agencies, and
              individuals seeking professional auction or debt collection support.
            </p>
          </div>

          <ul className="grid content-start gap-x-10 sm:grid-cols-2">
            {targetClients.map((client, index) => (
              <li key={client} className="flex gap-3 border-b border-gray-200 py-4">
                {index < 3 ? (
                  <Landmark size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden="true" />
                ) : index === 3 || index === 4 ? (
                  <Building2 size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden="true" />
                ) : (
                  <UsersRound size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden="true" />
                )}
                <span className="text-sm font-medium leading-relaxed text-primary-800">{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionWave fromColor="#f9fafb" toColor="#ffffff" />
      <section className="relative -mt-16 bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Management &amp; Team
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              Experienced leadership, professional service
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            Our leadership team consists of professionals with vast experience in
            finance, debt management, and auctioneering. The team is dedicated to
            ensuring that Zafrica Company Limited delivers reliable, compliant,
            and professional services.
          </p>
        </div>
      </section>
    </div>
  );
}