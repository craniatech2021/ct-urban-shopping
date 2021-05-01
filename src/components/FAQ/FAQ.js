import React from "react"
import "./FAQ.css"

const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        <section className="faq">
          <div className="faq-content">
            <div className="faq-question">
              <label htmlFor="q" className="panel-title-main">
                FAQ
              </label>
            </div>
            <div className="faq-question">
              <input id="q1" type="checkbox" className="panel" />
              <label htmlFor="q1" className="panel-title">
                Plant Sizing -
              </label>
              <div className="panel-content">
                Plants are listed by the width of their grower pot. Heights will
                vary.
                <br />A 6" plant may not fit in all 6" pots some pots are too
                shallow or oddly shaped.
              </div>
            </div>
            <div className="faq-question">
              <input id="q2" type="checkbox" className="panel" />

              <label htmlFor="q2" className="panel-title">
                COVID-19
              </label>
              <div className="panel-content">
                We are using extra precaution within our stores and while
                packaging your orders.
                <br />
                Please be aware this may extend delivery times.
              </div>
            </div>
            <div className="faq-question">
              <input id="q3" type="checkbox" className="panel" />

              <label htmlFor="q3" className="panel-title">
                I placed an online shipping order, when should I expect
                delivery?
              </label>
              <div className="panel-content">
                We receive plant deliveries on Thursday’s & pack shipping orders
                Monday-Wednesday.
                <br />
                We are experiencing shipping delays due to Covid-19.
              </div>
            </div>
            <div className="faq-question">
              <input id="q4" type="checkbox" className="panel" />

              <label htmlFor="q4" className="panel-title">
                What if my plant shows up damaged?
              </label>
              <div className="panel-content">
                Some plants handle the shipping process better than others.
                <br />
                Please allow up to 5 days for your plant to recoup.
                <br />
                If not, please reach out to support@urbanroots.us with a picture
                <br />& your order number & we will move quickly to resolve the
                issue.
              </div>
            </div>
            <div className="faq-question">
              <input id="q5" type="checkbox" className="panel" />

              <label htmlFor="q5" className="panel-title">
                Urban Roots Guarantee
              </label>
              <div className="panel-content">
                From pots to plants we guarantee your order will arrive healthy
                and happy.
                <br />
                If your order arrives damaged, please contact us within 30 days
                to receive a replacement or refund.
              </div>
            </div>
            <div className="faq-question">
              <input id="q6" type="checkbox" className="panel" />

              <label htmlFor="q6" className="panel-title">
                Do you accept returns/exchanges?
              </label>
              <div className="panel-content">
                We do not accept plant returns or exchanges.
                <br />
                If your plant is damaged, please contact support@urbanroots.us.
                <br />
                We do accept returns/exchanges for pots and accessories.
              </div>
            </div>
            <div className="faq-question">
              <input id="q7" type="checkbox" className="panel" />

              <label htmlFor="q7" className="panel-title">
                How do I care for my plant?
              </label>
              <div className="panel-content">
                You can find care tips on the item pages of all of our plants.
              </div>
            </div>
            <div className="faq-question">
              <input id="q8" type="checkbox" className="panel" />

              <label htmlFor="q8" className="panel-title">
                Do you use recyclable fill material for products you ship?
              </label>
              <div className="panel-content">
                Yes. Everything can be recycled and the packing peanuts are
                <br />
                water soluble corn starch, which will melt in the rain.
              </div>
            </div>
            <div className="faq-question">
              <input id="q9" type="checkbox" className="panel" />

              <label htmlFor="q9" className="panel-title">
                For any other questions :
              </label>
              <div className="panel-content">
                111 - 111 - 1111 (Mon-Tues 10am-4pm, Thurs-Sat 10-4)
                <br />
                support@urbanroots.us
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQ
