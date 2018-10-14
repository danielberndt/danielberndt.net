import React from "react";
import Layout from "./Layout";
import {Link} from "gatsby";
import {MDXProvider} from "@mdx-js/tag";

const ExternalOrInternalLink = ({href, children, ...rest}) =>
  href.indexOf("http") === 0 ? (
    <a href={href} rel="noreferrer noopener" target="_blank" {...rest}>
      {children}
    </a>
  ) : (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );

const MdxLayout = ({children, pageContext, ...props}) => (
  <Layout title={pageContext.frontmatter.title} lang={pageContext.frontmatter.lang} {...props}>
    <MDXProvider
      components={{
        a: ExternalOrInternalLink,
      }}
    >
      {children}
    </MDXProvider>
  </Layout>
);

export default MdxLayout;
