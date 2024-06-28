/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async () => {
  return {
    image: <div tw="flex">Upload new OTC URL</div>,
    buttons: [
      <Button action="post" target="/urlForm">
        Navigate to form
      </Button>,
      <Button action="post" target="/" >
        Go back
      </Button>
    ],
  };
});
