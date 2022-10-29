import {decorationStyles} from "./decoration.css";
import {layoutStyles} from "./layout.css";
import {lightTheme} from "./themes/color-themes.css";
import {typeStyles} from "./type.css";

const dsStyles = {
  ...layoutStyles,
  ...typeStyles,
  ...decorationStyles,

  colorTheme: {light: lightTheme},
};

export default dsStyles;

export type DsStyles = typeof dsStyles;
