import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"

import "./layout.css"

import Header from "./Globals/Header/Header"
import Footer from "./Globals/Footer/Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
