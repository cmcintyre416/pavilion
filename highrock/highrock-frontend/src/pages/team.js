import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Teams from "../components/Teams"
import Intro from "../components/Intro"

const TeamPage = ({
  data: {
    allStrapiTeams: { nodes: team },
    strapiIntroTeam
  },
}) => {
  const teamIntro = strapiIntroTeam;
  return (
  <Layout>
    <div className="team-page">
      <div className="section-center-narrow">
        <Intro data={teamIntro} slide/>
      </div>
      <div>
      <div className="section-color-gray">
        <section className="section-center-narrow">
          <Teams team={team} title="Meet your team" list deepLink/>
        </section>
      </div>
      </div>
    </div>
  </Layout>
  );
}

export const query = graphql`
{
  allStrapiTeams {
    nodes {
      id
      name
      position
      teaser
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
  strapiIntroTeam {
    title
    subTitle
    description
  }
}
`

export default TeamPage
