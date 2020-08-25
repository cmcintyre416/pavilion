import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const TeamMember = ({name,position,image,teaser,slug,index,activeValue,listOutAll,deepLink}) => {
  if(activeValue === index || listOutAll || deepLink){
    return  <Link to={`team/${slug}`}>
      <article className="team-info">
        {/* {image && (
          <Image fluid={image.childImageSharp.fluid}/>
        )} */}
        <div className="team-image">

        </div>
        <div className="team-info-text">
          <h3>{name}</h3>
          <h4>{position}</h4>
          <p className="team-desc">{teaser}</p>
        </div>
      </article>
     </Link>
  }else{
    return null;
  }
};

TeamMember.propTypes = {
  name:PropTypes.string.isRequired,
  position:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  teaser:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired
}

export default TeamMember;
