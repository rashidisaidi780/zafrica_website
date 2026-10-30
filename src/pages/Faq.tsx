import { ArrowLeft, ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/useLanguage';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import PageBackground from '@/components/PageBackground';

const faqs = [
  {
    question: 'What services does Zafrica provide?',
    answer:
      'We provide professional auctioneering services, debt collection, asset repossession, eviction support, and private investigation assistance for both commercial and individual clients.',
  },
  {
    question: 'Do you offer services to both businesses and private clients?',
    answer:
      'Yes. We work with businesses, financial institutions, property owners, and private clients who need reliable recovery or enforcement services in a compliant and professional manner.',
  },
  {
    question: 'How do I request a consultation or quote?',
    answer:
      'You can contact our team through the enquiry form on the main page or reach out directly by phone or email. We will review your situation and advise the most suitable next steps.',
  },
  {
    question: 'Are your terms and processes legally documented?',
    answer:
      'Yes. We operate with clear service terms and documentation for each engagement. The relevant service terms can be reviewed from the website before any formal agreement is entered into.',
  },
  {
    question: 'Can I view prior auction or gallery details before engaging your services?',
    answer:
      'Absolutely. Our gallery section showcases available listings and relevant property information, helping you understand the type of inventory and processes involved before making contact.',
  },
];

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen bg-gray-50 text-primary-900">
      <PageBackground />
      <header className="relative z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" aria-label={t('Zafrica home')} className="flex h-12 w-36 items-center">
            <img
              src="/assets/images/zafrica_logo_1.png"
              alt="Zafrica"
              className="h-full w-full object-contain object-left"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher onLight />
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {t('Back to home')}
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-14 sm:py-20 lg:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
          <HelpCircle size={16} aria-hidden="true" />
          {t('FAQ')}
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">
          {t('Frequently asked questions')}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {t('Everything you need to know before engaging Zafrica for auctioning, debt collection, repossession, or related support services.')}
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-primary-900 marker:hidden">
                <span>{t(item.question)}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="border-t border-gray-200 px-6 py-5 text-base leading-7 text-gray-700">
                {t(item.answer)}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-primary-900 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold">{t('Still need help?')}</h2>
          <p className="mt-3 max-w-2xl text-primary-200">
            {t('Our team is ready to answer your questions and advise on the best next step for your situation.')}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              {t('Contact us')}
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              {t('View gallery')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
