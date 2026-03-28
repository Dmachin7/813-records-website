"use client";

const ARTIST_LINKS = [
  {
    name: "TR",
    links: [
      { label: "SPOTIFY", href: "https://open.spotify.com/artist/0tH9WH9RrwIiuoNHcUqmXf", color: "#1DB954" },
      { label: "APPLE MUSIC", href: "https://music.apple.com/us/artist/tr/1634826910", color: "#FC3C44" },
      { label: "INSTAGRAM", href: "https://www.instagram.com/tr_tpa", color: "#C13584" },
    ],
  },
  {
    name: "PRINCE KREED",
    links: [
      { label: "SPOTIFY", href: "https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8", color: "#1DB954" },
      { label: "APPLE MUSIC", href: "https://music.apple.com/us/artist/prince-kreed/1481045754", color: "#FC3C44" },
      { label: "INSTAGRAM", href: "https://www.instagram.com/prince_kreed/", color: "#C13584" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-arcade-black border-t-4 border-arcade-yellow pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Pixel divider at top */}
        <div className="pixel-divider mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Branding column */}
          <div className="sm:col-span-1">
            <button
              onClick={scrollToTop}
              className="block mb-4 focus:outline-none text-left"
            >
              <span
                className="font-pixel text-arcade-yellow text-base leading-relaxed"
                style={{
                  textShadow: "0 0 8px #FFD700, 0 0 16px rgba(255,215,0,0.4)",
                  display: "block",
                }}
              >
                813
              </span>
              <span
                className="font-pixel text-arcade-yellow text-base leading-relaxed"
                style={{
                  textShadow: "0 0 8px #FFD700, 0 0 16px rgba(255,215,0,0.4)",
                  display: "block",
                }}
              >
                RECORDS
              </span>
            </button>

            <p className="font-terminal text-arcade-white text-lg opacity-70 mb-4 leading-relaxed">
              Independent imprint.
              <br />
              Tampa-based.
              <br />
              Artist-led.
            </p>

            {/* ASCII decoration */}
            <div
              className="font-terminal text-arcade-yellow text-sm opacity-30 mt-4"
              aria-hidden="true"
            >
              ╔══════════╗<br />
              ║ 813 RECS ║<br />
              ╚══════════╝
            </div>
          </div>

          {/* Artist links */}
          {ARTIST_LINKS.map((artist) => (
            <div key={artist.name}>
              <div className="font-pixel text-arcade-yellow text-xs mb-4">
                {artist.name}
              </div>
              <div className="flex flex-col gap-3">
                {artist.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-terminal text-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
                    style={{ color: link.color }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = `0 0 8px ${link.color}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                    }}
                  >
                    <span className="text-arcade-yellow opacity-50">▶</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pixel-divider-sm mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-terminal text-arcade-white text-base opacity-50 text-center sm:text-left">
            © 2026 813 Records. Independently Operated.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-terminal text-arcade-yellow text-base opacity-60">
              QUALITY OVER QUANTITY
            </span>
            <button
              onClick={scrollToTop}
              className="font-pixel text-arcade-yellow text-xs px-3 py-1 hover:bg-arcade-yellow hover:text-arcade-black transition-all"
              style={{
                boxShadow:
                  "0 -1px 0 0 #FFD700, 0 1px 0 0 #FFD700, -1px 0 0 0 #FFD700, 1px 0 0 0 #FFD700",
                fontSize: "0.5rem",
              }}
            >
              ▲ TOP
            </button>
          </div>
        </div>

        {/* Pixel art bottom decoration */}
        <div
          className="text-center mt-8 font-terminal text-arcade-yellow text-sm opacity-20"
          aria-hidden="true"
        >
          ■ ■ ■ □ ■ ■ ■ □ 813 □ ■ ■ ■ □ ■ ■ ■
        </div>
      </div>
    </footer>
  );
}
