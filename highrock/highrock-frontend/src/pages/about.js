import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import Intro from "../components/Intro"
import Histories from "../components/Histories"

const About = ({
  data: {
    about: { nodes },
    intro
  },
}) => {
  const{title,info} = nodes[0];
  return <Layout>
    <SEO title="about" description="About highrock capital"/>
    <div className="section-center-narrow">
      <Intro data={intro}/>
    </div>
    <section className="section-color-gray">
      <div className="about-page section-center-narrow section-padding">
          <article className="about-text">
            <ReactMarkdown source={info}/>
          </article>
      </div>
    </section>
    <section className="section-center-narrow section-padding">
      <Histories/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        info
      }
    }
    intro:strapiIntroAbout {
      title
      subTitle
      description
    }
  }
`

export default About
