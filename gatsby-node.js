const path = require("path");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                      relativeDirectory
                    }
                  }
                  frontmatter {
                    title
                    createdAt
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.error(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({node}) => {
          const pathParts = ["blog", node.parent.relativeDirectory, node.parent.name];
          createPage({
            path: `/${pathParts.join("/")}/`,
            component: componentWithMDXScope(
              path.resolve("./src/components/MdxBlogPostLayout.js"),
              node.code.scope,
              __dirname
            ),
            context: {
              type: "blog",
              id: node.id,
              ...node.frontmatter,
            },
          });
        });
      })
    );
  });
};
