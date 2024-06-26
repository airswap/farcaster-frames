import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import Link from "next/link";
import { appURL } from "./utils";
import { DebugLink } from "./components/DebugLink";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Airswap OTC links",
    description: "Enter your AirSwap OTC orders. Let your followers discover trades from within Farcaster.",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  // then, when done, return next frame
  return (
    <div className="p-4">
      Enter your OTC link below. A new frame will appear with a list of your OTC links. You can share that frame with your followers and have them fill your orders
    </div>
  );
}
