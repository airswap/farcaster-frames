import { createFrames } from "frames.js/next";

type State = {
  url: string[];
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: {
    url: []
    },
  debug: process.env.NODE_ENV === "development",
});
