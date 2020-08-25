import React from "react"
import Links from "../constants/Links"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-link-wrapper">
          <Links styleClass="footer-links"></Links>
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Highrock Capital</span> all rights reservedd
        </h4>
    </footer>
  )
}

export default Footer
