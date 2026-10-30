import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Dar es Salaam, Tanzania\nP.O. Box 15227',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: 'Phone: +255 666 004 358\n WhatsApp: +255 723 763 911',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@zafrica.co.tz',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM',
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative -mt-16 py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="font-signature text-3xl font-normal leading-none text-accent-600">
            {t('Get In Touch')}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
            {t('Contact Zafrica')}
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            {t("Ready to discuss your needs? Reach out to our team and we'll guide you through the next steps.")}
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <div className="relative mx-auto max-w-xs rounded-xl bg-primary-900 px-6 py-5 text-center text-white shadow-lg">
              <Building2 size={22} className="mx-auto mb-2 text-accent-400" aria-hidden="true" />
              <h3 className="text-base font-semibold">{t('Zafrica Company Limited')}</h3>
              <p className="mt-1 text-sm text-primary-200">{t('Dar es Salaam, Tanzania')}</p>
            </div>

            <div className="relative pt-8 xl:pt-12">
              <svg
                className="pointer-events-none absolute inset-x-0 top-0 hidden h-12 w-full text-gray-300 xl:block"
                viewBox="0 0 1000 48"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M500 0V18H125V48M500 18H375V48M500 18H625V48M500 18H875V48"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-3">
                {details.map((detail, index) => (
                  <article
                    key={detail.label}
                    className={`reveal ${visible ? 'visible' : ''} min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md xl:px-3 xl:py-5`}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <detail.icon size={19} aria-hidden="true" />
                    </div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-primary-900">
                      {t(detail.label)}
                    </h3>
                    <p className="mt-2 whitespace-pre-line break-words text-xs leading-relaxed text-gray-600">
                      {t(detail.value)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} min-h-[480px] overflow-hidden rounded-xl border border-gray-100 shadow-sm`}>
            <iframe
              title={t('Map showing Dar es Salaam, Tanzania')}
              src="https://www.google.com/maps?q=Dar%20es%20Salaam%2C%20Tanzania&output=embed"
              className="h-full min-h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
