import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {H2, H3, Overline, Link} from "../style/typo";
import {longFormat} from "../utils/date";

const PreviewContainer = (props) => <div {...props} />;
//  styled("div")({
//   ":not(:last-child)": {
//     marginBottom: "2rem",
//   },
// });

const Preview = ({post}) => (
  <PreviewContainer>
    <Overline>{longFormat(new Date(post.frontmatter.createdAt))}</Overline>
    <H3>
      <Link href={post.fields.slug}>{post.frontmatter.title}</Link>
    </H3>
  </PreviewContainer>
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
    <>
      <H2>Latest Posts</H2>
      <div style={{marginBottom: "5rem"}}>
        {blogPosts.edges.map(({node}) => (
          <Preview key={node.name} post={node.childMarkdownRemark} />
        ))}
      </div>
    </>
  );
};

export default BlogTeaser;
