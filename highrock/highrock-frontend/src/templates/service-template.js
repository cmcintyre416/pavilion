import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import BackLink from "../components/BackLink"

const ComponentName = ({data}) => {
  const { title, description, info } = data.services;

  return <Layout>
    <SEO title={title} description={description}/>
    <div className="service-template section-padding section-center-narrow">
    <BackLink title="All services" page="services"/>
    <h1>{title}</h1>
    <section className="service">
      <div className="section-padding">
        <article className="service-content">
          <ReactMarkdown source={info}/>
        </article>
      </div>
    </section>
    </div>
  </Layout>
}

export const query = graphql`
  query GetSingleService($slug: String) {
    services: strapiServices(slug: { eq: $slug }) {
      title
      description
      info
    }
  }
`

export default ComponentName
