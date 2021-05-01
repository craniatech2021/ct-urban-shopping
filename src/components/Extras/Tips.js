import React from "react"
import { useStyles } from "./useStyles"

const Tips = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.firstTips}>
        <h2 className={classes.titleAbout}>Plant Care</h2>
        <span className={classes.subtitleAbout}>
          Tips & Tricks to make plant-parenting downright easy.
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            What Does New <span className={classes.flowers}> Growth </span> Look
            Like? {""}
          </h2>
          <p className={classes.secondTextAbout}>
            You aren’t the only one excited for warmer weather–have you noticed
            your plants shooting up new growth like wild now that the days are
            getting warmer and brighter?
          </p>
          <p className={classes.secondTextAbout}>
            During the winter months, growth generally slows for most
            houseplants. Spring and summer is when they awaken from their winter
            dormancy and use the seasons’ extra sunlight and humidity to get
            growing again!
          </p>
          <p className={classes.secondTextAbout}>
            Do you know how to spot new growth? Often times new growth is
            confused with a dying leaf or a plant in distress, when actually the
            opposite is true! Can you spot the new growth in the photos below?
          </p>
        </div>
        <div className={classes.imgBlock1} />
      </div>
      <div className={classes.second}>
        <div className={classes.imgBlock2} />
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            Signs of Overwatered{" "}
            <span className={classes.flowers}> Plants </span>: What to Look For
          </h2>
          <p className={classes.secondTextAbout}>
            According to our Plant Experts, keep an eye out for the five signs
            of overwatered plants to keep your greenery in good health:
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Sign one: </span> If a
            plant is overwatered, it will likely develop yellow or brown, limp
            leaves as opposed to dry, crispy leaves (which are actually a sign
            of too little water). Wilting leaves usually mean that root rot has
            set in and the roots can no longer absorb water.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Sign two: </span> If your
            plant is dropping old and new leaves alike, you’ve likely
            overwatered. Remember that the shedding leaves can be green, brown,
            or yellow.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Sign three: </span> If the
            base of the plant stem begins to feel mushy or unstable, you’ve
            overwatered. The soil can even begin to give off a rotten odor.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Sign four: </span> If the
            leaves develop brown spots encircled by a yellow halo, that’s a
            bacteria infection due to overwatering.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Sign five: </span> Similar
            to sign number three, fungus or mold can grow directly on top of the
            soil if you’ve overwatered time and time again.
          </p>
        </div>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            How to Repot Your <span className={classes.flowers}> Plants </span>
          </h2>
          <p className={classes.secondTextBold}>
            How do I know if I need to re-pot?
          </p>
          <p className={classes.secondTextAbout}>
            Check for roots creeping up along the top of the soil, or seeing
            roots growing through the drainage holes at the bottom of the pot.
            This is a sign that your plant is root-bound and needs more space.
          </p>
          <p className={classes.secondTextAbout}>
            Another indication when it is time to re-pot if when watering your
            plants the water rushes through the pot and out the drainage hole.
            This shows the roots are taking up too much room in the current pot
            and there is not enough soil to root ratio.
          </p>
          <p className={classes.secondTextAbout}>
            Once you’ve determined your plant needs repotting, follow this
            step-by-step guide as I walk you through how to re-pot your plants!
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 1: </span> Select a
            pot that is approximately 2” larger than the current pot that
            contains drainage holes with a saucer. If your new pot is larger
            than 2” of the original, there may be too much soil for the roots to
            use, causing the plant to remain too wet which can lead to root
            issues.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 2: </span> Fill the
            new pot one-third of the way full with fresh potting soil.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 3: </span> Gently
            slide the plant from its current pot. You may need to gently shake
            the plant to encourage the roots to come along, or use a soil knife.
            With sharp scissors or pruning shears, cut back any dead, mushy,
            discolored or excessively long roots. Wipe the blades with rubbing
            alcohol between each snip.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 4: </span> Place the
            plant in the center of the new pot, positioning the top of its root
            ball a few inches below the pot’s top.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 5: </span> Fill the
            pot with soil, covering the root ball completely. Gently tamp the
            soil down around the roots. A soil scoop or hand trowel comes in
            handy here.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 6: </span> Finally,
            water the plant thoroughly–until the water flows freely from the
            bottom of the plant.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Step 7: </span> Allow the
            plant to “rest” so all the water drains from the pot and then place
            it on its new saucer, making sure there is no puddling water.
          </p>
          <p className={classes.secondTextAbout}>
            <span className={classes.secondTextBold}> Pro Tip </span> It is
            extremely important that your new pot has a hole in the bottom for
            excess water to drain onto a saucer. A plant in a pot without
            drainage is much more susceptible to root rot and damage or death
            from overwatering.
          </p>
        </div>
        <div className={classes.imgBlock3} />
      </div>
    </>
  )
}

export default Tips
