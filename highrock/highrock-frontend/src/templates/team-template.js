import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import BackLink from "../components/BackLink"

const ComponentName = ({data}) => {
  const { description, name, position, image } = data.team;
  return <Layout>
    <section className="team-template section-padding">
      <BackLink title="All team" page="team"/>
      <div className="section-center-narrow">
        <article className="team-info">
          <h1>{name}</h1>
          <h2>{position}</h2>
          <div className="team-info-text">
            <div className="team-image"></div>
            {/* <Image fluid={image.childImageSharp.fluid}/> */}
            <ReactMarkdown className="team-desc">{description}</ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleTeam($slug: String) {
    team: strapiTeams(slug: { eq: $slug }) {
      id
      name
      position
      description
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
