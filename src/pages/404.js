import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-container">
      <div className="boo-wrapper">
        <div className="boo">
          <div className="face" />
        </div>
        <div className="shadow" />
        <h1>Whoops!</h1>
        <p>
          We couldn't find the page you
          <br />
          were looking for.
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
