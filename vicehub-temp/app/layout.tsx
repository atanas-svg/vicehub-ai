import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViceHub AI - GTA 6 Companion",
  description:
    "ViceHub AI is an independent GTA 6 companion hub with AI help, map tools, vehicles, weapons, money guides and 100% tracking.",
  keywords: [
    "GTA 6",
    "GTA VI",
    "ViceHub",
    "GTA 6 AI",
    "GTA 6 map",
    "GTA 6 vehicles",
    "GTA 6 weapons",
    "GTA 6 money guide",
  ],
  authors: [{ name: "ViceHub AI" }],
  creator: "ViceHub AI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}