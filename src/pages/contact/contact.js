import * as React from "react"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
    contactcontainer,
} from '../../pages/pages.module.css'

const ContactPage = () => {
    return (
        <>
          <Layout pageTitle="Contact"> </Layout>
        
        <div className={contactcontainer}> 
        <p> 
                Feel free to reachout regarding possible opportunies or collaborations
            </p>
        </div>
        </>
    )
}

export const Head = () => 
<Seo title="Contact" />

export default ContactPage