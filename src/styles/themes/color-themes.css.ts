import {createThemeContract, createTheme, style, createGlobalTheme} from "@vanilla-extract/css";
import type {MapLeafNodes} from "@vanilla-extract/private";
import {colors} from "../tokens";
// import {lightButtonVariants} from "../../components/DSButton/DSButtonTheme.css";
// import {lightInputTheme} from "../../components/DSForm/DSInputTheme.css";

export const colorThemeVars = createThemeContract({
  bgAsRgb: {
    foreground: "",
    background: "",
    backdrop: "",
  },

  text: {
    primary: "",
    secondary: "",
  },
  hoverText: {
    link: "",
  },

  border: {
    default: "",
  },

  shadowAsRgb: {
    default: "",
  },

  shadowIntensity: "",
});

type DSTheme = {
  baseTheme: MapLeafNodes<typeof colorThemeVars, string>;
  isDefault?: boolean;
  // buttonVariants: string;
  // inputTheme: string;
};
const createDSTheme = (opts: DSTheme) => {
  if (opts.isDefault) {
    createGlobalTheme(":root", colorThemeVars, opts.baseTheme);
  }
  return style([createTheme(colorThemeVars, opts.baseTheme)]);
};
// style([createTheme(colorThemeVars, opts.baseTheme), opts.buttonVariants, opts.inputTheme]);

export const lightTheme = createDSTheme({
  isDefault: true,
  baseTheme: {
    bgAsRgb: {
      foreground: colors.white_rgb,
      background: colors.gray100_rgb,
      backdrop: colors.gray700_rgb,
    },

    text: {
      primary: colors.gray800,
      secondary: colors.gray600,
    },
    hoverText: {
      link: "#CA25F0",
    },

    border: {
      default: colors.gray200,
    },

    shadowAsRgb: {
      default: colors.gray900_rgb,
    },

    shadowIntensity: "1",
  },
  // buttonVariants: lightButtonVariants,
  // inputTheme: lightInputTheme,
});
