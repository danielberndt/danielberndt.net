import {calc} from "@vanilla-extract/css-utils";
import {sizeThemeVars} from "./themes/size-themes.css";

export const lineHeights = {none: "1", tight: "1.125", normal: "1.5"};

export const boxShadowPartials = {
  soft: (color: string, intensity: string) =>
    [
      `0 ${sizeThemeVars.space[4]} ${sizeThemeVars.space[8]}
      rgba(${color},${calc(intensity).multiply(0.05).toString()})`,
      `0 1px 2px
      rgba(${color},${calc(intensity).multiply(0.025).toString()})`,
    ].join(", "),
};

export const media = {
  sm: "screen and (max-width: 30em)",
  md: "screen and (max-width: 45em)",
  lg: "screen and (max-width: 60em)",
  xl: "screen and (max-width: 80em)",
} as const;

export const colors = {
  white: "#fff",
  // via http://www.zonums.com/online/color_converter/
  white_rgb: "255, 255, 255",

  gray100: "#f4f4f5",
  gray200: "#e4e4e7",
  gray300: "#d4d4d8",
  gray400: "#a1a1aa",
  gray500: "#71717a",
  gray600: "#52525b",
  gray700: "#3f3f46",
  gray800: "#27272a",
  gray900: "#18181b",

  gray100_rgb: "244, 244, 245",
  gray200_rgb: "228, 228, 231",
  gray300_rgb: "212, 212, 216",
  gray400_rgb: "161, 161, 170",
  gray500_rgb: "113, 113, 122",
  gray600_rgb: "82, 82, 91",
  gray700_rgb: "63, 63, 70",
  gray800_rgb: "39, 39, 42",
  gray900_rgb: "24, 24, 27",

  green100: "#dcfce7",
  green200: "#bbf7d0",
  green300: "#86efac",
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  green700: "#15803d",
  green800: "#166534",
  green900: "#14532d",

  amber100: "#fef3c7",
  amber200: "#fde68a",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  amber700: "#b45309",
  amber800: "#92400e",
  amber900: "#78350f",

  rose100: "#ffe4e6",
  rose200: "#fecdd3",
  rose300: "#fda4af",
  rose400: "#fb7185",
  rose500: "#f43f5e",
  rose600: "#e11d48",
  rose700: "#be123c",
  rose800: "#9f1239",
  rose900: "#881337",
};
