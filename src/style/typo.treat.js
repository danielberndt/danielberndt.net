import {style, globalStyle} from "treat";
import {breakPoints} from "./breakpoints";
import colors from "./colors";

export const heroStyles = {
  base: style({
    display: "inline-block",
    background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
    color: "#fff",
    padding: "0.25rem 2rem",
    lineHeight: 1.1,
    textTransform: "uppercase",
    fontStyle: "italic",
    fontWeight: 900,
    letterSpacing: "-0.05em",
    boxShadow: "0 0 1.5rem -0.5rem rgba(0,0,0,0.8) inset",
    textShadow: "0 0 1px #000",
    wordBreak: "break-word",
  }),
  outerHero: style({
    "@media": {
      [breakPoints.mini]: {
        textAlign: "center",
      },
    },
  }),
  innerHero: style({
    padding: "0.25rem 2rem",
    fontSize: "5rem",
    "@media": {
      [breakPoints.mini]: {
        fontSize: "calc(1rem + 10vw)",
      },
    },
  }),
  innerSmallHero: style({
    padding: "0.5rem 2rem 0.4rem",
    fontSize: "1.5rem",
    "@media": {
      [breakPoints.mini]: {
        fontSize: "calc(0.7rem + 3vw)",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      },
    },
  }),
};

export const typoStyles = {
  h1: style({
    fontSize: "2.5rem",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    "@media": {
      [breakPoints.mini]: {
        fontSize: "calc(0.4rem + 6vw)",
      },
    },
  }),
  borderHeading: {
    border: style({
      display: "inline-block",
      background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
      padding: "0.3rem",
      fontSize: 1,
    }),
    inner: style({
      display: "inline-block",
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "2rem",
      padding: "0.5rem 1.5rem",
      lineHeight: 1.1,
      textTransform: "uppercase",
      fontStyle: "italic",
      fontWeight: 300,
      letterSpacing: "0.2em",
      wordBreak: "break-word",
      "@media": {
        [breakPoints.mini]: {
          fontSize: "calc(0.2rem + 4vw)",
        },
      },
    }),
  },
  h3: style({
    fontSize: "1.5rem",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  }),
  link: style({
    display: "inline",
    fontWeight: 900,
    textDecoration: "none",
    background: "linear-gradient(90deg, #f0f 0%, #0ff 100%)",
    backgroundRepeat: "no-repeat",
    padding: 2,
    margin: -2,
    backgroundPosition: "0 100%",
    backgroundSize: "100% 2px",
    transitionDuration: "160ms",
    transitionProperty: "background, color",
    ":hover": {
      background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
      color: "#fff",
      textShadow: "0 0 1px #000",
      backgroundSize: "100% 100%",
    },
  }),
  overline: style({
    fontSize: "0.8rem",
    textTransform: "uppercase",
    fontStyle: "italic",
    color: colors.lightGray,
  }),
  hr: style({
    border: 0,
    height: 2,
    width: "100%",
    backgroundImage: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
  }),
};

export const markdownBody = style({
  hyphens: "auto",
});

globalStyle(`${markdownBody} > * + *`, {
  marginTop: "2rem",
});

globalStyle(`${markdownBody} > h1 + p`, {
  marginTop: "3rem",
});

globalStyle(`${markdownBody} > * + h2`, {
  marginTop: "4rem",
});

globalStyle(`${markdownBody} ul`, {
  paddingLeft: "1rem",
});

globalStyle(`${markdownBody} ul > * + *, ${markdownBody} ol > * + *`, {
  marginTop: "1.5rem",
});

globalStyle(`${markdownBody} li > * + *`, {
  marginTop: "1rem",
});

globalStyle(`${markdownBody} pre`, {
  overflowX: "auto",
  border: "1px solid #f0f",
  padding: "1rem 2rem",
  backgroundColor: "#fff",
  "@media": {
    [breakPoints.small]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    [breakPoints.mini]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      marginLeft: "-0.5rem",
      marginRight: "-0.5rem",
    },
  },
});

globalStyle(`${markdownBody} li`, {});
