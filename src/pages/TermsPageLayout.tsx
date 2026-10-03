import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" aria-label="Zafrica home" className="flex h-12 w-36 items-center">
            <img
              src="/assets/images/zafrica_logo_1.png"
              alt="Zafrica"
              className="h-full w-full object-contain object-left"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
          Zafrica Service Terms
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-primary-900 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-10">{children}</div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-6 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/zafrica_logo_1.png"
              alt="Zafrica"
              className="h-10 w-32 object-contain object-left"
            />
            <span>Company Limited</span>
          </div>
          <Link to="/" className="font-medium text-accent-700 hover:text-accent-900">
            Return to home page
          </Link>
        </div>
      </footer>
    </div>
  );
}