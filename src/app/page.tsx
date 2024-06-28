import { fetchMetadata } from "frames.js/next";
import { DebugLink } from "@/DebugLink";
import { Metadata } from "next";

// TODO: fix postUrl
// const postUrl = `${process.env["HOST"]}/api/otcUrl`;

// MetaData copied and adapted from here: https://github.com/horsefacts/echo-the-dolphin/blob/main/src/app/page.tsx

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AirSwap OTC Frames",
    description: "AirSwap OTC makers can paste OTC URLs for their followers to click in Farcaster",
    openGraph: {
      title: "AirSwap OTC Frames",
      // images: [imageUrl],
    },

    other: {
      ...(await fetchMetadata(
        // provide a full URL to your /frames endpoint
        new URL(
          "/frames",
          process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000"
        )
      )),
      // "fc:frame:image": imageUrl,
      // "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Paste your OTC URL here...",
      "fc:frame:button:1": "Click to upload OTC URL",

    },
  };
}

export default function Page() {
  return (
    <>
      <h1 className="text-lg font-bold">Welcome AirSwap Makers!</h1>
      <h2>Your followers can now discover your OTC orders directly within farcaster!</h2>
      <span>AirSwap x Farcaster <span className="underline font-bold"><DebugLink /></span></span>
    </>
  );
}
