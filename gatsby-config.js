require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hide and Wild`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `kate-mills`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_TEST_API,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hide and Wild`,
        short_name: `Hide+Wild`,
        description: `desc`,
        lang: `en`,
        start_url: `/`,
        background_color: `#2d1e1f`,
        theme_color: `#2d1e1f`,
        display: `standalone`, //minimal-ui
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: { purpose: `maskable` },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
