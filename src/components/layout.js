import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
   } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <StaticImage src="../images/icon.png" width={100}></StaticImage>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}><Link  className={navLinkText} to='/'>Home</Link></li>
                <li className={navLinkItem}><Link  className={navLinkText} to='/sobremi'>Sobre mí</Link></li>
                <li className={navLinkItem}><Link  className={navLinkText} to='/blog'>Blog</Link></li>
                <li className={navLinkItem}><a href='https://github.com/cristianvpe'>Github</a></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
                <footer className='footer'> &copy; cristian {new Date().getFullYear()}</footer>
                {/* {new Date().getFullYear()} Para la fecha actualizada*/}
            </main>
        </div>
    )
}

export default Layout
