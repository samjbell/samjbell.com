import * as React from 'react'
<<<<<<< HEAD
import { Link, useStaticQuery, graphql} from 'gatsby' 
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  
  return (
    <div className={container} >
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}> Home 
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className= {navLinkItem} >
            <Link to="/portfolio" className={navLinkItem}>
              Portfolio
            </Link>
          </li>
          <li className={navLinkItem} > 
          <Link to="/contact" className={navLinkItem}>
            Contact
          </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
=======
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
>>>>>>> refs/remotes/origin/master
        {children}
      </main>
    </div>
  )
}

export default Layout