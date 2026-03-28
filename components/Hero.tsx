"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "813RECORDSTAMPAFLHIPHOPRBINDEPENDENTARTISTLED0123456789アイウエオカキクケコ".split("");
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10,10,10,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const brightness = Math.random();
        if (brightness > 0.9) {
          ctx.fillStyle = "#FFD700";
        } else if (brightness > 0.7) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "rgba(255,215,0,0.3)";
        }
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const resizeHandler = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops.length = columns;
      drops.fill(1);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToArtists = () => {
    document.querySelector("#artists")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-arcade-black overflow-hidden scanlines crt-vignette"
    >
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="matrix-canvas"
        aria-hidden="true"
      />

      {/* Moving scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",
          animation: "scanLine 6s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Pre-title */}
        <div
          className="font-terminal text-arcade-yellow text-2xl mb-4 opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
        >
          ▶ NOW PLAYING: 813 RECORDS
        </div>

        {/* Main title */}
        <h1 className="font-pixel text-arcade-yellow leading-tight mb-6 flex items-baseline justify-center gap-2 flex-wrap">
          <span
            style={{
              fontSize: "clamp(1.6rem, 6vw, 4rem)",
              animation: "neonPulse 2.5s ease-in-out infinite",
            }}
          >
            813 RECORDS
          </span>
          <span
            className="animate-blink"
            style={{ fontSize: "clamp(1.6rem, 6vw, 4rem)" }}
            aria-hidden="true"
          >
            _
          </span>
        </h1>

        {/* Pixel divider */}
        <div
          className="pixel-divider w-48 mx-auto mb-6 opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 0.5s both" }}
        />

        {/* Subtitle */}
        <div
          className="font-terminal text-arcade-white text-2xl sm:text-3xl mb-2 tracking-widest opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
        >
          INDEPENDENT IMPRINT
        </div>
        <div
          className="font-terminal text-arcade-yellow text-xl sm:text-2xl mb-2 tracking-widest opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 0.7s both" }}
        >
          TAMPA-BASED // ARTIST-LED
        </div>
        <div
          className="font-terminal text-arcade-white text-lg sm:text-xl mb-10 tracking-widest opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
        >
          EST. 2022 // HIP-HOP & R&B
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 1s both" }}
        >
          <button
            onClick={scrollToArtists}
            className="arcade-btn text-xs font-pixel px-6 py-3 transition-all"
          >
            [ EXPLORE ARTISTS ]
          </button>
          <button
            onClick={scrollToAbout}
            className="font-pixel text-xs px-6 py-3 text-arcade-white transition-all hover:text-arcade-yellow"
            style={{
              boxShadow:
                "0 -2px 0 0 #fff, 0 2px 0 0 #fff, -2px 0 0 0 #fff, 2px 0 0 0 #fff, -2px -2px 0 0 #fff, 2px -2px 0 0 #fff, -2px 2px 0 0 #fff, 2px 2px 0 0 #fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 -2px 0 0 #FFD700, 0 2px 0 0 #FFD700, -2px 0 0 0 #FFD700, 2px 0 0 0 #FFD700, -2px -2px 0 0 #FFD700, 2px -2px 0 0 #FFD700, -2px 2px 0 0 #FFD700, 2px 2px 0 0 #FFD700, 0 0 20px rgba(255,215,0,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 -2px 0 0 #fff, 0 2px 0 0 #fff, -2px 0 0 0 #fff, 2px 0 0 0 #fff, -2px -2px 0 0 #fff, 2px -2px 0 0 #fff, -2px 2px 0 0 #fff, 2px 2px 0 0 #fff";
            }}
          >
            [ LEARN MORE ]
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: "fadeInUp 0.6s ease-out 1.4s both" }}
        >
          <span className="font-terminal text-arcade-yellow text-lg tracking-widest">
            SCROLL DOWN
          </span>
          <div
            className="flex flex-col gap-1 items-center"
            style={{ animation: "floatUp 2s ease-in-out infinite" }}
          >
            <div className="w-1 h-1 bg-arcade-yellow" />
            <div className="w-1 h-1 bg-arcade-yellow opacity-70" />
            <div className="w-1 h-1 bg-arcade-yellow opacity-40" />
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 font-terminal text-arcade-yellow text-sm opacity-30 hidden sm:block">
        {`[PLAYER 1]`}
      </div>
      <div className="absolute top-4 right-4 font-terminal text-arcade-yellow text-sm opacity-30 hidden sm:block">
        {`[INSERT COIN]`}
      </div>
      <div className="absolute bottom-4 left-4 font-terminal text-arcade-yellow text-sm opacity-30 hidden sm:block">
        {`813.FL`}
      </div>
      <div className="absolute bottom-4 right-4 font-terminal text-arcade-yellow text-sm opacity-30 hidden sm:block">
        {`©2026`}
      </div>
    </section>
  );
}
