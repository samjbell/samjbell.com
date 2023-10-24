import * as React 
from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    portfoliocontainer,
} from "../../pages/pages.module.css"

const PortfolioPage = () => {
    return (
        <>
            <Layout pageTitle="Portfolio"></Layout>
            <div className={portfoliocontainer}>
                <p> This page will hold my portfolio projects. </p>
       </div>
       </>    
    )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage