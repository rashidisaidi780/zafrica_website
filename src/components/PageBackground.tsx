export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=85"
        alt=""
        className="h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-gray-50/80 to-primary-50/75" />
    </div>
  );
}
