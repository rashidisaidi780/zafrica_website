import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rememberGalleryReturnPosition } from '@/lib/galleryNavigation';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Auctioneering Services',
  'Debt Collection Services',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative -mt-16 bg-primary-900 text-primary-200">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand + social */}
          <div>
            <img
              src="/assets/images/zafrica_logo_2.png"
              alt="Zafrica"
              className="h-12 w-40 object-contain object-left"
            />
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Professional debt collection, property auctioning, asset
              repossession, eviction services, and private investigations.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/zafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Zafrica on Facebook"
                className="w-11 h-11 flex items-center justify-center bg-primary-800 rounded-lg text-primary-200 hover:bg-accent-500 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/_zafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Zafrica on Instagram"
                className="w-11 h-11 flex items-center justify-center bg-primary-800 rounded-lg text-primary-200 hover:bg-accent-500 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-primary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/gallery"
                  onClick={rememberGalleryReturnPosition}
                  className="text-sm text-primary-300 transition-colors duration-200 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-sm text-primary-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Service Terms
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/terms/auction-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  Auction services
                </a>
              </li>
              <li>
                <a href="/terms/debt-collection-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  Debt collection services
                </a>
              </li>
              <li>
                <a href="/terms/repossession-services" className="text-sm text-primary-300 hover:text-white transition-colors duration-200">
                  Repossession services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} Zafrica. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-primary-300 hover:text-white transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
