module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/welcome`
      }
    }
  ],
  siteMetadata: {
    title: `Digital Garden`,
    description: `Eleazar Resendez`,
    siteUrl: `http://garden.eresendez.com/`
  }
}
