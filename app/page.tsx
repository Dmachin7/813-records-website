"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import TickerMarquee from "@/components/Marquee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <TickerMarquee />
        <Header />
        <main>
          <Hero />
          <About />
          <Artists />
          <Releases />
        </main>
        <Footer />
      </div>
    </>
  );
}
