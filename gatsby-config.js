module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
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
        icon: "src/images/daniel-round.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
