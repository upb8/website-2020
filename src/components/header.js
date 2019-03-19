import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Header;
