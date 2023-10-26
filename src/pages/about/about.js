import * as React from "react"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    about_container,
} from '../../components/layout.module.css'

const AboutPage = () => {
    return (
        <>
        <Layout pageTitle="About Me"></Layout>
            <div className={about_container}> 
                <p> A technophobe working on his tech troubles.  
                </p>
                <p> I'm a recent graduate from a software development bootcamp. I am looking to work across a full stack with a particular interest in Python modelling and statistics. </p>
            </div>
        </>
    )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage

