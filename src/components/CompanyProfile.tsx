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
import { useLanguage } from '@/lib/useLanguage';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'ZAfrica, we uphold honesty, fairness, and ethical conduct in all our Recovery, Auctions, and Investigations services, building lasting relationships founded on trust and accountability.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professionalism',
    description: 'We deliver our services with expertise, discipline, and dedication, maintaining high standards of quality and ensuring every assignment is handled with competence and respect.',
  },
  {
    icon: EyeOff,
    title: 'Confidentiality',
    description: 'We safeguard our clients’ sensitive information and handle every case with discretion, ensuring privacy, trust, and responsible information management throughout our operations.',
  },
  {
    icon: Gauge,
    title: 'Efficiency',
    description: 'We are committed to delivering timely, reliable, and results-driven solutions through effective planning, strategic execution, and careful management of every assignment.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparency',
    description: 'We promote open communication, honest reporting, and clear procedures in all our dealings, ensuring our clients remain informed and confident throughout every stage of our services.',
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
  const { t } = useLanguage();

  return (
    <div id="company-profile" className="relative -mt-16 scroll-mt-20">
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-signature text-3xl font-normal leading-none text-accent-600">
              {t('Our Core Values')}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              {t('The principles behind our work')}
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.title} className="border-t-2 border-accent-500 pt-5">
                <value.icon size={24} className="text-accent-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-primary-900">{t(value.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t(value.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fromColor="#ffffff" toColor="#0d1b2a" />
      <section id="why-zafrica" className="relative -mt-16 scroll-mt-20 bg-primary-900 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <span className="font-signature text-3xl font-normal leading-none text-accent-300">
              {t('Why Choose Zafrica')}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {t('Practical support for sensitive matters')}
            </h2>
            <p className="mt-5 leading-relaxed text-primary-200">
              {t('Zafrica we provide professional Recovery, Auctions, and Investigations services tailored to our clients’ needs. Through a client-focused approach, we prioritize protecting your interests, safeguarding assets, maintaining confidentiality, and delivering reliable results with integrity, efficiency, and professionalism.')}
            </p>
          </div>

          <div className="divide-y divide-primary-700">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <reason.icon size={24} className="mt-1 shrink-0 text-accent-300" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t(reason.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-200">{t(reason.description)}</p>
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
            <span className="font-signature text-3xl font-normal leading-none text-accent-600">
              {t('Who We Serve')}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              {t('Target clients')}
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              {t('Zafrica Company Limited serves a diverse range of clients, including financial institutions, corporate organizations, government agencies, businesses, and individuals seeking reliable Recovery, Auctions, and Investigations services. We provide tailored, professional solutions designed to protect our clients’ interests, recover assets, and achieve effective results.')}
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
                <span className="text-sm font-medium leading-relaxed text-primary-800">{t(client)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionWave fromColor="#f9fafb" toColor="#ffffff" />
      <section className="relative -mt-16 bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <span className="font-signature text-3xl font-normal leading-none text-accent-600">
              {t('Management & Team')}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
              {t('Experienced leadership, professional service')}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            {t('Our experienced leadership and dedicated team are committed to delivering reliable, efficient, and professional Recovery, Auctions, and Investigations services. We combine industry knowledge, strategic expertise, and ethical practices to protect our clients’ interests and achieve effective results.')}
          </p>
        </div>
      </section>
    </div>
  );
}