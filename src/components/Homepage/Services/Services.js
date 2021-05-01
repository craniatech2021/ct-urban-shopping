import React from "react"
import "./services.css"

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="speical_class">
          <h1 className="services-title">
            Our Specialty <span className="green-service">Green </span> Services
          </h1>
          <hr
            style={{
              width: "50%",
              textAlign: "center",
            }}
          />
          <p className="service-p">
            We can make anything <span className="green-service">grow</span> and
            <span className="green-service"> flourish</span>
          </p>
          <br />
          <hr />
          <div className="row">
            <div className="col-md-4 column">
              <img
                id="special_image"
                alt="service"
                className="special-image"
                src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/services1.jpeg?raw=true"
              />
              <br />
              <h6 className="service-title">Plant Rescue</h6>
              <br />
              <p>
                Plants can go through some tough times. We offer a complete{" "}
                <b>rescue package </b>
                to revive and restore your green companions.
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                alt="service"
                src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/services2.jpeg?raw=true"
              />
              <h6 className="service-title">Workshops</h6>
              <br />
              <p>
                Want to learn how to take better care of your house plant(s)?
                Take one of our 2-hour online classes and walk away with your
                own masterpiece!
              </p>
            </div>
            <div className="col-md-4 column">
              <img
                id="special_image"
                alt="service"
                src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/services3.jpeg?raw=true"
              />
              <h6 className="service-title">Replanting</h6>
              <br />
              <p>
                If your house plant(s) is in need of a little TLC or a complete
                makeover, we can bring your plant(s) back to its original glory
                with our plant rescue service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
