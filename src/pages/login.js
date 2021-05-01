import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../contexts/AuthContext"
import { navigate } from "gatsby"
import { Link } from "gatsby"

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
      setUser(result)
      navigate("/")
    } catch (err) {
      setData({ ...data, error: err.message })
    }
  }

  return (
    <Layout>
      <SEO title="Login" />
      <div className="login-container">
        <div className="login-img" />
        <section className="login">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto">
              <h2 className="login-title">
                Welcome Back!
                <br />
                <span className="flowers"> We're glad to see you, again! </span>
              </h2>
              <form onSubmit={handleSubmit}>
                <form className="form-group" id="email">
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
                <form className="form-group" id="password">
                  <form>Password</form>
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                </form>
                <div className="w-100 text-center mt-2">
                  Don't have an account?{" "}
                  <Link to="/register" class="text-success">
                    Sign Up
                  </Link>
                </div>
                <br />
                <div className="w-100 text-center mt-2">
                  Forgot password?{" "}
                  <Link to="/password-reset" class="text-success">
                    We can help!
                  </Link>
                </div>
                {data.error ? (
                  <p style={{ color: "red" }}>{data.error}</p>
                ) : null}
                <button class="btn btn-outline-dark" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Login
