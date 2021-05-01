/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import React from "react"
import AuthProvider from "./src/contexts/AuthContext"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
