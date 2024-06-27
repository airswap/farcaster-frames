/* eslint-disable react/jsx-key */
"use client"
import { useState } from "react";
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handler = frames(async (ctx) => {
  const [otcLink, setOtcLink] = useState<string | undefined>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtcLink(event.target.value);
  };

  const currentUrlState = ctx.state;

  const updatedState = {
    ...currentUrlState,
    url: ctx.pressedButton ? currentUrlState.url.push('OTC URL') : currentUrlState.url
  }

  return {
    image: <div tw="flex"> Enter your OTC link below. A new frame will appear with a list of your OTC links. You can share that frame with your followers and have them fill your orders
    {updatedState.url}
    </div>,
    input: [
      <input type="text" onChange={handleInputChange} placeholder="Enter OTC URL" />
    ],
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/route1", query: { url: otcLink } }}
      >
        Upload a new OTC order link
      </Button>,
      // Without query params
      <Button action="post" target="/route2">
        I want to view my OTC orders
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
