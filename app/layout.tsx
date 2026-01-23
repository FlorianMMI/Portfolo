import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MinimalNavigation from "./components/MinimalNavigation";
import MinimalFooter from "./components/MinimalFooter";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Bounissou - Portfolio",
  description: "Portfolio de Florian Bounissou, développeur full stack passionné par le code et les expériences digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="cursor-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] cursor-none`}
      >
        <CustomCursor />
        <SmoothScroll>
          <MinimalNavigation />
          <main>
            {children}
          </main>
          <MinimalFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
