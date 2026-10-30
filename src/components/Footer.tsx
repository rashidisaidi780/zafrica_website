import { Facebook, Instagram, ArrowUp, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rememberGalleryReturnPosition } from '@/lib/galleryNavigation';
import { useLanguage } from '@/lib/useLanguage';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'Auctioneering Services', href: '#services' },
  { label: 'Debt Collection Services', href: '#services' },
  { label: 'Repossession Services', href: '/terms/repossession-services' },
];

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative -mt-16 bg-primary-900 text-primary-200">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand + social */}
          <div>
            <img
              src="/assets/images/zafrica_logo_2.png"
              alt="Zafrica"
              className="h-12 w-40 object-contain object-left"
            />
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              {t('Professional debt collection, property auctioning, asset repossession, eviction services, and private investigations.')}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/zafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('Visit Zafrica on Facebook')}
                className="w-11 h-11 flex items-center justify-center bg-primary-800 rounded-lg text-primary-200 hover:bg-accent-500 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/_zafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('Visit Zafrica on Instagram')}
                className="w-11 h-11 flex items-center justify-center bg-primary-800 rounded-lg text-primary-200 hover:bg-accent-500 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t('Quick Links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-primary-300 hover:text-white transition-colors duration-200"
                  >
                    {t(link.label)}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-primary-300 transition-colors duration-200 hover:text-white"
                >
                  {t('FAQ')}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={rememberGalleryReturnPosition}
                  className="text-sm text-primary-300 transition-colors duration-200 hover:text-white"
                >
                  {t('Gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t('Our Services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  {service.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(service.href)}
                      className="text-sm text-primary-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {t(service.label)}
                    </button>
                  ) : (
                    <Link
                      to={service.href}
                      className="text-sm text-primary-300 hover:text-white transition-colors duration-200 text-left block"
                    >
                      {t(service.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t('Service Terms')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/terms/auction-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  {t('Auction services')}
                </a>
              </li>
              <li>
                <a href="/terms/debt-collection-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  {t('Debt collection services')}
                </a>
              </li>
              <li>
                <a href="/terms/repossession-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  {t('Repossession services')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              {t('Contact Details')}
            </h4>
            <ul className="space-y-4 text-sm leading-relaxed text-primary-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dar%20es%20Salaam%2C%20Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {t('Dar es Salaam, Tanzania')}
                  <br />
                  {t('P.O. Box 15227')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+255723763911" className="transition-colors hover:text-white">
                    +255 666 004 358
                  </a>
                  <a
                    href="https://wa.me/255723763911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {t('WhatsApp')}: +255 723 763 911
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                <a href="mailto:info@zafrica.co.tz" className="break-all transition-colors hover:text-white">
                  info@zafrica.co.tz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-accent-400" aria-hidden="true" />
                <span>
                  {t('Mon – Fri: 8:00 AM – 5:00 PM')}
                  <br />
                  {t('Sat: 9:00 AM – 1:00 PM')}
                </span>
              </li>
            </ul>
            <p className="mt-5 border-t border-primary-800 pt-4 text-xs leading-relaxed text-primary-400">
              {t('Registered in Tanzania')}
              <br />
              {t('Certificate of Incorporation No.')} 187412137
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} Zafrica. {t('All rights reserved.')}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-primary-300 hover:text-white transition-colors duration-200"
          >
            {t('Back to top')}
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
