import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-terminal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "813 Records | Independent Imprint | Tampa, FL",
  description:
    "Independent hip-hop & R&B imprint based in Tampa, Florida. Artist-led. Est. 2022. Home of TR and Prince Kreed.",
  keywords: ["813 Records", "Tampa", "hip-hop", "R&B", "independent", "imprint", "TR", "Prince Kreed"],
  openGraph: {
    title: "813 Records | Independent Imprint | Tampa, FL",
    description: "Independent hip-hop & R&B imprint. Tampa-based. Artist-led. Est. 2022.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="bg-arcade-black text-arcade-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
