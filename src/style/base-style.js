import "normalize.css/normalize.css";
import {injectGlobal} from "emotion";

injectGlobal`
html {
  box-sizing: border-box;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font-size: 16px;
  letter-spacing: 0.01rem;
}

html[lang] {
  margin-top: 0 !important;
}

@media screen and (min-width: 30em) {
  html {
    font-size: calc(0.88em + 0.4vw);
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
  line-height: 1.4;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, p, ul, ol, pre, code, blockquote, li {
  margin: 0;
  padding: 0;
}
`;
