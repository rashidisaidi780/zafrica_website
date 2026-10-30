import TermsPageLayout from './TermsPageLayout';
import { useLanguage } from '@/lib/useLanguage';

const terms = [
  'A 10% auction fee is charged on the auction value of items, including land, houses, motor vehicles, motorcycles, and other items.',
  'Advertising costs are charged on a negotiable basis.',
  'The client shall provide transport, if required, to move or remove assets or items from one location to another.',
];

export default function AuctionTerms() {
  const { t } = useLanguage();

  return (
    <TermsPageLayout title={t('Terms and Conditions for Auction Services')}>
      <ol className="divide-y divide-gray-200 border-y border-gray-200">
        {terms.map((term, index) => (
          <li key={term} className="flex gap-5 py-6 sm:gap-7">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="pt-1 text-base leading-relaxed text-gray-700">{t(term)}</p>
          </li>
        ))}
      </ol>
    </TermsPageLayout>
  );
}