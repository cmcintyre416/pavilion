import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Media = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {

  return <Layout>
    <SEO title="Media Page" description="Here is the media hub for Highrock Capital"/>
    <section className="blog-pages">
      <div className="section-center-narrow section-padding">
      <Blogs blogs={blogs} title="Blog"/>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      slug
      description
      date(formatString: "MMMM Do, YYYY")
      id
      title
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Media
