import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirSwap OTC Frames",
  description: "AirSwap OTC makers can paste OTC URLs for their followers to click in Farcaster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-fit p-4 m-auto text-center`}>{children}</body>
    </html>
  );
}
