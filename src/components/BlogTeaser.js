import React from "react";
import {StaticQuery, graphql} from "gatsby";
import styled from "react-emotion";
import {H2, H3, Overline, Link} from "../style/typo";
import {longFormat} from "../utils/date";

const query = graphql`
  {
    BlogPosts: allSitePage(filter: {context: {type: {eq: "blog"}}}) {
      edges {
        node {
          path
          context {
            id
            title
            createdAt
          }
        }
      }
    }
  }
`;

const PreviewContainer = styled("div")({
  ":not(:last-child)": {
    marginBottom: "2rem",
  },
});

const Preview = ({post}) => (
  <PreviewContainer>
    <Overline>{longFormat(post.context.createdAt)}</Overline>
    <H3>
      <Link href={post.path}>{post.context.title}</Link>
    </H3>
  </PreviewContainer>
);

const BlogTeaser = () => (
  <StaticQuery query={query}>
    {({BlogPosts}) => (
      <React.Fragment>
        <H2>Latest Posts</H2>
        <div css={{marginBottom: "5rem"}}>
          {BlogPosts.edges.map(({node}) => (
            <Preview key={node.context.id} post={node} />
          ))}
        </div>
      </React.Fragment>
    )}
  </StaticQuery>
);

export default BlogTeaser;
