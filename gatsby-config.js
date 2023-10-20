/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.samjbell.com",
      title: "samjbell",
  },
  
  plugins: [
	  "gatsby-plugin-image",
	  "gatsby-plugin-sharp",  
	  {
	  
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/src/pages/`,
	  }
  },
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
  ],
};


