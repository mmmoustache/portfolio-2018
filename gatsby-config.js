module.exports = {
  siteMetadata: {
    title: 'Site Title',
    description: 'Test description',
  },
  pathPrefix: "/portfolio-2018",
  plugins: [
    'gatsby-plugin-react-next', // enables react 16 features
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/data/projects/`,
      },
    },
  ],
}
