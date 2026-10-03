import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The process was explained clearly, and we received timely updates throughout the engagement.',
    name: 'Amara N.',
    client: 'Financial institution client',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    quote:
      'The auction process felt organized from the initial valuation through to the sale.',
    name: 'David M.',
    client: 'Property auction client',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    quote:
      'Our matter was handled discreetly, with professionalism at every stage.',
    name: 'Leila K.',
    client: 'Corporate client',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    quote:
      'The repayment options were discussed respectfully, and the next steps were clear.',
    name: 'Peter S.',
    client: 'Debt recovery client',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="relative -mt-16 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Client Feedback
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
            What clients say
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            Sample testimonial copy. Replace with approved client feedback before publishing.
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
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-4">
                <img
                  src={testimonial.image}
                  alt={`Illustrative sample portrait for ${testimonial.name}`}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-primary-900">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs leading-relaxed text-primary-600">
                    {testimonial.client} · Sample profile
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