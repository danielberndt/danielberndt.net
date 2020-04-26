import React from "react";
import {Link as GatsbyLink, graphql} from "gatsby";
import {Link, SmallHero, H1, Overline, BodyText, H2, H3, Pre, Ul, Li, Hr} from "../style/typo";
import {longFormat} from "../utils/date";
import {Col} from "../style/basics";
import Layout from "./Layout";
import {Code} from "./Code";
import toH from "hast-to-hyperscript";

const mb2 = {":not(:last-child)": {marginBottom: "2rem"}};

const components = {
  a: Link,
  h1: (p) => <H1 style={mb2} {...p} />,
  h2: (p) => <H2 style={{marginTop: "3rem", ...mb2}} {...p} />,
  h3: (p) => <H3 style={mb2} {...p} />,
  p: BodyText,
  pre: (p) => <Pre style={mb2} {...p} />,
  code: (p) => <Code {...p} />,
  ul: Ul,
  li: Li,
};

const h = (name, props, children) => {
  return React.createElement(components[name] || name, props, children);
};

const MdxBlogPostLayout = ({data}) => {
  const {htmlAst, frontmatter} = data.markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <React.Fragment>
        <SmallHero as={GatsbyLink} to="/">
          Daniel Berndt
        </SmallHero>
        <Overline>{longFormat(new Date(frontmatter.createdAt))}</Overline>
        <H1 style={{marginBottom: "3rem"}}>{frontmatter.title}</H1>
        <div>{toH(h, htmlAst)}</div>
        <Hr style={{marginTop: "5rem"}} />
        <BodyText>
          If you liked what you have read, you might want to{" "}
          <Link href="https://twitter.com/D40B">Follow me on Twitter</Link> to keep up to date :)
        </BodyText>
        <Col style={{marginTop: "3rem"}}>
          <SmallHero style={{margin: "0 auto"}} as={GatsbyLink} to="/">
            Home
          </SmallHero>
        </Col>
      </React.Fragment>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      htmlAst
      frontmatter {
        createdAt
        title
      }
    }
  }
`;

export default MdxBlogPostLayout;
