import {style, styleVariants} from "@vanilla-extract/css";
import {lineHeights} from "./tokens";
import {styleArray} from "./css-utils";
import {sizeThemeVars} from "./themes/size-themes.css";
import {layoutStyles} from "./layout.css";

const baseStyles = {
  textTransform: {
    none: style({textTransform: "none"}),
    uppercase: style({textTransform: "uppercase"}),
  },
  letterSpacing: styleVariants({wide: "0.2em"}, (val) => ({letterSpacing: val})),
  textDecoration: styleArray(["none"], (val) => ({textDecoration: val})),
  weight: styleVariants({normal: "normal", bold: "bold", light: 300, heavy: 900}, (val) => ({
    fontWeight: val,
  })),
  textAlign: styleArray(["left", "right", "center"], (val) => ({textAlign: val})),
  variantNumeric: {
    tabularNums: style({fontVariantNumeric: "tabular-nums"}),
  },
  lineHeight: styleVariants(lineHeights, (val) => ({lineHeight: val})),
  size: styleVariants(sizeThemeVars.fontSize, (val) => ({fontSize: val})),
  textOverflow: styleArray(["ellipsis", "clip", "none"], (val) =>
    val !== "none" ? [layoutStyles.overflow.hidden, {textOverflow: val}] : {textOverflow: val}
  ),
  whiteSpace: styleArray(["nowrap"], (val) => ({whiteSpace: val})),
  fontStyle: styleArray(["italic"], (val) => ({fontStyle: val})),
};

export const typeStyles = {
  ...baseStyles,
  bold: {true: baseStyles.weight.bold},
};
