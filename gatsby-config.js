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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
  ],
  siteMetadata: {
    title: 'mark-05-05-2021',
  },
};
