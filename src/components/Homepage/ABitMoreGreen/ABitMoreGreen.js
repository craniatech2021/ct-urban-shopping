import React from "react"
import styled from "styled-components"
import MainImg from "../../../../src/images/abitmoregreen.jpg"

const ABitMoreGreen = () => {
  return (
    <>
      <Wrapper className="section-center">
        <article className="img-container">
          <img src={MainImg} alt="nice table" className="main-img" />
        </article>
        <article className="content">
          <h1>
            Bring a bit more <span className="green-flowers">green</span> into
            your life...
          </h1>
          <br />
          <p>
            Plants are trending, we know... and they add so much to the vibe of
            a space! But when you embellish interior spaces with houseplants,
            you’re not just adding greenery. These living organisms interact
            with your body, mind and home in ways that can enhance your quality
            of life. For starters, they help to improve the quality of indoor
            air, and studies have also shown that being around plants improves
            concentration, memory and productivity.
          </p>
          <p>
            Unlike buying a plant from a box store, your <b>Urban Roots</b>{" "}
            plant arrives fully-grown as pictured and pre-potted. We’ve spent a
            lot of time selecting pots that have optimal drainage, look great,
            and come with a saucer so your floor or desk won’t get ruined. All
            you have to do is unpack your plant and find the perfect spot for it
            in your home.
          </p>
          <a href="/shop" class="btn btn-outline-dark lg">
            Shop Now
          </a>
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  min-height: 110vh;
  display: grid;
  place-items: center;
  padding: 5rem;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-size: 50;
      font-style: italic;
      letter-spacing: 0.8rem;
      margin: 0;
      font-family: "'Playfair Display', serif";
      color: #474747;
    }
    p {
      font-size: 1rem;
      color: #707070;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 5px;
      display: block;
    }
    .green-flowers {
      color: olivedrab;
      font-size: 50;
      font-style: italic;
      letter-spacing: 0.8rem;
      margin: 0;
      font-family: "'Playfair Display', serif";
    }
  }
`

export default ABitMoreGreen
