import * as React 
from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    portfolio_container,
} from "../../components/layout.module.css"

const PortfolioPage = () => {
    return (
        <>
            <Layout pageTitle="Portfolio"></Layout>
            <div className={portfolio_container}>
                <p> This page will hold my portfolio projects. </p>
       </div>
       </>    
    )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage