import TermsPageLayout from './TermsPageLayout';
import { useLanguage } from '@/lib/useLanguage';

const rates = [
  {
    number: '01',
    detail: 'Motorcycles and tricycles',
    dar: '150,000',
    upcountry: '250,000',
  },
  {
    number: '02',
    detail: 'Small vehicles (saloon)',
    dar: '250,000',
    upcountry: '500,000',
  },
  {
    number: '03',
    detail:
      'Other vehicles (trucks, trailers, lorries, pick-ups, Land Rovers, buses, etc.)',
    dar: '500,000',
    upcountry: '950,000',
  },
  {
    number: '04',
    detail: 'Storage charges per vehicle per day',
    dar: '4,000–20,000',
    upcountry: '5,000–40,000',
  },
];

export default function RepossessionTerms() {
  const { t } = useLanguage();

  return (
    <TermsPageLayout title={t('Terms and Conditions for Repossession Services')}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-primary-900 text-white">
            <tr>
              <th scope="col" className="w-20 px-4 py-4 text-sm font-semibold">{t('S/No.')}</th>
              <th scope="col" className="px-4 py-4 text-sm font-semibold">{t('Details')}</th>
              <th scope="col" className="w-44 px-4 py-4 text-sm font-semibold">
                {t('Within DSM Area (TZS)')}
              </th>
              <th scope="col" className="w-40 px-4 py-4 text-sm font-semibold">
                {t('Upcountry (TZS)')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {rates.map((rate) => (
              <tr key={rate.number} className="even:bg-gray-50">
                <th scope="row" className="px-4 py-4 font-semibold text-primary-800">
                  {rate.number}
                </th>
                <td className="px-4 py-4 leading-relaxed">{t(rate.detail)}</td>
                <td className="px-4 py-4 tabular-nums">{rate.dar}</td>
                <td className="px-4 py-4 tabular-nums">{rate.upcountry}</td>
              </tr>
            ))}
            <tr className="bg-accent-50">
              <th scope="row" className="px-4 py-4 font-semibold text-primary-800">05</th>
              <td className="px-4 py-4 font-semibold text-primary-900">{t('Additional costs')}</td>
              <td colSpan={2} className="px-4 py-4 leading-relaxed">
                {t('Fuel, drivers’ allowance, and maintenance shall be paid subject to submission of valid and reasonable claims.')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        {t('All amounts are shown in Tanzanian shillings (TZS).')}
      </p>
    </TermsPageLayout>
  );
}