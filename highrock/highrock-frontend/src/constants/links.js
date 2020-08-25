import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "about us",
    url: "/about/",
  },
  {
    id: 2,
    text: "team",
    url: "/team/",
  },
  {
    id: 2,
    text: "services",
    url: "/services/",
  },
  {
    id: 3,
    text: "media",
    url: "/media/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link activeClassName="active" className={link.url === '/contact/' ? 'contact-cta btn' : ''} to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
