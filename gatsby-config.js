module.exports = {
  plugins: [
    {
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
      resolve: 'gatsby-plugin-material-ui',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
  ],
  siteMetadata: {
    author: '@mlenser',
    description: 'An orderbook comparing XBT to USD',
    title: 'mark-05-05-2021',
  },
};
