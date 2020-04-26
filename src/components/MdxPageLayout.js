import React from "react";
import Layout from "./Layout";

const MdxPageLayout = ({children, pageContext, ...props}) => (
  <Layout title={pageContext.frontmatter.title} {...props}>
    {children}
  </Layout>
);

export default MdxPageLayout;
