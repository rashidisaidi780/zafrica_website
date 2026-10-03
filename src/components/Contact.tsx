import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Business Park Drive,\nJohannesburg, South Africa',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 (0) 11 234 5678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@zafrica.co.za',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM',
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="relative -mt-16 py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} text-center max-w-2xl mx-auto mb-16`}
        >
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
            Contact Zafrica
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Ready to discuss your needs? Reach out to our team and we'll guide
            you through the next steps.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`reveal ${visible ? 'visible' : ''} bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-accent-50 rounded-xl mb-5">
                <detail.icon size={24} className="text-accent-600" />
              </div>
              <h3 className="text-sm font-semibold text-primary-900 uppercase tracking-wide mb-2">
                {detail.label}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
