import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import heroImg from "../assets/hero-img.jpg"

const query = graphql`
  {
    strapiHerobannerHome {
      ctaText
      ctaLink
      subTitle
      secondTitle
      title
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const herobanner = data.strapiHerobannerHome;

  return <header className="hero section-center" style={{backgroundImage: "url(" + heroImg + ")"}}>
    <div className="section-center hero-center">
      <article className="hero-image"></article>
      <div>
        <h4>{herobanner.subTitle}</h4>
        <h1>{herobanner.title}<div className="secondTitle">{herobanner.secondTitle}<span></span></div></h1>
        <Link className="btn" to={herobanner.ctaLink}>
          {herobanner.ctaText}
        </Link>
      </div>
    </div>
  </header>
}

export default Hero
