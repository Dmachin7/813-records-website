"use client";

const TICKER_TEXT =
  "\u00a0\u00a0\u00a0813 RECORDS\u00a0//\u00a0TAMPA, FL\u00a0//\u00a0INDEPENDENT IMPRINT\u00a0//\u00a0EST. 2022\u00a0//\u00a0HIP-HOP & R&B\u00a0//\u00a0ARTIST-LED\u00a0//\u00a0QUALITY OVER QUANTITY\u00a0//\u00a0HOME OF TR & PRINCE KREED\u00a0//\u00a0AREA CODE: 813\u00a0//\u00a0TAMPA, FLORIDA\u00a0//\u00a0";

export default function TickerMarquee() {
  return (
    <div className="bg-arcade-yellow overflow-hidden py-2 relative z-40">
      <div className="marquee-container">
        {/* Two copies side-by-side so the scroll appears seamless */}
        <span
          className="font-pixel text-arcade-black text-xs tracking-widest marquee-text"
          aria-hidden="true"
        >
          {TICKER_TEXT}
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
