"use client";

import { useEffect, useRef, useState } from "react";

interface SocialLink {
  label: string;
  href: string;
  color: string;
}

interface Artist {
  id: string;
  name: string;
  subtitle: string;
  origin: string;
  bio: string[];
  timeline: { year: string; event: string }[];
  featured: { title: string; description: string };
  recentReleases?: { title: string; context: string; year: string }[];
  upcoming?: string;
  socials: SocialLink[];
}

const ARTISTS: Artist[] = [
  {
    id: "tr",
    name: "TR",
    subtitle: "FOUNDER // 813 RECORDS",
    origin: "BORN & RAISED: TAMPA, FL",
    bio: [
      "813 Records founder. TR isn't just a name — it's a commitment to the 813 area code and everything it represents. Building something real in hip-hop, from the ground up.",
      "No trend-chasing. No shortcuts. Genuine relationships, real work, and a standard worth respecting.",
    ],
    timeline: [
      { year: "2016", event: "Drum set — middle school jazz band. Percussion became the language." },
      { year: "2018", event: "February 2018: writing starts. The official mark. 8+ years of continuous work." },
      { year: "2020", event: "Recorded on mic. USF business degree begins." },
      { year: "2022", event: "Hit all streaming platforms. 813 Records established." },
      { year: "2025", event: "USF graduation. Now fully committed to 813 Records." },
    ],
    featured: {
      title: "GRAD PACK",
      description:
        "First official album. A chronicle of life before, during, and after university — the hunger, the balancing act, and finally the clarity of going all-in on the craft.",
    },
    socials: [
      {
        label: "SPOTIFY",
        href: "https://open.spotify.com/artist/0tH9WH9RrwIiuoNHcUqmXf",
        color: "#1DB954",
      },
      {
        label: "APPLE MUSIC",
        href: "https://music.apple.com/us/artist/tr/1634826910",
        color: "#FC3C44",
      },
      {
        label: "INSTAGRAM",
        href: "https://www.instagram.com/tr_tpa",
        color: "#C13584",
      },
    ],
  },
  {
    id: "prince-kreed",
    name: "PRINCE KREED",
    subtitle: "813 RECORDS ARTIST",
    origin: "BORN: DOM. REPUBLIC // RAISED: TAMPA, FL",
    bio: [
      "R&B, rap, and pop — each element bringing something different. Not about fitting into one lane; it's about creating something that feels true.",
      "Hopeless romantic. Lover boy. Influenced by PnB Rock, A Boogie, Juice WRLD, and The Kid LAROI.",
    ],
    timeline: [
      { year: "2016", event: "Started making music at 16 with GioGQ and Russell Marrs." },
      { year: "2024", event: '"Day Off" on GioGQ\'s Mr. GQ ft. Juwan Dineroo — proof of concept.' },
      { year: "2026", event: '"Perfect Princess" sets the romantic aesthetic. "O.T.W." (ft. Custom Motion) follows.' },
      { year: "2026+", event: "MOOD SWINGS debut album in the works." },
    ],
    featured: {
      title: "MOOD SWINGS",
      description:
        "Debut album coming later this year. Blending R&B, Rap, and Pop with the romantic aesthetic that defines Prince Kreed's sound. Showing the full range.",
    },
    recentReleases: [
      { title: "Day Off (feat. Juwan Dineroo)", context: "GioGQ's Mr. GQ", year: "2024" },
      { title: "Perfect Princess", context: "Single", year: "2026" },
      { title: "O.T.W. (feat. Custom Motion)", context: "Collaboration", year: "2026" },
    ],
    upcoming: "MOOD SWINGS — DEBUT ALBUM",
    socials: [
      {
        label: "SPOTIFY",
        href: "https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8",
        color: "#1DB954",
      },
      {
        label: "APPLE MUSIC",
        href: "https://music.apple.com/us/artist/prince-kreed/1481045754",
        color: "#FC3C44",
      },
      {
        label: "INSTAGRAM",
        href: "https://www.instagram.com/prince_kreed/",
        color: "#C13584",
      },
    ],
  },
];

