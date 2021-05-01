import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../contexts/AuthContext"
import { navigate } from "gatsby"
import { Link } from "gatsby"

const PasswordReset = () => {
  const [data, setData] = useState({
    email: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setData({ ...data, error: null })
    try {
      const result = await firebase.auth().sendPasswordResetEmail(data.email)
      setUser(result)
      navigate("/")
    } catch (err) {
      setData({ ...data, error: err.message })
    }
  }

  return (
    <Layout>
      <SEO title="Password Reset" />
      <div className="reset-container">
        <div className="reset">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="reset-title">
                Password Reset
                <br />
                <span className="reset-flowers"> We've got you covered! </span>
              </h2>
              <form onSubmit={handleSubmit}>
                <form className="reset-form-group" id="email">
                  <form>Email</form>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </form>
                <div className="w-100 text-center mt-2">
                  Need an account?{" "}
                  <Link to="/register" class="text-success">
                    Sign Up
                  </Link>
                </div>
                <br />
                {data.error ? (
                  <p style={{ color: "red" }}>{data.error}</p>
                ) : null}
                <button class="btn btn-outline-dark" type="submit">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="reset-img" />
      </div>
    </Layout>
  )
}

export default PasswordReset
