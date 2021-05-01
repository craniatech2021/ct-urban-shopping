import React from "react"
import { useStyles } from "./useStyles"

const Inspiration = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstInspo}>
        <h2 className={classes.titleContact}>Inspiration</h2>
        <span className={classes.subtitleInspo}>
          Looking for inspiration? Well you came to the right place!
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.imgBlockInspo} />
        <div className={classes.text}>
          <h2 className={classes.secondTitleInspo}>
            Plants in the <span className={classes.flowers}> wild </span> aka
            your home.. {""}
          </h2>
          <p className={classes.secondTextInspo}>
            When you think of seeing a plant in wild you may think in its
            natural habitat like the tropics. We, as the Urban Roots family,
            think of it as seeing it in your homes! We love seeing the different
            ways our customers style our plants and the many different pairings
            you make with our ceramics . Our mission is to guide customers
            through every step of the Urban Roots experience. That includes
            finding the perfect match to represent your personal style!
          </p>
          <p className={classes.secondTextInspo}>
            Plants are a great way to decorate your home but they also bring a
            sense of life and companionship. If you're a crazy plant person
            (like us) you probably chat with your plants, name your plants and
            chances are would shed a tear when they loose a leaf or two.
            Personally, I've always been a bit of an introvert and that can get
            lonely especially when working from home. Filling my home with
            plants (not only gives me a sense of having more friends than I do)
            but animates the energy of my personal style. They become a part of
            your family and they rely on you to keep growing. Once you start to
            recognize growth you feel a little bit of pride and crave more!
          </p>
          <p className={classes.secondTextInspo}>
            This is my home. You could call it "confused groovy bohemian beachy
            chic". I like to think my plants have different personalities and
            their pots are just accessories. Mixing patterns is my favorite ! I
            take it as a challenge. Finding ways to have different textures and
            colors while staying on "theme" can be difficult but in the end its
            your style and there are no wrong answers.. unless it's a fake
            plant.
          </p>
          <p className={classes.secondTextInspo}>
            If you ever have a space in mind that you think could use some plant
            energy take a picture and reach out! Our staff are PRO'S and can
            assist in making your home an actual jungle.
          </p>
          <p className={classes.secondTextInspo}>- Tessa Woodard</p>
        </div>
      </div>
      <div className={classes.thirdInspo}>
        <div className={classes.inspo}>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-1.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-2.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-3.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
        </div>
        <div className={classes.inspo}>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-4.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-5.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-6.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
        </div>
        <div className={classes.inspo}>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-7.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-8.jpeg?raw=true"
              alt=""
              width="350px"
            />
          </div>
          <div>
            <img
              className={classes.inspoImg}
              src="https://github.com/tessa-woodard/urban-roots/blob/main/src/images/inspo/inspo-9.jpeg?raw=true"
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
