import "normalize.css/normalize.css";
import {injectGlobal} from "emotion";
import colors from "./colors";

injectGlobal`
html {
  box-sizing: border-box;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font-size: 14px;
  letter-spacing: 0.01rem;
}

html[lang] {
  margin-top: 0 !important;
}

@media screen and (min-width: 50em) {
  html {
    font-size: calc(0.75em + 0.25vw);
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
  transition-duration: inherit;
  transition-timing-function: inherit;
  transition-property: none;
  background-size: inherit;
  background-position: inherit;
  background-repeat: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-color: ${colors.brandDark};
  color: #fff;
  line-height: 1.4;
}

a {
  color: inherit;
  text-decoration: none;
}`;
