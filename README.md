# 813 Records Website

Retro arcade-style website for 813 Records — independent hip-hop & R&B imprint based in Tampa, Florida.

**Built with:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Google Fonts (Press Start 2P + VT323)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run Locally

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000)

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect Next.js and configure the build.

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables required.

---

## Project Structure

```
website/
├── app/
│   ├── layout.tsx       # Root layout + Google Fonts
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Retro CSS animations & effects
├── components/
│   ├── LoadingScreen.tsx  # Boot sequence loader (0→100%)
│   ├── Marquee.tsx        # Scrolling yellow ticker
│   ├── Header.tsx         # Sticky nav with neon logo
│   ├── Hero.tsx           # Matrix rain + CRT scanlines hero
│   ├── About.tsx          # Imprint info + count-up stats
│   ├── Artists.tsx        # TR + Prince Kreed cards
│   ├── Releases.tsx       # Release catalog grid
│   └── Footer.tsx         # Social links + branding
├── vercel.json
└── tailwind.config.ts
```

---

## Artists

| Artist | Spotify | Apple Music | Instagram |
|--------|---------|-------------|-----------|
| TR | [Link](https://open.spotify.com/artist/0tH9WH9RrwIiuoNHcUqmXf) | [Link](https://music.apple.com/us/artist/tr/1634826910) | [@tr_tpa](https://www.instagram.com/tr_tpa) |
| Prince Kreed | [Link](https://open.spotify.com/artist/4nbBP1Y7ZGajRoMiBonII8) | [Link](https://music.apple.com/us/artist/prince-kreed/1481045754) | [@prince_kreed](https://www.instagram.com/prince_kreed/) |

---

© 2026 813 Records. Independently Operated.
