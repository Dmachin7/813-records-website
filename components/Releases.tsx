"use client";

import { useEffect, useRef, useState } from "react";

interface Release {
  title: string;
  artist: string;
  type: string;
  year: string;
  status: "AVAILABLE" | "COMING SOON";
  streamUrl: string;
  description: string;
}

const RELEASES: Release[] = [
  {
    title: "GRAD PACK",
    artist: "TR",
    type: "ALBUM",
    year: "2026",
    status: "AVAILABLE",
    streamUrl: "https://open.spotify.com/artist/0tH9WH9RrwIiuoNHcUqmXf",
    description:
      "Life before, during, and after university. The full chronicle of an artist finding his footing.",
  },
  {
    title: "MOOD SWINGS",
    artist: "PRINCE KREED",
    type: "DEBUT ALBUM",
    year: "2026",
    status: "COMING SOON",
    streamUrl: "https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8",
    description:
      "The debut. R&B, Rap, and Pop — the full range of Prince Kreed's romantic aesthetic in one project. Everything he's been building toward.",
  },
  {
    title: "PERFECT PRINCESS",
    artist: "PRINCE KREED",
    type: "SINGLE",
    year: "2026",
    status: "AVAILABLE",
    streamUrl: "https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8",
    description: "The single that set the tone — hopeless romantic. Lover boy aesthetic.",
  },
  {
    title: "O.T.W.",
    artist: "PRINCE KREED",
    type: "SINGLE",
    year: "2026",
    status: "AVAILABLE",
    streamUrl: "https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8",
    description:
      "feat. Custom Motion. On The Way — keeping the romantic energy alive.",
  },
];

function ReleaseCard({
  release,
  isVisible,
  delay,
}: {
  release: Release;
  isVisible: boolean;
  delay: number;
}) {
  const isComingSoon = release.status === "COMING SOON";

  return (
    <div
      className="flex flex-col gap-4 h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s ease ${delay}ms`,
        background: "#1a1a1a",
        padding: "1.5rem",
        boxShadow: isComingSoon
          ? "0 -4px 0 0 #FFD700, 0 4px 0 0 #FFD700, -4px 0 0 0 #FFD700, 4px 0 0 0 #FFD700, -4px -4px 0 0 #FFD700, 4px -4px 0 0 #FFD700, -4px 4px 0 0 #FFD700, 4px 4px 0 0 #FFD700"
          : "0 -4px 0 0 #FFD700, 0 4px 0 0 #FFD700, -4px 0 0 0 #FFD700, 4px 0 0 0 #FFD700, -4px -4px 0 0 #FFD700, 4px -4px 0 0 #FFD700, -4px 4px 0 0 #FFD700, 4px 4px 0 0 #FFD700",
        animation: isComingSoon ? "borderGlow 2s ease-in-out infinite" : undefined,
      }}
    >
      {/* COMING SOON announcement banner */}
      {isComingSoon && (
        <div
          className="font-pixel text-arcade-black text-center py-1.5"
          style={{
            fontSize: "0.5rem",
            letterSpacing: "0.15em",
            background: "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 12px, #ff8c00 12px, #ff8c00 16px)",
            animation: "comingSoonPulse 2s ease-in-out infinite",
            marginBottom: "0.25rem",
          }}
        >
          ★ COMING LATER THIS YEAR ★
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3
            className="font-pixel text-arcade-yellow mb-1"
            style={{
              fontSize: isComingSoon
                ? "clamp(0.75rem, 2.5vw, 1rem)"
                : "clamp(0.65rem, 2vw, 0.85rem)",
              textShadow: isComingSoon
                ? "0 0 8px #FFD700, 0 0 16px rgba(255,215,0,0.4)"
                : "0 0 6px #FFD700",
              lineHeight: "1.5",
              animation: isComingSoon ? "neonPulse 2.5s ease-in-out infinite" : undefined,
            }}
          >
            {release.title}
          </h3>
          <div className="font-terminal text-arcade-white text-base tracking-wider">
            {release.artist}
          </div>
        </div>

        {/* Status badge */}
        {isComingSoon ? (
          <span
            className="font-pixel px-2 py-1 text-arcade-black shrink-0 coming-soon-badge"
            style={{ fontSize: "0.45rem" }}
          >
            2026
          </span>
        ) : (
          <span
            className="font-pixel px-2 py-1 shrink-0"
            style={{
              fontSize: "0.45rem",
              color: "#00ff41",
              boxShadow:
                "0 -1px 0 0 #00ff41, 0 1px 0 0 #00ff41, -1px 0 0 0 #00ff41, 1px 0 0 0 #00ff41",
            }}
          >
            OUT
          </span>
        )}
      </div>

      <div className="pixel-divider-sm" />

      {/* Meta */}
      <div className="flex gap-4 font-terminal text-base">
        <span className="text-arcade-yellow">{release.type}</span>
        <span className="text-arcade-white opacity-60">·</span>
        <span className="text-arcade-white opacity-80">{release.year}</span>
      </div>

      {/* Description */}
      <p className="font-terminal text-arcade-white text-lg opacity-80 flex-1 leading-relaxed">
        {release.description}
      </p>

      {/* Follow CTA for coming soon, stream button for available */}
      {isComingSoon ? (
        <div className="flex flex-col gap-2 mt-auto">
          <div
            className="font-pixel text-center py-2 px-3 text-arcade-black"
            style={{
              fontSize: "0.5rem",
              background: "repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 6px, #ff8c00 6px, #ff8c00 12px)",
              letterSpacing: "0.1em",
            }}
          >
            [ DROPPING LATER THIS YEAR ]
          </div>
          <a
            href={release.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-center py-2 px-3 transition-all hover:bg-arcade-yellow hover:text-arcade-black"
            style={{
              fontSize: "0.5rem",
              color: "#FFD700",
              boxShadow:
                "0 -2px 0 0 #FFD700, 0 2px 0 0 #FFD700, -2px 0 0 0 #FFD700, 2px 0 0 0 #FFD700, -2px -2px 0 0 #FFD700, 2px -2px 0 0 #FFD700, -2px 2px 0 0 #FFD700, 2px 2px 0 0 #FFD700",
              letterSpacing: "0.1em",
            }}
          >
            [ FOLLOW ON SPOTIFY ]
          </a>
        </div>
      ) : (
        <a
          href={release.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="arcade-btn text-center block mt-auto"
          style={{ fontSize: "0.55rem" }}
        >
          [ STREAM NOW ]
        </a>
      )}
    </div>
  );
}

export default function Releases() {
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
      id="releases"
      className="bg-arcade-black py-20 px-4 sm:px-8"
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
              &gt; RELEASES.EXE
            </span>
            <span className="font-pixel text-arcade-yellow text-xs sm:text-sm animate-blink">
              _
            </span>
          </div>
          <div className="pixel-divider w-full" />
        </div>

        {/* Release grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RELEASES.map((release, i) => (
            <ReleaseCard
              key={`${release.title}-${release.artist}`}
              release={release}
              isVisible={isVisible}
              delay={200 + i * 150}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-12 text-center font-terminal text-arcade-white text-lg opacity-50"
          style={{
            opacity: isVisible ? 0.5 : 0,
            transition: "all 0.6s ease 1s",
          }}
        >
          ALL RELEASES ARE FULLY CLEARED. PROFESSIONALLY EXECUTED.
        </div>
      </div>
    </section>
  );
}
