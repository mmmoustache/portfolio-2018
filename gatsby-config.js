module.exports = {
  siteMetadata: {
    title: 'Jack Coventry | Personal Portfolio | Front End Web Developer',
    description: 'Personal portfolio site for Jack Coventry; a front end web developer based in Manchester',
    linkedIn: 'https://www.linkedin.com/in/jack-coventry-713a8811',
    gitHub: 'https://github.com/mmmoustache',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about',
        path: `${__dirname}/src/data/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'navigation',
        path: `${__dirname}/src/data/navigation/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'offline',
        path: `${__dirname}/src/data/offline/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'notFound',
        path: `${__dirname}/src/data/notFound/`,
      },
    },
  ],
}
