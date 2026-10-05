const GALLERY_RETURN_SCROLL_KEY = 'zafrica-gallery-return-scroll';

export function rememberGalleryReturnPosition() {
  window.sessionStorage.setItem(GALLERY_RETURN_SCROLL_KEY, String(window.scrollY));
}

export function restoreGalleryReturnPosition() {
  const storedPosition = window.sessionStorage.getItem(GALLERY_RETURN_SCROLL_KEY);
  window.sessionStorage.removeItem(GALLERY_RETURN_SCROLL_KEY);

  if (storedPosition === null) return;

  const scrollY = Number(storedPosition);
  if (!Number.isFinite(scrollY)) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousScrollBehavior;
    });
  });
}