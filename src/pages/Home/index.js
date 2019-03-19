import React, { Component, Fragment } from "react";
import BackToTop from '../../components/backtotop';
import Header from '../../components/header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <section
          className="image-bg-62"
          data-uk-height-viewport="min-height: 300"
        >
          <div className="overlay-black">
            <div className="uk-position-center text-center">
              <div className="overlay-black-light padding-80px width-60 center-col xs-width-95 uk-animation-slide-bottom-small">
                <h3 className="text-weight-700 text-white">We've got this.</h3>

                <h5 className="roboto text-extra-large text-weight-300 text-white">
                  We are a tribe of artisans, working in tech space. Come hope
                  in.
                </h5>

                <div className="separator center-col width-100 bottom-border border-1px border-color-gray-dark margin-top-bottom-40px" />

                <a
                  className="btn btn-small btn-white sm-margin-left-right-auto sm-display-table xs-no-margin-bottom"
                  href="#link1"
                  data-uk-scroll
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="link1" className="padding-top-bottom-150px bg-black">
          <div
            className="container"
            data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false"
          >
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <img src="custom/images/gif/factory.gif" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <h3 className="text-weight-700 text-white">
                    How 'bout a shot of innovation
                  </h3>

                  <p>
                      We are a group comprised of technology experts and technical managers thriving on state of the art software innovation.
                      Our engineers and creatives are in the business of making digital products that thrive on new technology.
                  </p>
                </div>
              </div>

              <div className="col-lg-12 center-col text-left margin-auto">
                <h1>&nbsp;</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto order-lg-2">
                <img src="custom/images/gif/printer.webp" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto order-lg-1">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <h3 className="text-weight-700 text-white">
                    Gee! Your idea smells terrific
                  </h3>

                  <ul className="no-margin no-padding no-list-style">
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      This tool is an ongoing experiment in better HTML
                      checking.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      You have managed to facilitate a purchase of the house.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      Available services such as buying or selling, she's got.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      A lightweight and modular front-end framework.
                    </li>
                    <li className="text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      Aenean eu leo quam. Pellentesque ornare quis eget urna.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12 center-col order-lg-3">
                <h1>&nbsp;</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <img src="custom/images/gif/cleanup.gif" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <h3 className="text-weight-700 text-white">
                    Brainwaves orchestrated
                  </h3>

                  <ul className="no-margin no-padding no-list-style">
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      This tool is an ongoing experiment in better HTML
                      checking.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      You have managed to facilitate a purchase of the house.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      Available services such as buying or selling, she's got.
                    </li>
                    <li className="padding-bottom-25px text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      A lightweight and modular front-end framework.
                    </li>
                    <li className="text-gray-regular">
                      <span
                        data-uk-icon="icon: check"
                        className="margin-right-10px text-white"
                      />{" "}
                      Aenean eu leo quam. Pellentesque ornare quis eget urna.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top-bottom-150px bg-blue">
          <div
            className="container"
            data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false"
          >
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 center-col text-center margin-auto uk-scrollspy-inview uk-animation-slide-right-medium">
                <h6 className="montserrat text-weight-600 text-white no-margin-bottom">
                  Want to know more about our services?{" "}
                  <a
                    className="btn btn-medium btn-transparent-white border-radius-50 margin-left-20px md-margin-top-35px sm-margin-left-right-auto sm-display-table"
                    href="#"
                  >
                    Our services
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top-bottom-150px bg-black">
          <div
            className="container"
            data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false"
          >
            <div className="row">
              <div className="col-md-7 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <h3 className="text-weight-700 text-white margin-bottom-50px">
                  Contact us.
                </h3>

                <div className="contact-wrapper">
                  <form
                    className="contact-form"
                    method="post"
                    action="contact.php"
                  >
                    <div className="messages" />

                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <input
                              className="form-control form_name bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-dark border-3px no-margin-top padding-10px text-uppercase text-small text-white text-weight-800 letter-spacing-1"
                              type="text"
                              name="name"
                              placeholder="First Name *"
                              required="required"
                              data-error="Firstname is required."
                            />

                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <input
                              className="form-control form_lastname bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-dark border-3px padding-10px text-uppercase text-small text-white text-weight-800 letter-spacing-1 montserrat"
                              type="text"
                              name="name"
                              placeholder="Last Name *"
                              required="required"
                              data-error="Lastname is required."
                            />

                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control form_email bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-dark border-3px padding-10px text-uppercase text-small text-white text-weight-800 letter-spacing-1 montserrat"
                              type="text"
                              name="name"
                              placeholder="Email *"
                              required="required"
                              data-error="Email is required."
                            />

                            <div className="help-block with-errors" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control form_phone bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-dark border-3px padding-10px text-uppercase text-small text-white text-weight-800 letter-spacing-1 montserrat"
                              type="text"
                              name="name"
                              placeholder="Phone *"
                              required="required"
                              data-error="Phone is required."
                            />

                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control form_message text-white no-margin-top no-border-top no-border-left no-border-right border-color-gray-extra-dark border-3px padding-20px text-uppercase bg-transparent text-small text-gray-extra-dark text-weight-800 letter-spacing-1 montserrat"
                              name="message"
                              placeholder="Tell me about your project *"
                              rows="4"
                              required="required"
                              data-error="Please,leave us a message."
                            />

                            <div className="help-block with-errors" />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn-send btn btn-medium btn-white border-radius-50 margin-top-25px sm-margin-left-right-auto sm-display-table"
                            value="Send message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="col-md-3 col-sm-12 col-xs-12 center-col text-left sm-margin-top-75px"
                data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false"
              >
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12 margin-bottom-75px text-left sm-text-center">
                    <span data-uk-icon="icon: mail; ratio: 1" />

                    <p className="margin-top-bottom-15px text-large letter-spacing-1 text-weight-500 text-white montserrat">
                      Email
                    </p>

                    <p className="no-margin text-white text-weight-300">
                      contact@XOD.com
                    </p>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 margin-bottom-75px text-left sm-text-center">
                    <span data-uk-icon="icon: receiver; ratio: 1" />

                    <p className="margin-top-bottom-15px text-large letter-spacing-1 text-weight-500 text-white montserrat">
                      Phone
                    </p>

                    <p className="no-margin text-white text-weight-300">
                      +1 929 3098 114
                    </p>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 margin-bottom-75px text-left sm-text-center">
                    <span data-uk-icon="icon: location; ratio: 1" />

                    <p className="margin-top-bottom-15px text-large letter-spacing-1 text-weight-500 text-white montserrat">
                      Address
                    </p>

                    <p className="no-margin text-white text-weight-300">
                      23-24 Jingo St. Lobster Rd
                    </p>
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
