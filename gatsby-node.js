const path = require("path");
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`});
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(
    `
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
                }
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    throw new Error(result.errors);
  }
  const posts = result.data.blogPosts.edges;

  posts.forEach(({node}) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve(`./src/components/BlogPostLayout.js`),
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
    });
  });
};
