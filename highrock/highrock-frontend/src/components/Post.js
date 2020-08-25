import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import propTypes from "prop-types"

const Post = ({id, title, image, date, category, slug, desc}) => {
  return <Link to={`/media/${slug}`} key={id}>
    <article>
      {
        image &&
        <Image fluid={image.childImageSharp.fluid} className="blog-img"/>
      }
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}

Post.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  image: propTypes.object.isRequired,
  date: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  slug: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default Post
