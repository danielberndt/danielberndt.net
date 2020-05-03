import {style} from "treat";
import {breakPoints} from "../style/breakpoints";

export const codeStyles = {
  base: style({
    selectors: {
      '&, &[class*="language-"]': {
        fontSize: "1rem",
      },
    },
    "@media": {
      [breakPoints.small]: {
        selectors: {
          '&, &[class*="language-"]': {
            fontSize: "calc(0.3rem + 1.5vw)",
          },
        },
      },
    },
  }),
};
