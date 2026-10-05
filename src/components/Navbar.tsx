import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rememberGalleryReturnPosition } from '@/lib/galleryNavigation';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          aria-label="Zafrica home"
          className="flex h-12 w-36 items-center"
        >
          <img
            src="/assets/images/zafrica_logo_2.png"
            alt="Zafrica"
            className="h-full w-full object-contain object-left"
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-primary-100 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/gallery"
              onClick={rememberGalleryReturnPosition}
              className="text-sm font-medium text-primary-100 transition-colors duration-200 hover:text-white"
            >
              Gallery
            </Link>
          </li>
          <li className="relative">
            <button
              type="button"
              aria-expanded={termsOpen}
              aria-haspopup="menu"
              onClick={() => setTermsOpen(!termsOpen)}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-100 transition-colors duration-200 hover:text-white"
            >
              Terms &amp; Conditions
              <ChevronDown size={15} aria-hidden="true" />
            </button>
            {termsOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-3 w-72 rounded-md border border-gray-100 bg-white p-2 shadow-xl"
              >
                <Link
                  to="/terms/auction-services"
                  role="menuitem"
                  onClick={() => setTermsOpen(false)}
                  className="block rounded px-3 py-2.5 text-sm font-medium text-primary-800 transition-colors hover:bg-gray-50 hover:text-accent-700"
                >
                  Auction service terms
                </Link>
                <Link
                  to="/terms/debt-collection-services"
                  role="menuitem"
                  onClick={() => setTermsOpen(false)}
                  className="block rounded px-3 py-2.5 text-sm font-medium text-primary-800 transition-colors hover:bg-gray-50 hover:text-accent-700"
                >
                  Debt collection terms
                </Link>
                <Link
                  to="/terms/repossession-services"
                  role="menuitem"
                  onClick={() => setTermsOpen(false)}
                  className="block rounded px-3 py-2.5 text-sm font-medium text-primary-800 transition-colors hover:bg-gray-50 hover:text-accent-700"
                >
                  Repossession service terms
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* CTA desktop */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200"
        >
          Get in Touch
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-900/98 backdrop-blur-md border-t border-primary-700 animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2 text-base font-medium text-primary-100 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/gallery"
                onClick={() => {
                  rememberGalleryReturnPosition();
                  setMenuOpen(false);
                }}
                className="block py-2 text-base font-medium text-primary-100 transition-colors hover:text-white"
              >
                Gallery
              </Link>
            </li>
            <li className="border-t border-primary-700 pt-3">
              <p className="mb-2 text-xs font-semibold uppercase text-primary-300">
                Terms &amp; Conditions
              </p>
              <Link
                to="/terms/auction-services"
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-medium text-primary-100 hover:text-white"
              >
                Auction service terms
              </Link>
              <Link
                to="/terms/debt-collection-services"
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-medium text-primary-100 hover:text-white"
              >
                Debt collection terms
              </Link>
              <Link
                to="/terms/repossession-services"
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-medium text-primary-100 hover:text-white"
              >
                Repossession service terms
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-center px-5 py-3 text-base font-semibold bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
