import clients from '../data/clients.js';

// Infinite auto-scrolling logo strip. The track renders the logo list
// TWICE back to back, then animates translateX from 0 to -50% on a loop
// (see `scroll-x` in tailwind.config.js) — because the two halves are
// identical, the loop point is invisible and the strip appears to
// scroll forever. Hovering pauses the animation so people can actually
// read a logo; each logo dims by default and goes full-color on hover.
function ClientLogos() {
  // Duplicated once for a seamless loop — do this in JS, not by hand,
  // so adding/removing a client in data/clients.js "just works".
  const track = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade the strip to transparent at both edges so logos don't
          appear to hard-cut in and out of view. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-rx-navy-deep to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-rx-navy-deep to-transparent sm:w-32" />

      <div className="group flex w-max animate-scroll-x gap-12 hover:[animation-play-state:paused] sm:gap-20">
        {track.map((client, i) => (
          <div
            key={`${client.id}-${i}`}
            className="flex h-16 w-32 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0 sm:h-20 sm:w-40"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogos;
