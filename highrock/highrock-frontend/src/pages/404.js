import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <main className="error-page">
      <div className="error-container section-center">
        <h1>Im sorry you have reached a dead end.</h1>
        <Link className="btn" to="/">Return Home</Link>
      </div>
    </main>
  </Layout>
}

export default Error
