import {globalStyle} from "treat";

globalStyle("html", {
  boxSizing: "border-box",
  transitionDuration: "0.15s",
  transitionTimingFunction: "ease-out",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  fontSize: "16px",
  letterSpacing: "0.01rem",
  "@media": {
    "screen and (min-width: 30em)": {
      fontSize: "calc(0.88em + 0.4vw)",
    },
  },
});

globalStyle("*, *:before, *:after", {
  boxSizing: "inherit",
  transitionDuration: "inherit",
  transitionTimingFunction: "inherit",
  transitionProperty: "none",
  backgroundSize: "inherit",
  backgroundPosition: "inherit",
  backgroundRepeat: "inherit",
});

globalStyle("body", {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  margin: 0,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  lineHeight: 1.4,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("h1, h2, h3, h4, h5, h6, p, ul, ol, pre, code, blockquote, li", {
  margin: "0",
  padding: "0",
});
