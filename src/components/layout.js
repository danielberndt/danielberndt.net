import React from "react";
import Helmet from "react-helmet";
import {StaticQuery, graphql} from "gatsby";
import styled from "react-emotion";
import "../style/base-style";
import {breakPoints} from "../style/breakpoints";

const Outer = styled("div")({
  height: "100vh",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(121deg, #f0f 0%, #0ff 100%)",
});

const Inner = styled("div")({
  flex: "auto",
  position: "relative",
  backgroundColor: "#fff",
  borderTop: `1px solid #fff`,
  borderBottom: `1px solid #fff`,
  boxShadow: "0 0 3rem -0.5rem rgba(0,0,0,0.8)",
});

const ScrollContent = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "auto",
  padding: "3rem 3rem 6rem",
  "::-webkit-scrollbar": {
    width: "0.4rem",
    height: "0.4rem",
  },
  "::-webkit-scrollbar-thumb": {
    background: "linear-gradient(181deg, #f5f 0%, #5ff 100%)",
  },
  [breakPoints.mini]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

const Layout = ({children, title, lang}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            content
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
        <Inner>
          <ScrollContent lang={lang}>{children}</ScrollContent>
        </Inner>
      </Outer>
    )}
  />
);

export default Layout;
