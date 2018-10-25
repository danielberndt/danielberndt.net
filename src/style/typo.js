import React from "react";
import styled from "react-emotion";
import {Link as GatsbyLink} from "gatsby";
import {breakPoints} from "./breakpoints";

const AsOrSpan = ({as: Comp = "span", ...rest}) => <Comp {...rest} />;

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

const sharedHero = {
  display: "inline-block",
  background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
  color: "#fff",
  padding: "0.25rem 2rem",
  lineHeight: 1.1,
  textTransform: "uppercase",
  fontStyle: "italic",
  fontWeight: 900,
  letterSpacing: "-0.05em",
  boxShadow: "0 0 1.5rem -0.5rem rgba(0,0,0,0.8) inset",
  textShadow: "0 0 1px #000",
  wordBreak: "break-word",
};

const InnerHero = styled("span")(sharedHero, {
  padding: "0.25rem 2rem",
  fontSize: "5rem",
  [breakPoints.mini]: {
    fontSize: ["3rem", "calc(1rem + 10vw)"],
  },
});

export const Hero = ({children, ...rest}) => (
  <OuterHero {...rest}>
    <InnerHero>{children}</InnerHero>
  </OuterHero>
);

const OuterSmallHero = styled("div")({
  marginBottom: "2rem",
  [breakPoints.mini]: {
    textAlign: "center",
  },
});

const InnerSmallHero = styled(AsOrSpan)(sharedHero, {
  padding: "0.5rem 2rem 0.4rem",
  fontSize: "1.5rem",
  [breakPoints.mini]: {
    fontSize: ["1rem", "calc(0.7rem + 3vw)"],
  },
});

export const SmallHero = ({children, as, className, ...rest}) => (
  <OuterSmallHero className={className}>
    <InnerSmallHero as={as} {...rest}>
      {children}
    </InnerSmallHero>
  </OuterSmallHero>
);

export const H1 = styled("h1")({
  ...defaultPadding,
  fontSize: "2.5rem",
  fontWeight: 900,
  letterSpacing: "-0.02em",
  lineHeight: 1.05,
});

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

const ExternalOrInternalLink = ({href, children, ...rest}) =>
  href.indexOf("http") === 0 ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={href} {...rest}>
      {children}
    </GatsbyLink>
  );

export const Link = styled(ExternalOrInternalLink)({
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

export const Pre = styled("pre")({
  overflowX: "auto",
  border: "1px solid #f0f",
  padding: "1rem 2rem",
  backgroundColor: "#fff",
  [breakPoints.small]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  [breakPoints.mini]: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  ":not(:last-child)": {
    marginBottom: "1rem",
  },
});

export const Ul = styled("ul")({
  ...defaultPadding,
  lineHeight: 1.5,
  ":not(:last-child)": {
    marginBottom: "2rem",
  },
});

export const Li = styled("li")({
  lineHeight: 1.5,
  marginLeft: "1em",
  [`& ${BodyText}`]: {
    marginLeft: 0,
    marginRight: 0,
  },
  ":not(:last-child)": {
    marginBottom: "1rem",
  },
});

export const Hr = styled("hr")({
  ...defaultPadding,
  border: 0,
  height: "0.1rem",
  backgroundImage: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
  ":not(:last-child)": {
    marginBottom: "3rem",
  },
});
