import React from "react";
import Layout from "./Layout";
import {MDXProvider} from "@mdx-js/tag";
import {Link} from "../style/typo";

const MdxPageLayout = ({children, pageContext, ...props}) => (
  <Layout title={pageContext.frontmatter.title} lang={pageContext.frontmatter.lang} {...props}>
    <MDXProvider
      components={{
        a: Link,
      }}
    >
      {children}
    </MDXProvider>
  </Layout>
);

export default MdxPageLayout;
