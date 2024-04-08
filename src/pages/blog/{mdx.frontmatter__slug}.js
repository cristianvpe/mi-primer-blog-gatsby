import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <small>{data.mdx.frontmatter.date}</small>
            <div>{children}</div>
        </Layout>
    )
} 
export const query = graphql`
 query ($id: String) {
   mdx(id: {eq: $id}) {
     frontmatter {
       title
       date
     }
   }
 }`

export default BlogPost