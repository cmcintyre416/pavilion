import React from "react"
import { Link } from "gatsby"

const BackLink = ({title, page}) => {
    console.log(page);

  return <div className="back-link section-center-narrow">
    <Link to={`/${page}`}>
        {title}
    </Link>
  </div>
}

export default BackLink
