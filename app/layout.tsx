import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhi's Portfolio",
  description: "A retro Windows 98-era styled portfolio website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${vt323.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}