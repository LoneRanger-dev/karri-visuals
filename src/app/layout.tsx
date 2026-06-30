import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karri Visuals — Creative Media & Film Production",
  description:
    "Bringing your ideas to life through powerful visuals, creative storytelling and result-driven media solutions. Based in Hyderabad.",
  keywords: [
    "film production",
    "creative media",
    "Hyderabad",
    "video production",
    "advertising",
    "documentary",
    "Karri Visuals",
  ],
  openGraph: {
    title: "Karri Visuals — Creative Media & Film Production",
    description: "We don't just make videos. We tell stories.",
    siteName: "Karri Visuals",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
