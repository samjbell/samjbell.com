import * as React 
from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PortfolioPage = () => {
    return (
       <Layout pageTitle="Portfolio">
        <p> 
            This page will hold my portfolioprojects 
        </p>
       </Layout>
    )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage