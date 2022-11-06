import {styleVariants, style, createVar, fallbackVar} from "@vanilla-extract/css";
import {styleArray} from "./css-utils";
import {colorThemeVars as cols} from "./themes/color-themes.css";
import {sizeThemeVars} from "./themes/size-themes.css";

const withBorder = style({borderStyle: "solid"});

export const transitions = {
  colors: style({
    transitionProperty: "background-color, border-color, color, fill, stroke, box-shadow, opacity",
    transitionDuration: "0.15s",
  }),
  transforms: style({
    transitionProperty: "transform",
    transitionDuration: "0.15s",
  }),
  transformAndColors: style({
    transitionProperty:
      "background-color, border-color, color, fill, stroke, box-shadow, opacity, transform",
    transitionDuration: "0.15s",
  }),
};

const bgAlphaVar = createVar();

const scrollbarVars = {
  widthWord: createVar(),
  widthPx: createVar(),
};

export const decorationStyles = {
  bg: styleVariants(cols.bgAsRgb, (val) => ({
    backgroundColor: `rgba(${val}, ${fallbackVar(bgAlphaVar, "1")})`,
  })),
  bgAlpha: styleVariants({"5%": "0.05", "10%": "0.1", "80%": "0.8", "95%": "0.95"}, (val) => ({
    vars: {[bgAlphaVar]: val},
  })),
  color: styleVariants(cols.text, (v) => ({color: v})),
  hoverColor: styleVariants(cols.hoverText, (v) => [transitions.colors, {":hover": {color: v}}]),
  borderWidth: styleArray([0, 1, 2], (val) =>
    val ? [withBorder, {borderWidth: val}] : {borderWidth: val}
  ),
  borderTopWidth: styleArray([0, 1, 2], (val) =>
    val ? [withBorder, {borderTopWidth: val}] : {borderTopWidth: val}
  ),
  borderBottomWidth: styleArray([0, 1, 2], (val) =>
    val ? [withBorder, {borderBottomWidth: val}] : {borderBottomWidth: val}
  ),
  borderLeftWidth: styleArray([0, 1, 2], (val) =>
    val ? [withBorder, {borderLeftWidth: val}] : {borderLeftWidth: val}
  ),
  borderRightWidth: styleArray([0, 1, 2], (val) =>
    val ? [withBorder, {borderRightWidth: val}] : {borderRightWidth: val}
  ),
  borderColor: styleVariants(cols.border, (val) => ({borderColor: val})),
  rounded: styleVariants(
    {
      sm: sizeThemeVars.space[4],
      md: sizeThemeVars.space[8],
      full: "9999rem",
    },
    (v) => ({borderRadius: v})
  ),
  roundedTop: styleVariants(
    {
      sm: sizeThemeVars.space[4],
      md: sizeThemeVars.space[8],
    },
    (v) => ({borderRadius: `${v} ${v} 0 0`})
  ),
  roundedBottom: styleVariants(
    {
      sm: sizeThemeVars.space[4],
      md: sizeThemeVars.space[8],
    },
    (v) => ({borderRadius: `0 0 ${v} ${v}`})
  ),
  roundedLeft: styleVariants(
    {
      sm: sizeThemeVars.space[4],
      md: sizeThemeVars.space[8],
    },
    (v) => ({borderRadius: `${v} 0 0 ${v}`})
  ),
  roundedRight: styleVariants(
    {
      sm: sizeThemeVars.space[4],
      md: sizeThemeVars.space[8],
    },
    (v) => ({borderRadius: `0 ${v} ${v} 0`})
  ),

  elevation: {
    100: style({boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(0, 0, 0, 0.08)`}),
    200: style({boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 32px rgba(0, 0, 0, 0.08)`}),
    300: style({boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2), 0px 0px 48px rgba(0, 0, 0, 0.2)`}),
  },

  prettyScrollBar: {
    true: style({
      vars: {[scrollbarVars.widthPx]: "8px", [scrollbarVars.widthWord]: "thin"},
      "@media": {
        "(hover: hover)": {
          scrollbarWidth: scrollbarVars.widthWord,
          selectors: {
            "&::-webkit-scrollbar": {
              width: "0.4rem",
              height: "0.4rem",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "linear-gradient(181deg, #f5f 0%, #5ff 100%)",
              borderRadius: 2,
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(27, 31, 45, 0.07)",
            },
          },
        },
      },
    }),
    setWide: style({
      vars: {[scrollbarVars.widthPx]: "16px", [scrollbarVars.widthWord]: "wide"},
    }),
  },
};
