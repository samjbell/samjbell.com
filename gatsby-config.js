/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
      title: "My First Gatsby Site",
      require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
      })
  },
    
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
      
       "gatsby-transformer-sharp",
       "gatsby-plugin-mdx"
  ],
};


