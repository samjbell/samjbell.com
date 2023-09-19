import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A picture of my ugly mug"
        src="../images/IMG_3649.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
  

