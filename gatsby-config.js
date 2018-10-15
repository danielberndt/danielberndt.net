require("dotenv").config();

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
        short_name: "Daniel",
        start_url: "/",
        background_color: "#f0f",
        theme_color: "#f0f",
        display: "minimal-ui",
        icon: "./src/images/icon.png",
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        head: false, // Puts tracking script in the head instead of the body
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
