import React from "react"
import Title from "./Title"
import Post from "./Post"
import { Link } from "gatsby"

export const Blogs = ({blogs,title,showLink}) => {
  return <section>
    <Title title={title}/>
    <div className="blogs-center">
      {blogs.map((blog)=> {
        return <Post key={blog.id} {...blog}/>
      })}
    </div>
    {showLink && <Link to="/media" className="btn center-btn">Blog</Link>}
  </section> 
}

export default Blogs