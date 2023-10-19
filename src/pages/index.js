<<<<<<< HEAD
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my portfolio website. I began this process using the Gatsby tutorial, but now I'm using more resources to complete this website.</p>
      <StaticImage
        alt="A picture of my ugly mug"
        src="../images/IMG_3649.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
  
=======
import * as React from "react"
import Layout from '../components/layout'

const HomePage = () => {
  return (
<Layout pageTitle="Home Page"> 
  <p> Hello and welcome to my site! </p>
  </Layout>
  )
}
export const Head = () => <title>Home Page</title>

export default HomePage
>>>>>>> refs/remotes/origin/master

