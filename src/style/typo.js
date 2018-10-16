import React from "react";
import styled from "react-emotion";
import {breakPoints} from "./breakpoints";

const defaultPadding = {
  marginLeft: "2rem",
  marginRight: "2rem",
  [breakPoints.mini]: {
    marginLeft: 0,
    marginRight: 0,
  },
};

const OuterHero = styled("div")({
  marginBottom: "2rem",
  [breakPoints.mini]: {
    textAlign: "center",
  },
});

const InnerHero = styled("span")({
  display: "inline-block",
  background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
  color: "#fff",
  fontSize: "5rem",
  padding: "0.25rem 2rem",
  lineHeight: 1.1,
  textTransform: "uppercase",
  fontStyle: "italic",
  fontWeight: 900,
  letterSpacing: "-0.05em",
  boxShadow: "0 0 1.5rem -0.5rem rgba(0,0,0,0.8) inset",
  textShadow: "0 0 1px #000",
  wordBreak: "break-word",
  [breakPoints.mini]: {
    fontSize: ["3rem", "calc(1rem + 10vw)"],
  },
});

export const Hero = ({children, ...rest}) => (
  <OuterHero {...rest}>
    <InnerHero>{children}</InnerHero>
  </OuterHero>
);

const Border = styled("div")({
  display: "inline-block",
  background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
  padding: "0.3rem",
  fontSize: 1,
});

const InnerH2 = styled("span")({
  display: "inline-block",
  backgroundColor: "#fff",
  color: "#000",
  fontSize: "2rem",
  padding: "0.5rem 1.5rem",
  lineHeight: 1.1,
  textTransform: "uppercase",
  fontStyle: "italic",
  fontWeight: 300,
  letterSpacing: "0.2em",
  wordBreak: "break-word",
  [breakPoints.mini]: {
    fontSize: ["1.5rem", "calc(0.2rem + 5vw)"],
  },
});

export const H2 = ({children, ...rest}) => (
  <h2 css={{marginBottom: "2rem"}} {...rest}>
    <Border>
      <InnerH2>{children}</InnerH2>
    </Border>
  </h2>
);

export const H3 = styled("h3")({
  ...defaultPadding,
  fontSize: "1.5rem",
  fontWeight: 900,
  letterSpacing: "-0.02em",
});

export const Link = styled("a")({
  display: "inline",
  fontWeight: 900,
  textDecoration: "none",
  background: "linear-gradient(90deg, #f0f 0%, #0ff 100%)",
  backgroundRepeat: "no-repeat",
  padding: 2,
  margin: -2,
  backgroundPosition: "0 100%",
  backgroundSize: "100% 2px",
  transitionDuration: "160ms",
  transitionProperty: "background, color",

  ":hover": {
    background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
    color: "#fff",
    textShadow: "0 0 1px #000",
    backgroundSize: "100% 100%",
  },
});

export const BodyText = styled("p")({
  ...defaultPadding,
  lineHeight: 1.5,
  ":not(:last-child)": {
    marginBottom: "1rem",
  },
});

export const Overline = styled("div")({
  fontSize: "0.8rem",
  ...defaultPadding,
  textTransform: "uppercase",
  fontStyle: "italic",
});
