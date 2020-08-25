import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get In Touch</h3>
        {/* This form will be using formspree */}
        <form action="" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" name="name" className="form-control"/>
            <input type="email" placeholder="email" name="email" className="form-control"/>
            <textarea name="message" placeholder="message" className="form-control" rows="5"></textarea>
            <button type="submit" className="submit-btn btn">Submit</button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
