import {globalStyle, keyframes} from "@vanilla-extract/css";

globalStyle("html, body", {
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
  background: "#fafafa",
  color: "#444",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  touchAction: "pan-x pan-y",

  "@media": {
    "screen and (min-width: 30em)": {
      fontSize: "calc(0.925em + 0.25vw)",
    },
  },
});

const moveGradient = keyframes({
  "0%": {transform: "translate3d(-50%, -50%, 0) rotate(45deg) scale(1.5)"},
  "100%": {transform: "translate3d(-50%, -50%, 0) rotate(405deg) scale(1.5)"},
});

globalStyle("body", {
  padding: "2.5vmin",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#f0f",
});

globalStyle("body::before", {
  content: '""',
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100vmax",
  height: "100vmax",
  backgroundImage: `linear-gradient(45deg, #f0f 0%, #0ff 100%)`,
  transform: "translate3d(-50%, -50%, 0) rotate(45deg) scale(1.5)",
  //@ts-expect-error
  ...(!process.env.IS_DEV && {
    animation: `${moveGradient} 20s infinite linear`,
  }),
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("img", {
  maxWidth: "100%",
});
globalStyle("a", {
  textDecoration: "inherit",
  color: "inherit",
});
globalStyle("input, button, textarea, select", {
  font: "inherit",
});
globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
  hyphens: "auto",
});
