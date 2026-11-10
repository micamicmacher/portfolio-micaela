// Íconos decorativos. Siempre van junto a un texto visible, por eso se
// ocultan a los lectores de pantalla (aria-hidden).

type Props = { className?: string };

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconoChat({ className = "size-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

export function IconoLinkedin({ className = "size-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0v3" />
    </svg>
  );
}

export function IconoDescarga({ className = "size-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function IconoMail({ className = "size-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconoCodigo({ className = "size-5" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
  );
}

export function IconoVentas({ className = "size-6" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 19V5M4 19h16M8 15l3.5-4 3 2.5L20 7" />
      <path d="M16 7h4v4" />
    </svg>
  );
}

export function IconoAtencion({ className = "size-6" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

export function IconoRedes({ className = "size-6" }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="2.5" width="14" height="19" rx="3" />
      <path d="M12 16.5s-3.5-2.1-3.5-4.6a1.9 1.9 0 0 1 3.5-1 1.9 1.9 0 0 1 3.5 1c0 2.5-3.5 4.6-3.5 4.6Z" />
    </svg>
  );
}

export function IconoUbicacion({ className = "size-4" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
