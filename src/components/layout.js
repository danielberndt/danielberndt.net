import React from "react";
import Helmet from "react-helmet";
import {StaticQuery, graphql} from "gatsby";
import styled from "react-emotion";
import "../style/base-style";
import {breakPoints} from "../style/breakpoints";

const Outer = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const OuterContent = styled("div")({
  padding: "4rem 3rem 6rem",
  flex: "auto",
  [breakPoints.mini]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

const InnerContent = styled("div")({
  maxWidth: "50rem",
  margin: "0 auto",
});

const Footer = styled("div")({
  fontSize: "0.8rem",
  textAlign: "center",
  marginTop: "2rem",
  padding: "1rem 2rem",
  backgroundColor: "rgba(0,0,0,0.5)",
  boxShadow: "0 2rem 1rem -2rem rgba(0,0,0,0.5) inset",
});

const FooterLink = styled("a")({
  textDecoration: "none",
  color: "rgba(255,255,255,0.5)",
  "&:hover": {color: "rgba(255,255,255,0.8)"},
});

const Layout = ({children, title, lang}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Outer>
        <Helmet
          title={title || data.site.siteMetadata.title}
          meta={[{name: "description", content: data.site.siteMetadata.content}]}
          htmlAttributes={{lang: "en"}}
        />
        <OuterContent>
          <InnerContent lang={lang}>{children}</InnerContent>
        </OuterContent>
        <Footer>
          <FooterLink href="https://www.hu-berlin.de/de/hu/impressum/datenschutzerklaerung">
            Datenschutzerklärung
          </FooterLink>
        </Footer>
      </Outer>
    )}
  />
);

export default Layout;
