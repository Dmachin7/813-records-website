"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2022, label: "EST.", suffix: "" },
  { value: 813, label: "AREA CODE", suffix: "" },
  { value: 8, label: "YRS IN THE MAKING", suffix: "+" },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({
  value,
  label,
  suffix,
  isVisible,
  delay,
}: {
  value: number;
  label: string;
  suffix: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(value, isVisible);

  return (
    <div
      className="pixel-card text-center flex-1 min-w-[120px]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div
        className="font-pixel text-arcade-yellow mb-2 stat-number"
        style={{
          fontSize: "clamp(1rem, 3vw, 1.5rem)",
          textShadow: "0 0 8px #FFD700, 0 0 16px rgba(255,215,0,0.4)",
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="font-terminal text-arcade-white text-base tracking-wider opacity-80">
        {label}
      </div>
    </div>
  );
}

export default function About() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-arcade-black py-20 px-4 sm:px-8" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className="mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0s",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-pixel text-arcade-yellow text-xs sm:text-sm">
              &gt; ABOUT_813.EXE
            </span>
            <span className="font-pixel text-arcade-yellow text-xs sm:text-sm animate-blink">
              _
            </span>
          </div>
          <div className="pixel-divider w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <h2
              className="font-pixel text-arcade-white mb-6"
              style={{
                fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
                lineHeight: "2",
              }}
            >
              WHAT IS{" "}
              <span
                className="text-arcade-yellow"
                style={{ textShadow: "0 0 8px #FFD700" }}
              >
                813 RECORDS?
              </span>
            </h2>

            <div className="font-terminal text-arcade-white text-xl space-y-4 leading-relaxed">
              <p>
                813 Records is an independent hip-hop & R&B imprint rooted in
                Tampa, Florida. Founded in 2022, the imprint was built on a
                simple principle:{" "}
                <span className="text-arcade-yellow font-bold">
                  quality over quantity.
                </span>
              </p>
              <p>
                Not a label — an imprint. Every release is fully cleared and
                professionally executed. No trend-chasing, no shortcuts.
                Genuine relationships, real work, and a standard worth
                respecting.
              </p>
              <p>
                813 Records is rooted in Tampa&apos;s culture and the years of
                grinding that made it possible. Artist-led from day one.
                Long-term vision over quick wins.{" "}
                <span className="text-arcade-yellow">That&apos;s the only way this works.</span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["HIP-HOP", "R&B", "INDEPENDENT", "ARTIST-LED", "TAMPA"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-terminal text-sm text-arcade-yellow px-2 py-1"
                    style={{
                      boxShadow:
                        "0 -1px 0 0 #FFD700, 0 1px 0 0 #FFD700, -1px 0 0 0 #FFD700, 1px 0 0 0 #FFD700",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Stat cards */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 0.3s",
            }}
          >
            {/* Big stat cards */}
            <div className="flex gap-4 flex-wrap mb-6">
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  delay={300 + i * 150}
                />
              ))}
            </div>

            {/* Extra info card */}
            <div
              className="pixel-card mt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.8s",
              }}
            >
              <div className="font-pixel text-arcade-yellow text-xs mb-3">
                [IMPRINT_INFO.TXT]
              </div>
              <div className="font-terminal text-arcade-white text-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-arcade-yellow">LOCATION:</span>
                  <span>TAMPA, FLORIDA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-arcade-yellow">FOUNDED:</span>
                  <span>2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-arcade-yellow">GENRE:</span>
                  <span>HIP-HOP / R&B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-arcade-yellow">STATUS:</span>
                  <span className="text-arcade-green">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-arcade-yellow">ARTISTS:</span>
                  <span>TR // PRINCE KREED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
