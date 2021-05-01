import React, { Component } from "react"
// import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      plant: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { plant: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { plant: items }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <>
          <section className="shop py-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-8 mx-auto text-center">
                  {this.state.categories.map((category, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className="btn btn-outline-dark text-capitalize m-3"
                        onClick={() => {
                          this.handleItems(category)
                        }}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="row">
                {this.state.plant.map(({ node }) => {
                  return (
                    <div
                      key={node.id}
                      className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3"
                    >
                      <div className="card" style={{ minHeight: "100%" }}>
                        <div style={{ maxHeight: "550px" }}>
                          <div className="img_container">
                          <Img
                            fluid={node.image.fluid}
                            className="card-img-top"
                          />
                          <p className="img_description">{node.description.description}</p>
                          </div>
                          <div className="card-body text-center">
                            <h6 className="product-title">{node.title}</h6>
                            <h6 className="product-price">${node.price}</h6>
                            <button
                              className="snipcart-add-item btn btn-outline-dark"
                              data-item-id={node.id}
                              data-item-name={node.title}
                              data-item-description={node.description.description}
                              data-item-price={node.price}
                              data-item-image={node.image.fluid.src}
                              data-item-url="https://urban-roots.netlify.app/shop"
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
