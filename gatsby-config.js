module.exports = {
  siteMetadata: {
    title: `Gossip Girl`,
    description: `The Site ABOUT the Software developer elite, FOR the Software developer elite and BY the Software developer elite!`,
    author: `@likeOMGitsFEDAY`,
  },
  plugins: [
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
        name: `gossipgirl on gatsby`,
        short_name: `gossipgirl`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ggkiss.png`,
      },
    },
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:100,300,400,700`]
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
