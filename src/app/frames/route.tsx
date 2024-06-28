/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

export const GET = frames(async () => {
  return {
    image: <div tw="flex">Welcome AirSwap Makers! Post your OTC URL below</div>,
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/route1", query: { foo: "bar" } }}
      >
        Go to route 1
      </Button>,
      // Without query params
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
    ],
  };
});
