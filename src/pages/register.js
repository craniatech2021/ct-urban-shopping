import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../contexts/AuthContext"
import { navigate } from "gatsby"
import { Link } from "gatsby"
// import "./register.css"

const Register = () => {
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
        .createUserWithEmailAndPassword(data.email, data.password)
      setUser(result)
      navigate("/")
    } catch (err) {
      setData({ ...data, error: err.message })
    }
  }

  return (
    <Layout>
      <SEO title="Register" />
      <div className="register-container">
        <div className="register-img" />
        <section className="register">
          <div className="row">
            <div className="col-18 col-sm-14 col-md-14 mx-auto">
              <h2 className="register-title">
                Sign Up.
                <br />
                <span className="flowers"> It's quick & easy! </span>
              </h2>
              <form onSubmit={handleSubmit}>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
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
                {/* <form className="form-group" id="password-confirm">
                  <form>Password Confirmation</form>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordConfirmRef}
                    required
                  />
                </form> */}
                <div className="w-100 text-center mt-2">
                  Already have an account?{" "}
                  <Link to="/login" class="text-success">
                    Log In
                  </Link>
                </div>
                <br />
                {data.error ? (
                  <p style={{ color: "red" }}>{data.error}</p>
                ) : null}
                <button
                  //   disabled={loading}
                  class="btn btn-outline-dark"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Register
