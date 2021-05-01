import React from "react"
import { useStyles } from "./useStyles"

export default function Contact() {
  const classes = useStyles()
  return (
    <>
    <div className={classes.firstContact}>
        <h2 className={classes.titleContact}>Contact Us</h2>
      </div>
      <div className={classes.second}>
        <div className={classes.imgBlockContact} />
        <div className={classes.text}>
          <section className="contact py-1">
            <div className="row">
              <div className="col-10 col-sm-8 col-md-10 mx-auto">
                <form action="https://formspree.io/f/meqplalj" method="POST">
                  <h2 className={classes.secondTitle}>
                    Ask an{" "}
                    <span className={classes.flowers}> Urban Roots </span>{" "}
                    expert.
                    <br />
                    We are here to help! {""}
                  </h2>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="full-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      className="form-control"
                      resize="none"
                      rows="5"
                    />
                  </div>
                  <button type="submit" class="btn btn-outline-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
