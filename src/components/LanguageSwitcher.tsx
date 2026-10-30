import { useLanguage } from '@/lib/useLanguage';

export default function LanguageSwitcher({ onLight = false }: { onLight?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <label className="sr-only" htmlFor={onLight ? 'page-language' : 'header-language'}>
        {t('Language')}
      </label>
      <select
        id={onLight ? 'page-language' : 'header-language'}
        value={language}
        onChange={(event) => setLanguage(event.target.value === 'sw' ? 'sw' : 'en')}
        className={
          onLight
            ? 'rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-primary-800 outline-none transition-colors hover:border-gray-400 focus:border-accent-500'
            : 'rounded-md border border-primary-600 bg-primary-900/40 px-2 py-2 text-sm font-medium text-primary-100 outline-none transition-colors hover:border-primary-400 focus:border-accent-400'
        }
      >
        <option className="text-primary-900" value="en">{t('English')}</option>
        <option className="text-primary-900" value="sw">{t('Swahili')}</option>
      </select>
    </>
  );
}
