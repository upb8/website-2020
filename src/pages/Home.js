import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <a id="return-to-top" style={{display: 'block'}}>
          <i
            className="text-gray-extra-dark fa fa-angle-up"
          />
        </a>
        <div className="uk-position-top z-index-999">
          <div
            className="navbar-dark"
            data-uk-sticky="animation: uk-animation-slide-top-small; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200"
          >
            <nav
              className="uk-navbar-container uk-navbar-transparent"
              data-uk-navbar="boundary-align: true; align: center;"
            >
              <div className="uk-navbar-left padding-left-four-percent">
                <a className="uk-navbar-item uk-logo" href="#" data-uk-scroll>
                  <img src="images/logo-white.png" alt="/" />
                </a>
              </div>

              <div className="uk-navbar-right uk-dark padding-right-four-percent">
                <ul className="uk-navbar-nav text-weight-600">
                  <li>
                    <div className="uk-navbar-left uk-hidden@l">
                      <a
                        className="uk-navbar-toggle"
                        data-uk-navbar-toggle-icon
                        data-uk-toggle="target: #offcanvas-nav"
                      >
                        <i className="fas fa-bars fa-2x"/>
                      </a>
                    </div>
                  </li>

                  <li>
                    <a
                      className="text-gray-extra-light text-extra-small uk-visible@l"
                      href="services.html"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-extra-light text-extra-small uk-visible@l"
                      href="crew.html"
                    >
                      The Crew
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-extra-light text-extra-small uk-visible@l"
                      href="about.html"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div
          id="offcanvas-nav"
          data-uk-offcanvas="mode: push; overlay: true; esc-close: true;"
        >
          <div className="uk-offcanvas-bar menu-dark bg-black">
            <ul
              className="uk-nav-default uk-nav-parent-icon text-left"
              data-uk-nav
            >
              <li>
                <a className="uk-navbar-item uk-logo" href="#" data-uk-scroll>
                  <img src="images/logo-white.png" alt="" />
                </a>
              </li>

              <li className="margin-bottom-10px">
                <a
                  href="services.html"
                  className="bottom-border border-1px border-color-gray-extra-dark"
                >
                  <span className="text-small text-gray-light text-uppercase text-weight-700">
                    Services
                  </span>
                </a>
              </li>

              <li className="margin-bottom-10px">
                <a
                  href="crew.html"
                  className="bottom-border border-1px border-color-gray-extra-dark"
                >
                  <span className="text-small text-gray-light text-uppercase text-weight-700">
                    The Crew
                  </span>
                </a>
              </li>

              <li className="margin-bottom-10px">
                <a
                  href="about.html"
                  className="bottom-border border-1px border-color-gray-extra-dark"
                >
                  <span className="text-small text-gray-light text-uppercase text-weight-700">
                    About
                  </span>
                </a>
              </li>
            </ul>

            <div className="nav-footer margin-top-100px">
              <ul className="list-unstyled no-margin-bottom margin-top-20px">
                <li className="display-inline-block margin-right-25px">
                  <a href="#">
                    <i className="fab fa-facebook facebook" />
                  </a>
                </li>
                <li className="display-inline-block margin-right-25px">
                  <a href="#">
                    <i className="fab fa-twitter twitter" />
                  </a>
                </li>
                <li className="display-inline-block margin-right-25px">
                  <a href="#">
                    <i className="fab fa-instagram instagram" />
                  </a>
                </li>
                <li className="display-inline-block">
                  <a href="#">
                    <i className="fab fa-behance behance" />
                  </a>
                </li>
              </ul>

              <p className="no-margin-bottom margin-top-20px text-small text-gray-light text-weight-400">
                Copyright © 2019 of{" "}
                <a href="https://www.up-bt.com" target="_blank">
                  Upbit.
                </a>
              </p>
              <p className="no-margin-bottom text-small text-gray-light text-weight-400 text-black">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>

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

        <footer>
          <div className="row bg-gray-extra-dark padding-left-right-twelve-percent padding-top-bottom-80px">
            <div className="col-md-4 col-sm-6 col-xs-12 md-margin-bottom-50px sm-text-center">
              <a
                href="#"
                className="margin-bottom-25px display-inline-block"
                data-uk-scroll
              >
                <img src="images/logo-white.png" alt="" />
              </a>

              <p className="margin-bottom-25px text-small text-weight-400 width-90 md-width-100 text-gray-light">
                Cras mattis consectetur purus sit amet fermentum. Donec
                ullamcorper mattis consectetur nulla non metus.
              </p>

              <a
                className="text-small text-weight-400 text-gray-light right-border border-1 border-color-regular-gray padding-right-10px"
                href="#"
              >
                Terms & Conditions
              </a>
              <a
                className="text-small text-weight-400 text-gray-light padding-left-10px"
                href="#"
              >
                Privacy Policy
              </a>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12 left-border border-color-gray-dark padding-left-35px md-margin-bottom-50px sm-text-center xs-no-border-left xs-no-padding-left">
              <h5 className="text-small text-weight-700 text-uppercase text-white letter-spacing-2">
                Learn More
              </h5>

              <ul className="list-unstyled no-margin-bottom">
                <li>
                  <a className="text-small text-gray-light" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-small text-gray-light" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-small text-gray-light" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-small text-gray-light" href="#">
                    Stories
                  </a>
                </li>
                <li>
                  <a className="text-small text-gray-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-sm-12 col-xs-12 left-border border-color-gray-dark padding-left-35px sm-text-center sm-no-border-left xs-no-padding-left xs-margin-bottom-50px">
              <h5 className="text-small text-weight-700 text-uppercase text-white letter-spacing-2">
                Contact
              </h5>

              <p className="margin-bottom-25px text-small text-gray-light width-90 md-width-100">
                5266 Beverly Ln Cape Charles, Virginia(VA), 23310
              </p>

              <ul className="list-unstyled no-margin-bottom">
                <li className="margin-bottom-15px">
                  <i className="far fa-envelope margin-right-10px" />{" "}
                  <a className="text-small text-gray-light" href="#">
                    brand@domain.com
                  </a>
                </li>

                <li>
                  <i className="fas fa-phone margin-right-10px" />{" "}
                  <a className="text-small text-gray-light" href="#">
                    +00 (123) 456 78 90
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row bg-black padding-top-bottom-50px padding-left-right-twelve-percent">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <p className="no-margin-bottom text-small text-gray-light text-weight-400 sm-text-center sm-margin-bottom-20px">
                Copyright © 2019 of{" "}
                <a
                  href="https://www.up-bt.com"
                  target="_blank"
                  className="text-white"
                >
                  Upbit.
                </a>{" "}
                All rights reserved.
              </p>
            </div>

            <div className="col-md-4 col-sm-12 col-xs-12">
              <ul className="list-unstyled text-right no-margin-bottom sm-text-center">
                <li className="display-inline-block margin-right-25px">
                  <a
                    className="text-medium text-weight-700 text-gray-light"
                    href="#"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="display-inline-block margin-right-25px">
                  <a
                    className="text-medium text-weight-700 text-gray-light"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="display-inline-block margin-right-25px">
                  <a
                    className="text-medium text-weight-700 text-gray-light"
                    href="#"
                  >
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li className="display-inline-block margin-right-25px">
                  <a
                    className="text-medium text-weight-700 text-gray-light"
                    href="#"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li className="display-inline-block">
                  <a
                    className="text-medium text-weight-700 text-gray-light"
                    href="#"
                    data-uk-scroll
                    data-uk-tooltip="title: Go to top; pos: right"
                  >
                    <i className="far fa-arrow-alt-circle-up" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
