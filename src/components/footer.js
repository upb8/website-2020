import React, { Component, Fragment } from "react";

class BackToTop extends Component {
  render() {
    return (
      <Fragment>
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

export default BackToTop;
