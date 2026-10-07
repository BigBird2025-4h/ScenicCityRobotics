// Decorative scenery: Lookout Mountain ridges, river waves, Walnut Street Bridge truss, aquarium bubbles.

export function Ridges({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#2f7db0" opacity=".35" d="M0 260V130l140-40 130 30 170-70 150 50 200-30 180 40 160-50 130 30 180-20V260z" />
      <path fill="#1b5e8c" opacity=".55" d="M0 260V170l200-50 220 30 160-40h420l180 40 260-30V260z" />
      <path fill="currentColor" d="M0 260V200l180-30 240 20 140-30h480l120 30 280-20V260z" />
    </svg>
  );
}

export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0 40C180 0 360 80 540 40S900 0 1080 40S1300 70 1440 30V80H0z" />
    </svg>
  );
}

export function Truss({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="truss" width="48" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 0L24 28L48 0M0 1H48M0 27H48" fill="none" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#truss)" />
    </svg>
  );
}

const BUBBLES = [
  { left: "6%", size: 14, delay: "0s", dur: "11s" },
  { left: "14%", size: 8, delay: "3s", dur: "9s" },
  { left: "27%", size: 18, delay: "6s", dur: "13s" },
  { left: "41%", size: 10, delay: "1s", dur: "10s" },
  { left: "58%", size: 16, delay: "4s", dur: "12s" },
  { left: "69%", size: 8, delay: "7s", dur: "9s" },
  { left: "81%", size: 20, delay: "2s", dur: "14s" },
  { left: "92%", size: 11, delay: "5s", dur: "10s" },
];

export function Bubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{ left: b.left, width: b.size, height: b.size, animationDelay: b.delay, animationDuration: b.dur }}
        />
      ))}
    </div>
  );
}

export function Fish({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 32" aria-hidden="true">
      <path fill="currentColor" d="M2 16C14 2 38 2 48 16C38 30 14 30 2 16zM46 16L62 4V28z" />
      <circle cx="14" cy="14" r="2" fill="#0b2f4a" />
    </svg>
  );
}

export function MountainMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path fill="currentColor" d="M0 34L10 16l6 8 8-14h8l8 24z" />
      <path fill="#5fb0d9" d="M0 36c7-3 13 3 20 0s13 3 20 0v4H0z" />
    </svg>
  );
}
