import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/lib/useLanguage';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import PageBackground from '@/components/PageBackground';

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const featuredImages: GalleryImage[] = [
  {
    src: 'dist/assets/images/zafrica_logo_2.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
  {
    src: '/assets/images/newpost1.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
  {
    src: '/assets/images/newpost1.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
  {
    src: '/assets/images/newpost1.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
  {
    src: '/assets/images/newpost1.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
  {
    src: '/assets/images/newpost1.png',
    alt: 'Zafrica auction listing poster',
    label: 'Auction Listing',
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const galleryImages = featuredImages;

  return (
    <div className="relative isolate min-h-screen bg-gray-50">
      <PageBackground />
      <header className="relative z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" aria-label={t('Zafrica home')} className="flex h-12 w-36 items-center">
            <img
              src="/assets/images/zafrica_logo_1.png"
              alt="Zafrica"
              className="h-full w-full object-contain object-left"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher onLight />
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate('/');
                }
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {t('Back')}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-screen-2xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              {t('Zafrica Auctioneering')}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">
              {t('Auction gallery')}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm text-gray-500">
              {galleryImages.length} {t(galleryImages.length === 1 ? 'image' : 'images')}
            </p>
          </div>
        </div>

        <div
          className={
            galleryImages.length === 1
              ? 'mx-auto mt-8 grid w-full max-w-xs grid-cols-1 gap-y-10'
              : 'mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5'
          }
        >
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={image.src}
                  alt={t(image.alt)}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm font-semibold text-primary-800">
                <span className="min-w-0 break-words">{t(image.label)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}