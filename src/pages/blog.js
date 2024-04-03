import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
 query {
   allFile {
     nodes {
       name
     }
   }
 }
`

const Blog = ({data}) => {
    return (
        <Layout pageTitle="Mi Blog">
            <h2>Lista de entradas del blog</h2>
            <ul>
     {
       data.allFile.nodes.map(node => (
         <li key={node.name}>
           {node.name}
         </li>
       ))
     }
     </ul>

        </Layout>

    )
}


export const Head = () => <Seo title="Mi Blog"/>


export default Blog