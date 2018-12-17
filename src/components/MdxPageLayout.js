import React from "react";
import {MDXProvider} from "@mdx-js/tag";
import {Link} from "../style/typo";
import Layout from "./Layout";

const MdxPageLayout = ({children, pageContext, ...props}) => (
  <Layout title={pageContext.frontmatter.title} {...props}>
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
