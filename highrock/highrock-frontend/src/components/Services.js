import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiServices {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

const Services = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiServices: { nodes: services },
  } = data;
  const { id, title, description, slug } = services;
  return <section className="section section-center">
    <div className="services-section">
      <Title title="services"/>
      <div className="services-center">
        {services.map((service, index)=> {
          return <article key={service.id} className="service">
            <Link to={`/services/${service.slug}`} className="service-btn">
              <h4><span>{index + 1}</span>{service.title}</h4>
            </Link>
          </article>
        })}
      </div>
      <Link to="/services" className="btn center-btn">
        All Services
      </Link>
    </div>
  </section>
}

export default Services
