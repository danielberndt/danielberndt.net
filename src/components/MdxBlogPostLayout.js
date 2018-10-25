import React from "react";
import {Link as GatsbyLink, graphql} from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import {MDXProvider} from "@mdx-js/tag";
import {Link, SmallHero, H1, Overline, BodyText, H2, H3, Pre, Ul, Li, Hr} from "../style/typo";
import {longFormat} from "../utils/date";
import {Col} from "../style/basics";
import Layout from "./Layout";
import {Code} from "./Code";

const mb2 = {":not(:last-child)": {marginBottom: "2rem"}};

const components = {
  a: Link,
  h1: p => <H1 css={mb2} {...p} />,
  h2: p => <H2 css={{marginTop: "3rem", ...mb2}} {...p} />,
  h3: p => <H3 css={mb2} {...p} />,
  p: BodyText,
  pre: p => <Pre css={mb2} {...p} />,
  code: p => <Code {...p} />,
  ul: Ul,
  li: Li,
};

const MdxBlogPostLayout = ({pageContext, data}) => (
  <Layout title={pageContext.title}>
    <MDXProvider components={components}>
      <React.Fragment>
        <SmallHero as={GatsbyLink} to="/">
          Daniel Berndt
        </SmallHero>
        <Overline>{longFormat(pageContext.createdAt)}</Overline>
        <H1 css={{marginBottom: "3rem"}}>{pageContext.title}</H1>
        <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
        <Hr css={{marginTop: "5rem"}} />
        <BodyText>
          If you liked what you have read, you might want to{" "}
          <Link href="https://twitter.com/D40B">Follow me on Twitter</Link> to keep up to date :)
        </BodyText>
        <Col css={{marginTop: "3rem"}}>
          <SmallHero css={{margin: "0 auto"}} as={GatsbyLink} to="/">
            Home
          </SmallHero>
        </Col>
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
