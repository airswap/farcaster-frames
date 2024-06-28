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
        // FIXME: query should contain data that validates the user. e.g. fid (?)
        target={{ pathname: "/urlForm", query: { fid: "fid" } }}
      >
        Upload OTC URL
      </Button>,
      // Without query params
      <Button
        action="post"
        // fid should be in query, to prevent malicious users from viewing user's OTC urls
        target={{ pathname: "/urlList", query: { fid: "fid" } }}
      >
        View my OTC URLs
      </Button>,
    ],
  };
});
