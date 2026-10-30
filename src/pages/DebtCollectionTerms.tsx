import TermsPageLayout from './TermsPageLayout';
import { useLanguage } from '@/lib/useLanguage';

const terms = [
  'We charge 5%–15% commission as an agent on the amount realized or recovered. The higher the value of the assignment, the lower the commission, and vice versa.',
  'The cost of advertisement (newspaper/radio) shall be charged.',
  'The client shall provide transport for their staff who will accompany our team during the exercise, especially for identification purposes.',
  'Other costs such as fees, fuel, and transport in general shall be on a negotiable basis.',
];

export default function DebtCollectionTerms() {
  const { t } = useLanguage();

  return (
    <TermsPageLayout title={t('Terms and Conditions for Debt Collection Services')}>
      <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent-700">
        {t('Debt Collection – Dar es Salaam & Upcountry Areas')}
      </p>
      <ol className="divide-y divide-gray-200 border-y border-gray-200">
        {terms.map((term, index) => (
          <li key={term} className="flex gap-5 py-6 sm:gap-7">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-white">
              {['i', 'ii', 'iii', 'iv'][index]}
            </span>
            <p className="pt-1 text-base leading-relaxed text-gray-700">{t(term)}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 border-l-4 border-accent-500 bg-accent-50 px-5 py-4 text-base font-semibold text-primary-900">
        {t('Investigation cost: 5% of the total liability.')}
      </p>
    </TermsPageLayout>
  );
}