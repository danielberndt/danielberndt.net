require("dotenv").config();

/* eslint-disable camelcase */

module.exports = {
  siteMetadata: {
    title: "Daniel Berndt - Web Developer",
    content: "This is the portfolio page of Daniel Berndt. Web Developer based in Berlin.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-treat",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "danielberndt.net",
        background_color: "#707",
        theme_color: "#707",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/blog/`,
      },
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
