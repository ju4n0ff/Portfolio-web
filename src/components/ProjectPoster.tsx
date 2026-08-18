import type { Project } from "../data/projects";

interface ProjectPosterProps {
  project: Project;
}

export function ProjectPoster({ project }: ProjectPosterProps) {
  if (project.id === "raymi") return <RaymiPoster />;
  if (project.id === "cinescope") return <CinescopePoster />;
  return <CalculadoraPoster />;
}

function RaymiPoster() {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label="RAYMI — fotografía"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="raymi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3EDE3" />
          <stop offset="55%" stopColor="#E7D9C3" />
          <stop offset="100%" stopColor="#D9B36C" />
        </linearGradient>
        <linearGradient id="raymi-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C2703D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C2703D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#raymi-bg)" />
      <rect x="14" y="14" width="372" height="232" fill="none" stroke="#1C1917" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="200" cy="128" r="82" fill="url(#raymi-sky)" />
      <circle cx="200" cy="128" r="66" fill="none" stroke="#1C1917" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 6" />
      <circle cx="200" cy="128" r="48" fill="none" stroke="#1C1917" strokeOpacity="0.85" strokeWidth="1" />
      <circle cx="200" cy="128" r="26" fill="#1C1917" fillOpacity="0.12" />
      <path d="M200 128 l14 -14" stroke="#1C1917" strokeOpacity="0.55" strokeWidth="1.5" />
      <circle cx="200" cy="128" r="4" fill="#C2703D" />
      <text x="200" y="222" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="34" fill="#1C1917" letterSpacing="0.18em">
        RAYMI
      </text>
      <text x="200" y="240" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="9.5" fill="#6B6259" letterSpacing="0.42em">
        FOTOGRAFÍA · PERÚ
      </text>
      <circle cx="366" cy="44" r="7" fill="#C2703D" fillOpacity="0.85" />
    </svg>
  );
}

function CinescopePoster() {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label="CINESCOPE — películas y series"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cine-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B2620" />
          <stop offset="100%" stopColor="#1C1917" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#cine-bg)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={26 + i * 90} y="22" width="68" height="10" rx="2" fill="#C2703D" fillOpacity="0.5" />
          <rect x={26 + i * 90} y="228" width="68" height="10" rx="2" fill="#C2703D" fillOpacity="0.5" />
        </g>
      ))}
      <text x="200" y="118" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="40" fill="#FAF6F0" letterSpacing="0.1em">
        CINESCOPE
      </text>
      <g transform="translate(200, 150)">
        <circle r="30" fill="none" stroke="#D9B36C" strokeOpacity="0.85" strokeWidth="1.5" />
        <path d="M -9 -11 L 13 0 L -9 11 Z" fill="#FAF6F0" />
      </g>
      <text x="200" y="206" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="10" fill="#D9B36C" letterSpacing="0.4em">
        PELÍCULAS &amp; SERIES
      </text>
      <text x="54" y="118" fontFamily="Georgia, serif" fontSize="12" fill="#D9B36C" fillOpacity="0.6">★</text>
      <text x="346" y="118" textAnchor="end" fontFamily="Georgia, serif" fontSize="12" fill="#D9B36C" fillOpacity="0.6">★</text>
      <text x="330" y="52" textAnchor="end" fontFamily="Georgia, serif" fontSize="9" fill="#D9B36C" fillOpacity="0.9">★</text>
      <text x="70" y="208" fontFamily="Georgia, serif" fontSize="9" fill="#D9B36C" fillOpacity="0.9">★</text>
    </svg>
  );
}

function CalculadoraPoster() {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label="Calculadora — huella de carbono"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="calc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3EDE3" />
          <stop offset="100%" stopColor="#EFE4D2" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#calc-bg)" />
      <g transform="translate(200 126)">
        <circle r="86" fill="none" stroke="#1C1917" strokeOpacity="0.12" strokeWidth="1.5" />
        <circle r="68" fill="none" stroke="#1C1917" strokeOpacity="0.3" strokeWidth="1.5" />
        <circle r="86" fill="none" stroke="#C2703D" strokeWidth="5" strokeLinecap="round" strokeDasharray="318 540" transform="rotate(-120)" />
        <circle r="66" fill="#1C1917" fillOpacity="0.06" />
        <text x="0" y="6" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="30" fill="#1C1917">
          CO₂
        </text>
        <text x="0" y="24" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#6B6259" letterSpacing="0.28em">
          CARBON FOOTPRINT
        </text>
        <line x1="0" y1="0" x2="34" y2="-58" stroke="#1C1917" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4.5" fill="#C2703D" />
      </g>
      <text x="200" y="240" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="600" fontSize="24" fill="#1C1917" letterSpacing="0.14em">
        HUELLA DE CARBONO
      </text>
      <path d="M 52 46 c 10 -8 26 -8 36 0 c 5 4 5 8 8 12 c 3 4 6 6 6 10 c 0 6 -4 10 -10 10 H 62 c -6 0 -10 -4 -10 -10 c 0 -4 3 -6 6 -10 c 3 -4 3 -8 8 -12" fill="none" stroke="#1F6E5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="340" cy="226" r="8" fill="#D9B36C" fillOpacity="0.7" />
    </svg>
  );
}