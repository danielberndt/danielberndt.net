import React from "react";
import {Link as GatsbyLink, graphql} from "gatsby";
import {longFormat} from "../utils/date";
import Layout from "./Layout";
import {Code} from "./Code";
import toH from "hast-to-hyperscript";
import Col from "../style/Col";
import {SmallHero, Overline, H1, Hr, Link, BorderHeading} from "../style/typo";
import Text from "../style/Text";
import {markdownBody} from "../style/typo.treat";

const components = {
  a: Link,
  h2: BorderHeading,
  code: Code,
};

const htmlAstToReact = (node) => {
  const h = (name, props, children) =>
    React.createElement(components[name] || name, props, children);

  let result = toH(h, node);

  if (node.type === "root") {
    if (
      result.type === "div" &&
      (node.children.length !== 1 || node.children[0].type !== "element")
    ) {
      result = result.props.children;
    } else {
      result = [result];
    }

    return <>{result}</>;
  }

  return result;
};

const MdxBlogPostLayout = ({data}) => {
  const {htmlAst, frontmatter} = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <Col sp={5}>
        <Col align="start">
          <SmallHero as={GatsbyLink} to="/">
            Daniel Berndt
          </SmallHero>
        </Col>
        <Col>
          <Overline>{longFormat(new Date(frontmatter.createdAt))}</Overline>
          <div className={markdownBody}>
            <H1>{frontmatter.title}</H1>
            {htmlAstToReact(htmlAst)}
          </div>
        </Col>
        <Hr />
        <Text>
          If you liked what you have read, you might want to{" "}
          <Link href="https://twitter.com/D40B">Follow me on Twitter</Link> to keep up to date :)
        </Text>
        <Col align="center">
          <SmallHero as={GatsbyLink} to="/">
            Home
          </SmallHero>
        </Col>
      </Col>
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
