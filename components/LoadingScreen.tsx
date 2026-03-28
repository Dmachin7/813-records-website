"use client";

import { useEffect, useState } from "react";

const BOOT_MESSAGES = [
  "INITIALIZING 813.SYS...",
  "LOADING AUDIO DRIVERS...",
  "MOUNTING TAMPA.FL MODULE...",
  "SCANNING HIP-HOP DATABASE...",
  "CONNECTING TO ARTIST NETWORK...",
  "LOADING TR.EXE...",
  "LOADING PRINCE_KREED.EXE...",
  "CALIBRATING BASS FREQUENCIES...",
  "RUNNING QUALITY CHECK...",
  "813 RECORDS ONLINE.",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

  useEffect(() => {
    const totalDuration = 3200;
    const intervalMs = totalDuration / 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setFading(true);
            setTimeout(() => onComplete(), 600);
          }, 400);
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  useEffect(() => {
    const msgInterval = Math.floor(100 / BOOT_MESSAGES.length);
    const newIndex = Math.floor(progress / msgInterval);
    const clampedIndex = Math.min(newIndex, BOOT_MESSAGES.length - 1);

    if (clampedIndex > messageIndex) {
      setMessageIndex(clampedIndex);
      setDisplayedMessages((prev) => {
        const newMessages = [...prev];
        for (let i = prev.length; i <= clampedIndex; i++) {
          if (BOOT_MESSAGES[i]) newMessages.push(BOOT_MESSAGES[i]);
        }
        return newMessages;
      });
    }
  }, [progress, messageIndex]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-arcade-black transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
        }}
      />

      <div className="relative z-10 w-full max-w-xl px-6 py-8">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1
            className="font-pixel text-arcade-yellow text-lg sm:text-2xl leading-tight animate-text-flicker"
            style={{
              textShadow:
                "0 0 8px #FFD700, 0 0 16px #FFD700, 0 0 32px rgba(255,215,0,0.4)",
            }}
          >
            813 RECORDS
          </h1>
          <p className="font-terminal text-arcade-white text-xl mt-2 opacity-60">
            SYSTEM BOOT SEQUENCE
          </p>
        </div>

        {/* Boot log terminal */}
        <div
          className="bg-black border-2 border-arcade-yellow p-4 mb-6 font-terminal text-arcade-green text-base"
          style={{ minHeight: "220px" }}
        >
          <div className="text-arcade-yellow text-xs font-pixel mb-3">
            C:\813RECORDS&gt; BOOT.EXE
          </div>
          {displayedMessages.map((msg, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mb-1"
              style={{
                animation: `fadeInUp 0.3s ease-out ${i * 0.05}s both`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-arcade-yellow">{">"}</span>
              <span className={i === displayedMessages.length - 1 ? "text-white" : "text-arcade-green"}>
                {msg}
              </span>
              {i === displayedMessages.length - 1 && progress < 100 && (
                <span className="animate-blink">_</span>
              )}
              {i === displayedMessages.length - 1 && progress >= 100 && (
                <span className="text-arcade-yellow ml-2">[OK]</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-pixel text-arcade-yellow text-xs">
              LOADING...
            </span>
            <span
              className="font-pixel text-arcade-yellow text-xs"
              style={{
                textShadow: "0 0 8px #FFD700",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Pixel dots */}
        <div className="flex justify-center gap-3 mt-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-arcade-yellow"
              style={{
                opacity: progress > i * 20 ? 1 : 0.2,
                boxShadow: progress > i * 20 ? "0 0 6px #FFD700" : "none",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 font-pixel text-arcade-yellow text-xs opacity-40">
        VER 1.0
      </div>
      <div className="absolute top-4 right-4 font-pixel text-arcade-yellow text-xs opacity-40">
        EST. 2022
      </div>
      <div className="absolute bottom-4 left-4 font-pixel text-arcade-yellow text-xs opacity-40">
        TAMPA, FL
      </div>
      <div className="absolute bottom-4 right-4 font-pixel text-arcade-yellow text-xs opacity-40">
        813
      </div>
    </div>
  );
}
