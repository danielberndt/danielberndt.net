require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Daniel Berndt - Web Developer",
    content: "This is the portfolio page of Daniel Berndt. Web Developer based in Berlin.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "danielberndt.net",
        background_color: "#707",
        theme_color: "#707",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-mdx`,
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
          default: require.resolve("./src/components/MdxPageLayout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPost`,
        path: `${__dirname}/src/blog/`,
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
