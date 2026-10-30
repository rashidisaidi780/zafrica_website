import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gavel,
  TrendingUp,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { rememberGalleryReturnPosition } from '@/lib/galleryNavigation';

type AuctionImage = {
  src: string;
  fullSrc: string;
  alt: string;
  label: string;
};

type RegistrationDetails = {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: string;
  city: string;
  country: string;
  nationalId: string;
};

type AuctionItem = {
  id: string;
  title: string;
  type: string;
  location: string;
  status: 'Live now' | 'Upcoming' | 'Closed';
  endTime: string;
  startBid: number;
  currentBid: number;
  minIncrement: number;
  bidders: number;
  trend: number;
  description: string;
  registered: boolean;
  registrationDetails?: RegistrationDetails;
  images: AuctionImage[];
};

const emptyRegistration: RegistrationDetails = {
  fullName: '',
  phoneNumber: '',
  email: '',
  location: '',
  city: '',
  country: '',
  nationalId: '',
};

const initialAuctions: AuctionItem[] = [
  {
    id: 'industrial-equipment',
    title: 'Industrial Plant Equipment',
    type: 'Equipment auction',
    location: 'Mwanza',
    status: 'Upcoming',
    endTime: 'Starts in 2 days',
    startBid: 12500000,
    currentBid: 13750000,
    minIncrement: 300000,
    bidders: 9,
    trend: 10,
    description: 'Heavy-duty production equipment ready for inspection with maintenance records available.',
    registered: false,
    images: [
      { src: '/assets/images/newpost1.png', fullSrc: '/assets/images/newpost1.png', alt: 'Industrial equipment close-up', label: 'Machinery' },
      { src: '/assets/images/newpost1.png', fullSrc: '/assets/images/newpost1.png', alt: 'Workshop setup', label: 'Workshop' },
      { src: '/assets/images/newpost1.png', fullSrc: '/assets/images/newpost1.png', alt: 'Equipment operator platform', label: 'Operator area' },
    ],
  },
];

