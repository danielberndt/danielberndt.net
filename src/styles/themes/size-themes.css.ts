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
    64: "",
  },
});

const mdThemeVars: MapLeafNodes<typeof sizeThemeVars, string> = {
  space: {
    4: `${4 / 16}rem`,
    8: `${8 / 16}rem`,
    12: `${12 / 16}rem`,
    16: `${16 / 16}rem`,
    24: `${24 / 16}rem`,
    32: `${32 / 16}rem`,
    48: `${48 / 16}rem`,
    64: `${64 / 16}rem`,
    96: `${96 / 16}rem`,
  },
  fontSize: {
    10: `${10 / 16}rem`,
    12: `${12 / 16}rem`,
    14: `${14 / 16}rem`,
    16: `${16 / 16}rem`,
    22: `${22 / 16}rem`,
    28: `${28 / 16}rem`,
    64: `${64 / 16}rem`,
  },
};

export const mdTheme = createTheme(sizeThemeVars, mdThemeVars);
createGlobalTheme(":root", sizeThemeVars, mdThemeVars);
