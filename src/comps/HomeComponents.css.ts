import {style} from "@vanilla-extract/css";
import {transitions} from "../styles/decoration.css";
import dsStyles from "../styles/index.css";
import {colors} from "../styles/tokens";

const sharedBoldLink = style([
  dsStyles.fontStyle.italic,
  dsStyles.textTransform.uppercase,
  dsStyles.rounded.md,
  {
    fontWeight: 900,
    letterSpacing: "-0.05em",
    boxShadow: "0 0.05em 0.5rem rgba(0,0,0,0.15) inset, 0 0 1.5rem rgba(0,0,0,0.3) inset",
    textShadow: "0 0 1px #000",
    backgroundImage: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
    color: "#fff",
  },
]);

export const homeComponentStyles = {
  helloH2Inner: style([
    dsStyles.display["inline-block"],
    dsStyles.px[7],
    dsStyles.py[3],
    dsStyles.size[64],
    sharedBoldLink,
    {
      marginBottom: "0.5em",
    },
  ]),

  boldLink: style([dsStyles.size[22], sharedBoldLink, dsStyles.px[5], dsStyles.py[3]]),

  tile: {
    base: style({
      border: `1px solid ${colors.gray200}`,
    }),
    interactive: style([
      transitions.transformAndColors,
      {
        ":hover": {
          borderColor: "#f0f",
          transform: `translate3d(0, -2px, 0)`,
        },
      },
    ]),
  },
};
