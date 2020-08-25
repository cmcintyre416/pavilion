import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Intro from "../components/Intro"

const query = graphql`
  {
    allStrapiServices {
      nodes {
        id
        title
        description
        slug
      }
    }
    strapiIntroService {
      title
      subTitle
      description
    }
  }
`;

const Services = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiServices: { nodes: services },
    strapiIntroService
  } = data;
  return <Layout>
    <div className="section-center-narrow">
      <Intro data={strapiIntroService}/>
    </div>
    <section className="services-page section-padding section-color-gray">
    <div className="section-center-narrow">
      {services.map((service, index)=> {
          return <article key={service.id} className="service" id={service.title}>
            <Link to={`/services/${service.slug}`}>
              <h2>
                <span className="service-number">
                  <span>
                  {index + 1}
                  </span>
                </span>{service.title}
                </h2>
            </Link>
            <p>{service.description}</p>
          </article>
        })}
    </div>
    </section>
  </Layout>
}

export default Services
