import React from "react";
import Layout from "./Layout";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import {MDXProvider} from "@mdx-js/tag";
import {Link, SmallHero, H1, Overline, BodyText, H2, H3, Pre} from "../style/typo";
import {Link as GatsbyLink, graphql} from "gatsby";
import {longFormat} from "../utils/date";
import {Code} from "./Code";

const components = {
  a: Link,
  h1: p => <H1 css={{":not(:last-child)": {marginBottom: "2rem"}}} {...p} />,
  h2: p => <H2 css={{":not(:last-child)": {marginBottom: "2rem"}}} {...p} />,
  h3: p => <H3 css={{":not(:last-child)": {marginBottom: "2rem"}}} {...p} />,
  p: BodyText,
  pre: Pre,
  code: p => <Code {...p} />,
};

const MdxBlogPostLayout = ({pageContext, data}) =>
  console.log(data.mdx.code.body) || (
    <Layout title={pageContext.title}>
      <MDXProvider components={components}>
        <React.Fragment>
          <SmallHero as={GatsbyLink} to="/">
            Daniel's Blog
          </SmallHero>
          <Overline>{longFormat(pageContext.createdAt)}</Overline>
          <H1 css={{marginBottom: "3rem"}}>{pageContext.title}</H1>
          <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
        </React.Fragment>
      </MDXProvider>
    </Layout>
  );

// reopen https://github.com/gatsbyjs/gatsby/issues/7379 showcasing

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      id
      code {
        body
      }
    }
  }
`;

export default MdxBlogPostLayout;