export default function AuctionShowcase() {
  const [auctions, setAuctions] = useState<AuctionItem[]>(initialAuctions);
  const [selectedAuctionId, setSelectedAuctionId] = useState(initialAuctions[0].id);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState<RegistrationDetails>(emptyRegistration);
  const [bidInput, setBidInput] = useState('');
  const imageDialogRef = useRef<HTMLDialogElement>(null);
  const registrationDialogRef = useRef<HTMLDialogElement>(null);

  const selectedAuction = useMemo(
    () => auctions.find((auction) => auction.id === selectedAuctionId) ?? auctions[0],
    [auctions, selectedAuctionId]
  );

  const leaderboard = useMemo(
    () => [...auctions].sort((a, b) => b.currentBid - a.currentBid),
    [auctions]
  );

  useEffect(() => {
    const dialog = imageDialogRef.current;
    if (!dialog) return;

    if (isViewerOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isViewerOpen && dialog.open) {
      dialog.close();
    }
  }, [isViewerOpen]);

  useEffect(() => {
    const dialog = registrationDialogRef.current;
    if (!dialog) return;

    if (isRegistrationOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isRegistrationOpen && dialog.open) {
      dialog.close();
    }
  }, [isRegistrationOpen]);

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleViewerKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsViewerOpen(false);
      } else if (event.key === 'ArrowRight') {
        moveImage(1);
      } else if (event.key === 'ArrowLeft') {
        moveImage(-1);
      }
    };

    window.addEventListener('keydown', handleViewerKeyDown);
    return () => window.removeEventListener('keydown', handleViewerKeyDown);
  }, [isViewerOpen, selectedAuction]);

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openRegistrationForm = () => {
    setRegistrationForm(selectedAuction.registrationDetails ?? emptyRegistration);
    setIsRegistrationOpen(true);
  };

  const handleRegister = (auctionId: string) => {
    setSelectedAuctionId(auctionId);
    const auction = auctions.find((item) => item.id === auctionId);
    if (auction?.registered) {
      return;
    }
    openRegistrationForm();
  };

  const handleRegistrationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setAuctions((current) =>
      current.map((auction) =>
        auction.id === selectedAuction.id
          ? {
              ...auction,
              registered: true,
              registrationDetails: registrationForm,
              bidders: auction.bidders + 1,
            }
          : auction
      )
    );

    setIsRegistrationOpen(false);
    setRegistrationForm(emptyRegistration);
  };

  const handleBidSubmit = () => {
    const bidValue = Number(bidInput);
    if (!selectedAuction || Number.isNaN(bidValue)) return;

    const minimumBid = selectedAuction.currentBid + selectedAuction.minIncrement;
    if (bidValue < minimumBid) return;

    setAuctions((current) =>
      current.map((auction) =>
        auction.id === selectedAuction.id
          ? {
              ...auction,
              currentBid: bidValue,
              bidders: auction.bidders + 1,
              trend: Math.max(auction.trend + 5, 100),
            }
          : auction
      )
    );
    setBidInput('');
  };

  const moveImage = (direction: number) => {
    if (!selectedAuction) return;
    setViewerIndex((currentIndex) => {
      const nextIndex = (currentIndex + direction + selectedAuction.images.length) % selectedAuction.images.length;
      return nextIndex;
    });
  };

  const selectedImage = selectedAuction.images[viewerIndex] ?? selectedAuction.images[0];

  return (
    <section id="auctioneering" className="relative -mt-16 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Live Auctions</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-900 md:text-3xl">Featured bidding opportunities</h2>
          </div>
          <button
            type="button"
            onClick={() => handleRegister(selectedAuction.id)}
            disabled={selectedAuction.registered}
            className="inline-flex items-center justify-center rounded-md bg-primary-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-primary-700"
          >
            {selectedAuction.registered ? 'Registered to bid' : 'Register to bid'}
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <div className="space-y-5">
            {auctions.map((auction) => {
              const rank = leaderboard.findIndex((item) => item.id === auction.id) + 1;
              const auctionStatus = {
                'Live now': { label: 'Live', classes: 'bg-emerald-100 text-emerald-700' },
                Upcoming: { label: 'Not started', classes: 'bg-amber-100 text-amber-800' },
                Closed: { label: 'Ended', classes: 'bg-slate-200 text-slate-700' },
              }[auction.status];

              return (
                <article
                  key={auction.id}
                  className={`overflow-hidden rounded-2xl border bg-slate-50 transition-all duration-200 ${
                    selectedAuction.id === auction.id
                      ? 'border-accent-400 shadow-lg shadow-accent-100'
                      : 'border-slate-200 hover:border-accent-300'
                  }`}
                >
                  <div className="grid gap-3 p-3 md:grid-cols-[1.05fr_1fr] md:p-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAuctionId(auction.id);
                        setViewerIndex(0);
                      }}
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={auction.images[0].src}
                        alt={auction.images[0].alt}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                      />
                      <span className="absolute left-2.5 top-2.5 rounded-full bg-primary-900/80 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                        {auction.status}
                      </span>
                    </button>

                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-700">#{rank} in ranking</p>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-semibold text-emerald-700">
                            <TrendingUp size={11} />
                            {auction.trend}% trend
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-primary-900">{auction.title}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-gray-600">{auction.description}</p>
                      </div>

                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        <div className="rounded-xl bg-white p-2.5 shadow-sm">
                          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-500">Current bid</p>
                          <p className="mt-1 text-lg font-bold text-primary-900">TZS {auction.currentBid.toLocaleString()}</p>
                        </div>
                        <div className="rounded-xl bg-white p-2.5 shadow-sm">
                          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-500">Ends</p>
                          <p className="mt-1 text-lg font-bold text-primary-900">{auction.endTime}</p>
                        </div>
                        <div className="rounded-xl bg-white p-2.5 shadow-sm">
                          <p className="text-[9px] uppercase tracking-[0.18em] text-gray-500">Auction status</p>
                          <p className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${auctionStatus.classes}`}>
                            {auctionStatus.label}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-primary-700">
                        <span className="inline-flex items-center gap-1.5"><Users size={14} /> {auction.bidders} bidders</span>
                        <span className="inline-flex items-center gap-1.5"><Wallet size={14} /> Start: TZS {auction.startBid.toLocaleString()}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedAuctionId(auction.id);
                            setViewerIndex(0);
                            setIsViewerOpen(true);
                          }}
                          className="ml-auto inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:text-accent-800"
                        >
                          View more images <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="rounded-2xl bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-700">Selected lot</p>
                {selectedAuction.registered && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-semibold text-emerald-700">
                    <CheckCircle2 size={11} />
                    Registered
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-bold text-primary-900">{selectedAuction.title}</h3>
              <p className="mt-1 text-xs text-gray-600">{selectedAuction.type} • {selectedAuction.location}</p>

              <button
                type="button"
                onClick={() => {
                  setViewerIndex(0);
                  setIsViewerOpen(true);
                }}
                className="group relative mt-3 block overflow-hidden rounded-xl"
              >
                <img
                  src={selectedAuction.images[0].src}
                  alt={selectedAuction.images[0].alt}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900/80 to-transparent px-3 pb-3 pt-8 text-left text-xs font-semibold text-white">
                  Open gallery
                </span>
              </button>

              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {selectedAuction.images.map((image, index) => (
                  <button
                    key={`${selectedAuction.id}-${image.label}`}
                    type="button"
                    onClick={() => {
                      setViewerIndex(index);
                      setIsViewerOpen(true);
                    }}
                    className={`overflow-hidden rounded-md border ${
                      viewerIndex === index ? 'border-accent-500' : 'border-slate-200'
                    }`}
                  >
                    <img src={image.src} alt={image.alt} className="h-12 w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-primary-900 to-primary-700 p-3 text-white">
                <p className="text-[9px] uppercase tracking-[0.18em] text-primary-200">Live trend</p>
                <div className="mt-3 flex items-end gap-1.5">
                  {[40, 58, 74, 86, 100].map((bar, index) => (
                    <div key={bar} className="flex-1 rounded-t-md bg-white/20" style={{ height: `${bar * 0.6}px`, opacity: 0.4 + index * 0.15 }} />
                  ))}
                </div>
                <p className="mt-2 text-xs text-primary-100">Bidding momentum rising by {selectedAuction.trend}% this hour.</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-700">Bid now</p>
                <span className="rounded-full bg-accent-50 px-2 py-1 text-[9px] font-semibold text-accent-700">
                  +TZS {selectedAuction.minIncrement.toLocaleString()} min increment
                </span>
              </div>

              <div className="mt-3 space-y-3">
                <label htmlFor="bid-amount" className="text-xs font-medium text-primary-900">Your bid</label>
                <div className="flex gap-2">
                  <input
                    id="bid-amount"
                    type="number"
                    min={selectedAuction.currentBid + selectedAuction.minIncrement}
                    step={selectedAuction.minIncrement}
                    value={bidInput}
                    onChange={(event) => setBidInput(event.target.value)}
                    placeholder={`Min TZS ${(selectedAuction.currentBid + selectedAuction.minIncrement).toLocaleString()}`}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-primary-900 outline-none ring-0 transition focus:border-accent-500"
                  />
                  <button
                    type="button"
                    onClick={handleBidSubmit}
                    className="rounded-lg bg-accent-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-600"
                  >
                    Bid
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">Leaderboard</p>
                <div className="mt-2 space-y-2">
                  {leaderboard.map((auction, index) => (
                    <div
                      key={auction.id}
                      className={`flex items-center justify-between rounded-xl border px-2.5 py-2 ${
                        auction.id === selectedAuction.id ? 'border-accent-200 bg-accent-50' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-900 text-[9px] font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-primary-900">{auction.title}</p>
                          <p className="text-[10px] text-gray-500">{auction.location}</p>
                        </div>
                      </div>
                      <p className="text-xs font-bold text-primary-900">TZS {auction.currentBid.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleContactClick}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary-200 px-4 py-2.5 text-xs font-semibold text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
            >
              Enquire about an auction
              <ArrowRight size={14} />
            </button>

            <Link
              to="/gallery"
              onClick={rememberGalleryReturnPosition}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 text-xs font-semibold text-primary-700 hover:text-accent-700"
            >
              View gallery
              <ArrowRight size={14} />
            </Link>
          </aside>
        </div>
      </div>

      <dialog
        ref={imageDialogRef}
        aria-label="Auction image gallery"
        onClose={() => setIsViewerOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setIsViewerOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsViewerOpen(false);
        }}
        className="fixed m-0 h-full max-h-none w-full max-w-none border-0 bg-primary-900/95 p-5 text-white backdrop:bg-primary-900/90 sm:p-8"
      >
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">Auction gallery</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{selectedAuction.title}</h3>
            </div>
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={() => setIsViewerOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>
          </div>

          <div className="relative my-5 flex min-h-0 flex-1 items-center justify-center">
            <img
              src={selectedImage.fullSrc}
              alt={selectedImage.alt}
              className="max-h-full max-w-full object-contain"
            />

            {selectedAuction.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => moveImage(-1)}
                  className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
                >
                  <ArrowLeft size={21} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => moveImage(1)}
                  className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
                >
                  <ArrowRight size={21} />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4 text-sm">
            <p className="text-primary-100">{selectedImage.label}</p>
            <span className="shrink-0 tabular-nums text-primary-300">
              {String(viewerIndex + 1).padStart(2, '0')} / {String(selectedAuction.images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </dialog>

      <dialog
        ref={registrationDialogRef}
        aria-label="Auction registration form"
        onClose={() => setIsRegistrationOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setIsRegistrationOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsRegistrationOpen(false);
        }}
        className="fixed inset-0 m-auto h-fit max-h-[90vh] w-[min(92vw,700px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl backdrop:bg-primary-900/40"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Auction registration</p>
            <h3 className="mt-2 text-2xl font-bold text-primary-900">Complete your bidder profile</h3>
          </div>
          <button
            type="button"
            onClick={() => setIsRegistrationOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleRegistrationSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>Full name</span>
              <input
                required
                type="text"
                value={registrationForm.fullName}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, fullName: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>Phone number</span>
              <input
                required
                type="tel"
                value={registrationForm.phoneNumber}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, phoneNumber: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>Email address</span>
              <input
                required
                type="email"
                value={registrationForm.email}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>Location</span>
              <input
                required
                type="text"
                value={registrationForm.location}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, location: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>City</span>
              <input
                required
                type="text"
                value={registrationForm.city}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, city: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-primary-900">
              <span>Country</span>
              <input
                required
                type="text"
                value={registrationForm.country}
                onChange={(event) => setRegistrationForm((current) => ({ ...current, country: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm font-medium text-primary-900">
            <span>National ID (NIDA)</span>
            <input
              required
              type="text"
              value={registrationForm.nationalId}
              onChange={(event) => setRegistrationForm((current) => ({ ...current, nationalId: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-primary-900 outline-none transition focus:border-accent-500"
            />
          </label>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setIsRegistrationOpen(false)}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Complete registration
            </button>
          </div>
        </form>
      </dialog>
    </section>
  );
}