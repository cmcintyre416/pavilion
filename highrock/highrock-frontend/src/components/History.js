import React from "react"
import Image from "gatsby-image"

const History = ({history}) => {
  return <article key={history.id} className="history max-width-inner section-padding">
    { history.photo && 
      <div className="history-photo">
        <Image fluid={history.photo.childImageSharp.fluid }/>
      </div> 
    }
    <div className="history-text">
      <h4>{history.subTitle}</h4>
      <h3>{history.title}</h3>
      <p>{history.description}</p>
    </div>
  </article>
}

export default History
