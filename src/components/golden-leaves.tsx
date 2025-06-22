import { cn } from "@/lib/utils";

interface GoldenLeavesProps {
  position: 'top-left' | 'bottom-right';
}

export function GoldenLeaves({ position }: GoldenLeavesProps) {
  return (
    <div className={cn(
      "absolute -z-10 w-48 h-96 pointer-events-none",
      {
        "top-0 left-0 transform -translate-x-1/4 -translate-y-1/4": position === 'top-left',
        "bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rotate-180": position === 'bottom-right'
      }
    )}>
      <svg
        viewBox="0 0 200 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#f0c43a" />
            <stop offset="100%" stopColor="#daa520" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g fill="url(#gold-gradient)" opacity="0.6" filter="url(#glow)">
            {/* Main Stem */}
            <path d="M 100 400 Q 110 300 80 200 Q 60 100 100 0" stroke="url(#gold-gradient)" strokeWidth="3" fill="none" />

            {/* Leaves and Berries */}
            <circle cx="85" cy="180" r="4" />
            <path d="M 80 200 Q 60 190 70 170" />
            <path d="M 80 200 Q 100 190 90 170" />

            <circle cx="70" cy="250" r="5" />
            <path d="M 85 220 Q 65 230 70 250" />
            <path d="M 85 220 Q 105 230 90 250" />

            <circle cx="110" cy="150" r="3" />
            <circle cx="120" cy="160" r="4" />
            <path d="M 90 170 Q 110 160 115 140" />

            <circle cx="60" cy="120" r="4" />
            <path d="M 70 140 Q 50 130 60 120" />
            <path d="M 70 140 Q 90 130 80 120" />

            <circle cx="105" cy="50" r="5" />
            <path d="M 100 80 Q 120 70 105 50" />
            <path d="M 100 80 Q 80 70 95 50" />

            <circle cx="90" cy="320" r="4.5" />
            <path d="M 95 300 Q 75 310 90 320" />
            <path d="M 95 300 Q 115 310 100 320" />
        </g>
      </svg>
    </div>
  );
}
