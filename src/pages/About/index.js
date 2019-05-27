import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import './index.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Upbit ––– Our Story</title>
        </Helmet>
        <section
          data-uk-scrollspy="cls:uk-animation-fade"
          className="image-bg-about overlay-black-dense padding-top-bottom-twelve-percent sm-padding-top-bottom-150px uk-scrollspy-inview uk-animation-fade"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 display-table">
                <div className="vertical-align-middle display-table-cell text-center xs-text-center">
                  <h1 className="no-margin text-white text-weight-600">
                    Hear Our Story.
                  </h1>

                  <div className="separator center-col width-30 bottom-border border-4px border-color-gray-dark margin-top-bottom-20px" />

                  <h1 className="text-white text-large text-weight-300 margin-bottom-5px sm-no-margin-bottom">
                    Learn more about our journey
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="padding-top-bottom-150px">
            <div
              className="container"
              data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > .row > div ; delay: 50; repeat: false"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <div className="position-relative overflow-hidden width-100 sm-margin-bottom-25px">
                    <p className="no-margin-bottom text-black text-weight-400">
                      <span className="dropcap text-black title-medium text-weight-700">
                        I
                      </span>{" "}
                      n the summer of 2014, Upbit started as a friendly project, by Nazmus and Kazi, two aspiring Computer Science freshman. From learning projects, to fun experiments, they started building web applications for businesses local and abroad.
                    </p>
                    <p className="no-margin-bottom text-black text-weight-400">
                      From a team of two, Upbit grew to be a digital agency where likeminded engineers, creatives work together and sculpt digital products in all popular platforms across all the devices.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <div className="position-relative overflow-hidden width-100">
                    <h5 className="no-margin-bottom text-black text-weight-700">
                      A tribe of artisans, <br/>
                      working in the <br/>
                      tech space
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row margin-top-50px">
                <div className="col-md-12 col-sm-12 col-xs-12 center-col text-center margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <img src="custom/images/crew/banner.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            data-uk-scrollspy="cls:uk-animation-fade"
            class="uk-scrollspy-inview uk-animation-fade"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 display-table">
                  <div class="vertical-align-middle display-table-cell text-left sm-text-center">
                    <h1 class="text-black text-weight-600">Contact Us.</h1>

                    <div class="separator width-30px bottom-border border-2px border-color-gray-light margin-top-bottom-20px sm-margin-left-right-auto" />

                    <h6 class="no-margin text-black text-weight-600 no-margin-bottom">
                      We'd love to hear from you.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padding-top-bottom-150px">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 center-col text-center">
                  <div class="contact-wrapper">
                    <form
                      class="contact-form"
                      method="POST"
                      action="https://formspree.io/hi@up-bt.com"
                    >
                      <div class="messages" />

                      <div class="controls">
                        <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                              <input
                                class="form-control form_name no-margin-top padding-20px text-uppercase text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                                type="text"
                                name="name"
                                placeholder="First Name *"
                                required="required"
                                data-error="Firstname is required."
                              />

                              <div class="help-block with-errors" />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                class="form-control form_lastname no-margin-top padding-20px text-uppercase text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                                type="text"
                                name="surname"
                                placeholder="Last Name *"
                                required="required"
                                data-error="Lastname is required."
                              />

                              <div class="help-block with-errors" />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                class="form-control form_email no-margin-top padding-20px text-uppercase text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                                type="email"
                                name="email"
                                placeholder="E-mail *"
                                required="required"
                                data-error="Valid email is required."
                              />

                              <div class="help-block with-errors" />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                class="form-control form_phone no-margin-top padding-20px text-uppercase text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                              />

                              <div class="help-block with-errors" />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea
                                class="form-control form_message no-margin-top padding-20px text-uppercase text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                                name="message"
                                placeholder="Tell me about your project *"
                                rows="4"
                                required="required"
                                data-error="Please,leave us a message."
                              />

                              <div class="help-block with-errors" />
                            </div>
                          </div>

                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn-send btn btn-large btn-gray-extra-dark border-radius-50 md-margin-bottom-15px sm-margin-left-right-auto sm-display-table"
                              value="Send message"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