function ArtistCard({
  artist,
  isVisible,
  delay,
}: {
  artist: Artist;
  isVisible: boolean;
  delay: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="pixel-card flex flex-col gap-5 h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s ease ${delay}ms`,
      }}
    >
      {/* Artist name */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="font-pixel text-arcade-yellow glitch-text"
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
              textShadow: "0 0 8px #FFD700",
              lineHeight: "1.4",
            }}
          >
            {artist.name}
          </h3>
          <span className="font-terminal text-arcade-green text-sm mt-1 shrink-0">
            [ONLINE]
          </span>
        </div>
        <div className="font-terminal text-arcade-yellow text-lg tracking-wider">
          {artist.subtitle}
        </div>
        <div className="font-terminal text-arcade-white text-base opacity-60 mt-1">
          {artist.origin}
        </div>
      </div>

      <div className="pixel-divider-sm" />

      {/* Bio */}
      <div className="font-terminal text-arcade-white text-xl leading-relaxed space-y-2">
        {artist.bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Timeline toggle */}
      <div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="font-pixel text-xs text-arcade-yellow hover:text-white transition-colors flex items-center gap-2 mb-2"
        >
          <span>{expanded ? "▼" : "▶"}</span>
          <span>TIMELINE.LOG</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="space-y-2 border-l-2 border-arcade-yellow pl-3 ml-1">
            {artist.timeline.map((item, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute -left-4 top-1 w-2 h-2 bg-arcade-yellow"
                  style={{ boxShadow: "0 0 4px #FFD700" }}
                />
                <div className="font-pixel text-arcade-yellow text-xs mb-0.5">
                  {item.year}
                </div>
                <div className="font-terminal text-arcade-white text-base opacity-80">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pixel-divider-sm" />

      {/* Featured release */}
      <div
        className="bg-arcade-black p-4"
        style={{
          boxShadow:
            "0 -2px 0 0 #FFD700, 0 2px 0 0 #FFD700, -2px 0 0 0 #FFD700, 2px 0 0 0 #FFD700",
        }}
      >
        <div className="font-pixel text-xs text-arcade-yellow mb-2 flex items-center gap-2">
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: "#FFD700",
              animation: "pixelPulse 2s ease-in-out infinite",
            }}
          />
          {artist.id === "tr" ? "FEATURED ALBUM" : "UPCOMING ALBUM"}
        </div>
        <div
          className="font-pixel text-arcade-white text-sm mb-2"
          style={{ fontSize: "0.7rem" }}
        >
          {artist.featured.title}
        </div>
        <p className="font-terminal text-arcade-white text-lg opacity-80">
          {artist.featured.description}
        </p>
      </div>

      {/* Recent releases (Prince Kreed) */}
      {artist.recentReleases && (
        <div>
          <div className="font-pixel text-xs text-arcade-yellow mb-2">
            RECENT_RELEASES.LOG
          </div>
          <div className="space-y-2">
            {artist.recentReleases.map((r, i) => (
              <div
                key={i}
                className="flex justify-between items-start font-terminal text-base"
              >
                <div>
                  <div className="text-arcade-white">{r.title}</div>
                  <div className="text-arcade-white opacity-50 text-sm">
                    {r.context}
                  </div>
                </div>
                <span className="text-arcade-yellow shrink-0 ml-2">{r.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming */}
      {artist.upcoming && (
        <div
          className="coming-soon-badge font-pixel text-xs px-3 py-2 text-center"
          style={{ fontSize: "0.55rem" }}
        >
          ★ {artist.upcoming} ★
        </div>
      )}

      {/* Social links */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {artist.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-xs px-3 py-2 transition-all hover:-translate-y-0.5"
            style={{
              color: social.color,
              boxShadow: `0 -2px 0 0 ${social.color}, 0 2px 0 0 ${social.color}, -2px 0 0 0 ${social.color}, 2px 0 0 0 ${social.color}, -2px -2px 0 0 ${social.color}, 2px -2px 0 0 ${social.color}, -2px 2px 0 0 ${social.color}, 2px 2px 0 0 ${social.color}`,
              fontSize: "0.55rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = social.color;
              (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = social.color;
            }}
          >
            [ {social.label} ]
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Artists() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="artists"
      className="bg-arcade-darkgray py-20 px-4 sm:px-8"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0s",
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-pixel text-arcade-yellow text-xs sm:text-sm">
              &gt; FEATURED_ARTISTS.EXE
            </span>
            <span className="font-pixel text-arcade-yellow text-xs sm:text-sm animate-blink">
              _
            </span>
          </div>
          <div className="pixel-divider w-full" />
        </div>

        {/* Artist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ARTISTS.map((artist, i) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              isVisible={isVisible}
              delay={200 + i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
