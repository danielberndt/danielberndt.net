import {style, styleVariants, createVar} from "@vanilla-extract/css";
import {lineHeights, media} from "./tokens";
import {styleArray} from "./css-utils";
import {sizeThemeVars} from "./themes/size-themes.css";

const spaceMap = {
  0: 0,
  1: sizeThemeVars.space[4],
  2: sizeThemeVars.space[8],
  3: sizeThemeVars.space[12],
  4: sizeThemeVars.space[16],
  5: sizeThemeVars.space[24],
  6: sizeThemeVars.space[32],
  7: sizeThemeVars.space[48],
  8: sizeThemeVars.space[64],
  9: sizeThemeVars.space[96],
} as const;

const positions = ["-1px", "0", "16px", "100%"] as const;

const textCalcVars = {
  textSize: createVar(),
  lineHeight: createVar(),
};

const smoothMacScroll = style({WebkitOverflowScrolling: "touch"});

const baseStyles = {
  // Layout
  position: styleArray(["relative", "absolute", "fixed", "sticky"], (val) => ({position: val})),
  display: styleArray(
    ["block", "none", "flex", "inline-block", "inline", "inline-flex", "grid"],
    (val) => ({
      display: val,
    })
  ),
  overflowY: {
    auto: style([smoothMacScroll, {overflowY: "auto"}]),
    ...styleArray(["hidden"], (val) => ({overflowY: val})),
  },
  overflowX: {
    auto: style([smoothMacScroll, {overflowX: "auto"}]),
    ...styleArray(["hidden"], (val) => ({overflowX: val})),
  },

  // Flex
  align: styleVariants(
    {start: "flex-start", center: "center", end: "flex-end", baseline: "baseline"},
    (val) => ({alignItems: val})
  ),
  justify: styleVariants({start: "flex-start", center: "center", end: "flex-end"}, (val) => ({
    justifyContent: val,
  })),
  flexDir: styleArray(["column", "row"], (val) => ({flexDirection: val})),
  flex: styleArray(["auto", "none"], (val) => ({flex: val})),
  wrap: {true: style({flexWrap: "wrap"})},

  // Sizes and spaces
  sp: styleVariants(spaceMap, (v) => ({gap: v})),

  pt: styleVariants(spaceMap, (v) => ({paddingTop: v})),
  pl: styleVariants(spaceMap, (v) => ({paddingLeft: v})),
  pr: styleVariants(spaceMap, (v) => ({paddingRight: v})),
  pb: styleVariants(spaceMap, (v) => ({paddingBottom: v})),

  mt: styleArray(["auto"], (v) => ({marginTop: v})),
  ml: styleArray(["auto"], (v) => ({marginLeft: v})),
  mr: styleArray(["auto"], (v) => ({marginRight: v})),
  mb: styleArray(["auto"], (v) => ({marginBottom: v})),

  width: styleArray(["100%", "1em", "50rem"], (v) => ({width: v})),
  height: styleArray(["100%", "1em", "0"], (v) => ({height: v})),

  minWidth: styleArray(["0", "100%"], (v) => ({minWidth: v})),
  minHeight: styleArray(["0", "100%"], (v) => ({minHeight: v})),

  maxWidth: styleArray(["0", "100%"], (v) => ({maxWidth: v})),

  setSizeVar: styleVariants(sizeThemeVars.fontSize, (val) => ({
    vars: {[textCalcVars.textSize]: val},
  })),
  setLineHeightVar: styleVariants(lineHeights, (val) => ({
    vars: {[textCalcVars.lineHeight]: val},
  })),
  // minTextLineHeight: styleArray([1], (val) => ({
  //   minHeight: calc(textCalcVars.textSize)
  //     .multiply(textCalcVars.lineHeight)
  //     .multiply(val)
  //     .toString(),
  // })),

  top: styleArray(positions, (v) => ({top: v})),
  right: styleArray(positions, (v) => ({right: v})),
  bottom: styleArray(positions, (v) => ({bottom: v})),
  left: styleArray(positions, (v) => ({left: v})),

  order: styleArray(["0", "1"], (v) => ({order: v})),
};

const mediaStyles = {
  sm_pr: styleVariants(spaceMap, (v) => ({"@media": {[media.sm]: {paddingRight: v}}})),
  sm_pl: styleVariants(spaceMap, (v) => ({"@media": {[media.sm]: {paddingLeft: v}}})),
};

export const layoutStyles = {
  ...baseStyles,
  ...mediaStyles,

  relative: {true: baseStyles.position.relative},
  absolute: {true: baseStyles.position.absolute},

  px: styleVariants(spaceMap, (_, key) => [baseStyles.pl[key], baseStyles.pr[key]]),
  py: styleVariants(spaceMap, (_, key) => [baseStyles.pt[key], baseStyles.pb[key]]),
  pa: styleVariants(spaceMap, (_, key) => [
    baseStyles.pl[key],
    baseStyles.pr[key],
    baseStyles.pt[key],
    baseStyles.pb[key],
  ]),

  sm_px: styleVariants(spaceMap, (_, key) => [mediaStyles.sm_pl[key], mediaStyles.sm_pr[key]]),

  overflow: styleArray(["auto", "hidden"], (key) => [
    baseStyles.overflowX[key],
    baseStyles.overflowY[key],
  ]),

  inset: styleArray(positions, (key) => [
    baseStyles.top[key],
    baseStyles.right[key],
    baseStyles.bottom[key],
    baseStyles.left[key],
  ]),
};
