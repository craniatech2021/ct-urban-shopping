import React from "react"
import "./reviews.css"

const Reviews = () => {
  return (
    <div className="rev-section">
      <h1 className="review-title">What People Are Saying</h1>
      <br />
      <hr
        style={{
          width: "50%",
          textAlign: "center",
        }}
      />
      <br />
      <div className="col-10 mx-auto my-4">
        <div className="reviews">
          <div className="review">
            <div className="body-review">
              <div className="head-review">
                <img
                  className="review-img"
                  src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/reviews1.jpeg?raw=true"
                  width="250px"
                  alt="user review"
                />
              </div>
              <div className="desc-review">
                “Loving my new Bamboo Palm plant.. the best page -- it was
                delivered STRAIGHT to my door, already potted, in the cutest
                packaging!"
              </div>
              <div className="name-review">
                <hr />
                <p className="review-flowers">AUBREE</p>
                <p>Riverside, CA</p>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="body-review">
              <div className="head-review">
                <img
                  className="review-img"
                  src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/reviews2.jpeg?raw=true"
                  width="250px"
                  alt="user review"
                />
              </div>
              <div className="desc-review">
                “I always struggle with how much to water plants, but this plant
                came with care instructions! Can't wait to order another plant!"
              </div>
              <div className="name-review">
                <hr />
                <p className="review-flowers">CHARLES</p>
                <p>Omaha, NE</p>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="body-review">
              <div className="head-review">
                <img
                  className="review-img"
                  src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/reviews3.jpeg?raw=true"
                  width="250px"
                  alt="user review"
                />
              </div>
              <div className="desc-review">
                “I purchased 2 plants from Urban Roots and I have no regrets.
                The plants came quickly, very easy to track, packaged very
                well!"
              </div>
              <div className="name-review">
                <hr />
                <p className="review-flowers">KELSEY</p>
                <p>Pittsburgh, PA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
