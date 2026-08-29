type P = { size?: number; className?: string };

const AdobeTile = ({ size = 36, bg, stroke, label, text }: P & { bg: string; stroke: string; label: string; text: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label={label}>
    <rect x="1" y="1" width="46" height="46" rx="10" fill={bg} stroke={stroke} strokeWidth="2" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
      fontSize="19"
      fontWeight="700"
      fill={stroke}
    >
      {text}
    </text>
  </svg>
);

export const PhotoshopIcon = (p: P) => (
  <AdobeTile {...p} bg="#001E36" stroke="#31A8FF" label="Adobe Photoshop" text="Ps" />
);
export const IllustratorIcon = (p: P) => (
  <AdobeTile {...p} bg="#330000" stroke="#FF9A00" label="Adobe Illustrator" text="Ai" />
);
export const AfterEffectsIcon = (p: P) => (
  <AdobeTile {...p} bg="#00005B" stroke="#9999FF" label="Adobe After Effects" text="Ae" />
);
export const CorelDrawIcon = ({ size = 36, className = "" }: P) => (
  <img
    src={"/coreldraw.png"}
    alt="CorelDRAW"
    width={size}
    height={size}
    loading="lazy"
    decoding="async"
    style={{ width: size, height: size }}
    className={`block object-contain ${className}`}
  />
);
export const FigmaIcon = ({ size = 36 }: P) => (
  <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Figma">
    <rect x="1" y="1" width="46" height="46" rx="10" fill="#141414" stroke="#2B2B2B" strokeWidth="2" />
    <g transform="translate(15 10)">
      <path d="M9 0H4.5A4.5 4.5 0 0 0 4.5 9H9V0Z" fill="#F24E1E" />
      <path d="M9 9H4.5a4.5 4.5 0 1 0 0 9H9V9Z" fill="#A259FF" />
      <path d="M9 18H4.5a4.5 4.5 0 1 0 4.5 4.5V18Z" fill="#0ACF83" />
      <path d="M9 0h4.5a4.5 4.5 0 0 1 0 9H9V0Z" fill="#FF7262" />
      <circle cx="13.5" cy="13.5" r="4.5" fill="#1ABCFE" />
    </g>
  </svg>
);
