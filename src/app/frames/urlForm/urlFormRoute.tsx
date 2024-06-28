/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    image: <div tw="flex">Upload OTC URL below: {foo}</div>,
    textarea: [<textarea >URL</textarea>],
    buttons: [
      <Button action="post" target="/route2">
        Upload
      </Button>,
    ],
  };
});
