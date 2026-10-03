export default function SectionWave({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) {
  return (
    <div
      className="relative z-10 h-16 overflow-hidden"
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        className="block h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32 C190 54 300 14 470 20 C650 27 760 62 930 47 C1110 31 1260 12 1440 28 L1440 100 L0 100 Z"
          fill="#cbd5e1"
        />
        <path
          d="M0 43 C190 64 310 27 485 31 C670 36 775 71 970 57 C1150 44 1290 25 1440 39 L1440 100 L0 100 Z"
          fill="#7e96b0"
        />
        <path
          d="M0 55 C190 74 325 42 510 43 C700 44 820 81 1005 68 C1180 55 1320 39 1440 51 L1440 100 L0 100 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}