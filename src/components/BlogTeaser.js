import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {H3, Overline, Link, BorderHeading} from "../style/typo";
import {longFormat} from "../utils/date";
import Col from "../style/Col";

const Preview = ({post}) => (
  <div>
    <Overline>{longFormat(new Date(post.frontmatter.createdAt))}</Overline>
    <H3>
      <Link href={post.fields.slug}>{post.frontmatter.title}</Link>
    </H3>
  </div>
);

const BlogTeaser = () => {
  const {blogPosts} = useStaticQuery(graphql`
    {
      blogPosts: allFile(
        filter: {sourceInstanceName: {eq: "blogPosts"}}
        sort: {fields: childMarkdownRemark___frontmatter___createdAt, order: DESC}
      ) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                createdAt
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Col sp={4}>
      <BorderHeading>Latest Posts</BorderHeading>
      <Col sp={1}>
        {blogPosts.edges.map(({node}) => (
          <Preview key={node.childMarkdownRemark.fields.slug} post={node.childMarkdownRemark} />
        ))}
      </Col>
    </Col>
  );
};

export default BlogTeaser;
