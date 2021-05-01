import React from "react"
import { useStyles } from "./useStyles"

const AboutUs = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstAbout}>
        <h2 className={classes.titleAbout}>About Us</h2>
        <span className={classes.subtitleAbout}>
          Where plants are our inspiration.
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Everyone Should Live with a Little More {""}
            <span className={classes.flowers}> Green </span>
          </h2>
          <p className={classes.secondTextAbout}>
            Urban Roots is here to help strengthen your relationship with
            plants. We make buying plants easy by delivering healthy,
            ready-to-go plants to your door and setting you up with the tips and
            tricks you need to help your plants thrive. Plants make life better.
            We make plants easy.
          </p>
          <img
            src="https://fontmeme.com/permalink/201124/9750e08d91e04429d5aa7e4a0d121bfd.png"
            alt="logo"
          />
        </div>
        <div className={classes.imgBlockAbout} />
      </div>
      <div className={classes.third}>
        <h2 className={classes.thirdTitle}>Plants Experts</h2>
        <span className={classes.thirdSubtitle}>
          A perfect blend of creativity, energy, communication, happiness and
          love.
          <br />
          Let us arrange a smile for you.
        </span>
        <div className={classes.expert}>
          <div>
            <img
              className={classes.expertImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/employee1.jpeg?raw=true"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>MARIE BROOKS</h3>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/employee2.jpeg?raw=true"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>KAYLA ADAMS</h3>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/employee3.jpeg?raw=true"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>MICHAEL KELLY</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
