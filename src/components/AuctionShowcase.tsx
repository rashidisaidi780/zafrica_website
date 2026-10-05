import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Gavel,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { rememberGalleryReturnPosition } from '@/lib/galleryNavigation';

const auctionImages = [
  {
    src: 'dist/assets/images/scania1.jpeg',
    fullSrc: 'dist/assets/images/scania1.jpeg',
    alt: 'Scania truck auction listing poster',
    label: 'Scania Truck Auction',
  },
  {
    src: 'dist/assets/images/scania2.jpeg',
    fullSrc: 'dist/assets/images/scania2.jpeg',
    alt: 'Scania truck auction listing poster',
    label: 'Scania Truck Auction',
  },
  {
    src: 'dist/assets/images/scania3.jpeg',
    fullSrc: 'dist/assets/images/scania3.jpeg',
    alt: 'Scania truck auction listing poster',
    label: 'Scania Truck Auction',
  },
  {
    src: 'dist/assets/images/scania4.jpeg',
    fullSrc: 'dist/assets/images/scania4.jpeg',
    alt: 'Scania truck auction listing poster',
    label: 'Scania Truck Auction',
  },
  {
    src: 'dist/assets/images/scania5.jpeg',
    fullSrc: 'dist/assets/images/scania5.jpeg',
    alt: 'Scania truck auction listing poster',
    label: 'Scania Truck Auction',
  },
];

const auctionServices = [
  'Public auctions of vehicles, land, houses, and other assets',
  'Court ordered auctions',
  'Voluntary liquidation sales',
  'Valuation and appraisal services',
];

export default function AuctionShowcase() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const imageDialogRef = useRef<HTMLDialogElement>(null);
  const activeImage = activeImageIndex === null ? null : auctionImages[activeImageIndex];

  useEffect(() => {
    const dialog = imageDialogRef.current;
    if (!dialog) return;

    if (activeImageIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (activeImageIndex === null && dialog.open) {
      dialog.close();
    }
  }, [activeImageIndex]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleViewerKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveImageIndex(null);
      } else if (event.key === 'ArrowRight') {
        moveImage(1);
      } else if (event.key === 'ArrowLeft') {
        moveImage(-1);
      }
    };

    window.addEventListener('keydown', handleViewerKeyDown);
    return () => window.removeEventListener('keydown', handleViewerKeyDown);
  }, [activeImageIndex]);

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const moveImage = (direction: number) => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + direction + auctionImages.length) % auctionImages.length;
    });
  };

  return (
    <section id="auctioneering" className="relative -mt-16 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {auctionImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden ${
                index === 0 ? 'col-span-2 aspect-[4/5] sm:aspect-[16/10]' : 'aspect-[4/3]'
              }`}
            >
              <button
                type="button"
                aria-label={`View full image: ${image.alt}`}
                onClick={() => setActiveImageIndex(index)}
                className="absolute inset-0 h-full w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
                  {image.label} · View image
                </span>
              </button>
            </figure>
          ))}
        </div>

        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-50 text-accent-700">
            <Gavel size={24} aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent-700">
            Zafrica Auctioneering
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-primary-900 md:text-4xl">
            Look here for new live auctions.
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600">
            From public and court-ordered auctions to voluntary liquidation
            sales, we support the auction process for a range of assets with
            valuation and appraisal services.
          </p>

          <ul className="mt-7 space-y-3">
            {auctionServices.map((service) => (
              <li key={service} className="flex gap-3 text-sm leading-relaxed text-primary-800">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button
              type="button"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Enquire about an auction
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <a
              href="/terms/auction-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-accent-700"
            >
              Auction terms
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link
              to="/gallery"
              onClick={rememberGalleryReturnPosition}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-accent-700"
            >
              View gallery
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <dialog
        ref={imageDialogRef}
        aria-label="Auction image viewer"
        onClose={() => setActiveImageIndex(null)}
        onCancel={(event) => {
          event.preventDefault();
          setActiveImageIndex(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveImageIndex(null);
        }}
        className="fixed m-0 h-full max-h-none w-full max-w-none border-0 bg-primary-900/95 p-5 text-white backdrop:bg-primary-900/90 sm:p-8"
      >
        {activeImage && (
          <div className="mx-auto flex h-full max-w-screen-2xl flex-col">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                  Auction gallery
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">{activeImage.label}</h2>
              </div>
              <button
                type="button"
                autoFocus
                aria-label="Close image viewer"
                onClick={() => setActiveImageIndex(null)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-400"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="relative my-5 flex min-h-0 flex-1 items-center justify-center">
              <img
                src={activeImage.fullSrc}
                alt={activeImage.alt}
                className="max-h-full max-w-full object-contain"
              />
              {auctionImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => moveImage(-1)}
                    className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
                  >
                    <ArrowLeft size={21} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => moveImage(1)}
                    className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
                  >
                    <ArrowRight size={21} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4 text-sm">
              <p className="text-primary-100">{activeImage.alt}</p>
              <span className="shrink-0 tabular-nums text-primary-300">
                {String(activeImageIndex! + 1).padStart(2, '0')} / {String(auctionImages.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}