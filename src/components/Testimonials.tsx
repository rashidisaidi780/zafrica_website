import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/useLanguage';

const testimonials = [
  {
    quote:
      'The process was explained clearly, and we received timely updates throughout the engagement.',
    name: 'Amara N.',
    client: 'Financial institution client',
  },
  {
    quote:
      'The auction process felt organized from the initial valuation through to the sale.',
    name: 'David M.',
    client: 'Property auction client',
  },
  {
    quote:
      'Our matter was handled discreetly, with professionalism at every stage.',
    name: 'Leila K.',
    client: 'Corporate client',
  },
  {
    quote:
      'The repayment options were discussed respectfully, and the next steps were clear.',
    name: 'Harith S.',
    client: 'Debt recovery client',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative -mt-16 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-signature text-3xl font-normal leading-none text-accent-600">
            {t('Client Feedback')}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
            {t('What clients say')}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            {t('Sample testimonial copy. Replace with approved client feedback before publishing.')}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.client}
              className="flex h-full flex-col border-t-2 border-accent-500 bg-gray-50 p-6"
            >
              <Quote size={22} className="text-accent-600" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm italic leading-relaxed text-primary-800">
                “{t(testimonial.quote)}”
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-200 pt-4">
                <span>
                  <span className="block text-sm font-semibold text-primary-900">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs leading-relaxed text-primary-600">
                    {t(testimonial.client)}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}