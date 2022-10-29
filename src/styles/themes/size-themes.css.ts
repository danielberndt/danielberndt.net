import {createThemeContract, createTheme, createGlobalTheme} from "@vanilla-extract/css";
import type {MapLeafNodes} from "@vanilla-extract/private";

export const sizeThemeVars = createThemeContract({
  space: {
    4: "",
    8: "",
    12: "",
    16: "",
    24: "",
    32: "",
    48: "",
    64: "",
    96: "",
  },
  fontSize: {
    10: "",
    12: "",
    14: "",
    16: "",
    22: "",
    28: "",
  },
});

const mdThemeVars: MapLeafNodes<typeof sizeThemeVars, string> = {
  space: {
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    32: "32px",
    48: "48px",
    64: "64px",
    96: "96px",
  },
  fontSize: {
    10: `${10 / 16}rem`,
    12: `${12 / 16}rem`,
    14: `${14 / 16}rem`,
    16: `${16 / 16}rem`,
    22: `${22 / 16}rem`,
    28: `${28 / 16}rem`,
  },
};

export const mdTheme = createTheme(sizeThemeVars, mdThemeVars);
createGlobalTheme(":root", sizeThemeVars, mdThemeVars);
