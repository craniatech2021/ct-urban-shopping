import React from "react"
import leaf from "./leaf.png"

export default function Footer() {
  return (
    <footer className="footer py-3 bg-light navbar-dark">
      <div className="container">
        <div className="row">
          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-black">
            <h5>Plants Make People Happy</h5>
            <br />
            <p class="foot-desc mb-0 text-dark">
              This simple idea was the seed for what would become Urban Roots: a
              modern plant destination for the modern plant lover.
            </p>
            <br />
            <p class="foot-desc mb-0 text-dark">
              And, we think finding your new plant should be, well, easy.
            </p>
          </div>

          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-dark">
            <h5>Customer Experience</h5>
            <br />
            <ul class="navbar-nav mx-auto">
              <li class="mb-2">
                <a class="nav-link text-dark" href="/faq">
                  Help & FAQ
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/shipping">
                  Shipping & Delivery
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/gift-cards">
                  Gift Card
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/contact">
                  Contact Us
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/about">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-dark">
            <h5>Plant Questions?</h5>
            <br />
            <ul class="navbar-nav mx-auto">
              <li class="mb-2">
                <a class="nav-link text-dark" href="/tips">
                  Plant Care Tips
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/inspiration">
                  Inspiration
                </a>
              </li>
              <li class="mb-2 list-unstyled ">
                <div className="leaf">
                  <br />
                  <br />
                  <img
                    src={leaf}
                    alt="leaf"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
