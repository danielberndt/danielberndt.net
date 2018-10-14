module.exports = {
  siteMetadata: {
    title: "Daniel Berndt - Web Developer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "danielberndt.net",
        short_name: "dberndt",
        start_url: "/",
        background_color: "#18363a",
        theme_color: "#63b2bd",
        display: "minimal-ui",
        icon: "./src/images/daniel-round.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `@danielberndt/gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
              withWebp: true,
            },
          },
        ],
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/MdxLayout.js"),
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-emotion",
      options:
        process.env.NODE_ENV === "development"
          ? {
              sourceMap: true,
              autoLabel: true,
              labelFormat: "[filename]--[local]",
            }
          : {hoist: true},
    },
  ],
};
