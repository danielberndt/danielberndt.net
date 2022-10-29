import {createVar, keyframes, style} from "@vanilla-extract/css";
import {styleArray} from "../styles/css-utils";
import dsStyles from "../styles/index.css";
import {sizeThemeVars} from "../styles/themes/size-themes.css";
import {colors, media} from "../styles/tokens";

const gradientBottomBorder = style({
  backgroundImage: `linear-gradient(90deg, #f0f, #0ff, #f0f, #0ff, #f0f)`,
  backgroundSize: "400% 2px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% bottom",
});

const vars = {
  mb: createVar(),
  mt: createVar(),
};

const withMb = style({
  selectors: {
    "&:not(:last-child)": {
      marginBottom: vars.mb,
    },
  },
});
const withMt = style({
  selectors: {
    "&:not(:first-child)": {
      marginTop: vars.mt,
    },
  },
});

const mbs = styleArray(["0.5em", "1em", "2em"], (val) => [withMb, {vars: {[vars.mb]: val}}]);
const mts = styleArray(["3em"], (val) => [withMt, {vars: {[vars.mt]: val}}]);

const moveGradient = keyframes({
  "0%": {backgroundPositionX: "100%"},
  "100%": {backgroundPositionX: "33.3333%"},
});

const textContent = style([{}, dsStyles.lineHeight.normal]);

export const fancyBg = style({
  "::before": {
    content: '""',
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "-1rem",
    right: "0.5rem",
    backgroundImage: "linear-gradient(135deg, #f0f 0%, #0ff 100%)",
    borderRadius: sizeThemeVars.space[8],
    transform: "rotate(-1deg)",
  },
  "@media": {
    [media.sm]: {
      "::before": {
        left: "-0.5rem",
        right: "0.25rem",
        transform: "rotate(-2deg)",
      },
    },
  },
});

export const markdownComponentStyles = {
  a: style([
    dsStyles.weight.bold,
    dsStyles.position.relative,
    gradientBottomBorder,
    {
      transition: "background 200ms ease-in-out",

      ":hover": {
        animation: `${moveGradient} 2s infinite linear`,
      },
    },
  ]),
  h1: style([mbs["1em"], dsStyles.weight.heavy]),
  h2: style([mbs["1em"], mts["3em"]]),
  h2Inner: style([
    dsStyles.pb[1],
    dsStyles.weight.light,
    dsStyles.textTransform.uppercase,
    dsStyles.letterSpacing.wide,
    dsStyles.fontStyle.italic,
    dsStyles.size[28],
    gradientBottomBorder,
  ]),
  p: style([textContent, mbs["1em"]]),
  ul: style([mbs["1em"], dsStyles.pl[4]]),
  li: style([textContent, mbs["0.5em"]]),
  pre: style([
    dsStyles.size[14],
    dsStyles.px[5],
    dsStyles.sm_px[3],
    dsStyles.py[3],
    dsStyles.rounded.md,
    dsStyles.position.relative,
    dsStyles.elevation[200],
  ]),
  preContainer: style([mbs["2em"], dsStyles.position.relative, fancyBg]),
  code: style([
    {
      selectors: {
        [`${textContent} > &`]: {
          backgroundColor: colors.gray200,
          color: colors.gray800,
          padding: "1px 0.5em",
          borderRadius: sizeThemeVars.space[4],
        },
      },
    },
  ]),
};
