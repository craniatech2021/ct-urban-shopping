import React from "react"
import { useStyles } from "./useStyles"

const Shipping = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.secondAbout}>
        <div className={classes.text}>
          <h2 className={classes.secondTitleShipping}>Shipping Rates {""}</h2>
          <p className={classes.secondTextAbout}>
            Free shipping on orders $75 or more*!
          </p>
          <p className={classes.secondText}>
            Large Plants (8"+) are not eligible for free shipping.
          </p>
        </div>
        <div className={classes.imgBlockShipping} />
      </div>
    </>
  )
}

export default Shipping
