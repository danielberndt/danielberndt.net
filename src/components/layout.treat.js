import {style} from "treat";
import {breakPoints} from "../style/breakpoints";

export const layoutStyles = {
  outer: style({
    height: "100vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(120deg, #f0f 0%, #0ff 100%)",
  }),
  inner: style({
    flex: "auto",
    position: "relative",
    backgroundColor: "#fff",
    borderTop: `1px solid #fff`,
    borderBottom: `1px solid #fff`,
    boxShadow: "0 0 3rem -0.5rem rgba(0,0,0,0.8)",
  }),
  scrollContent: style({
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll" /* has to be scroll, not auto */,
    WebkitOverflowScrolling: "touch",
    padding: "3rem 3rem 6rem",
    selectors: {
      "&::-webkit-scrollbar": {
        width: "0.4rem",
        height: "0.4rem",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "linear-gradient(181deg, #f5f 0%, #5ff 100%)",
      },
    },
    "@media": {
      [breakPoints.mini]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    },
  }),
  innerScrollContent: style({
    maxWidth: "50rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  }),
};
