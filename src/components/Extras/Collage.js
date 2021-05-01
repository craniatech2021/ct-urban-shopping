import React from "react"
import { useStyles } from "./useStyles"

const Inspiration = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.thirdInspo}>
        <div className={classes.inspo}>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/home/home-collage.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/home/home-collage2.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/home/home-collage3.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inspiration
