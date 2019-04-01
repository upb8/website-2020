import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Upbit ––– Our Projects</title>
        </Helmet>
        <section>
        <div data-uk-height-viewport="" style={{minHeight: '100vh', background: 'url(../custom/images/projects-banner.jpeg)'}}>
          <div className="uk-overlay-primary uk-position-cover">
            <div className="uk-position-center text-center">
              <div className="width-100 center-col xs-width-95 uk-animation-slide-bottom-small">
                <h2 className="text-weight-700 text-uppercase letter-spacing-4 text-gray-extra-dark">It’s not what you say, <br/> It’s what you do.</h2>
                <div className="separator center-col width-100px bottom-border border-1px border-color-gray-light margin-top-bottom-20px"></div>
                <h5 className="roboto text-extra-large text-weight-300 text-gray-extra-dark">
                  We build ideas. We provide custom application development services <br/>
                  that match our client’s specific needs and goals.<br/>
                </h5>
                <h5 className="cover-scroll-arrow">
                  &darr;
                </h5>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="link1" className="padding-top-bottom-150px bg-gray-extra-light">
          <div
            className="container"
            data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false"
          >
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <img src="custom/images/gif/printer.webp" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Marketing &amp; Branding.</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Project Name</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For Motoroza inc.</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">November 2019</p>
                  <p className="text-gray-extra-dark">
                    a hassle-free, online ordering platform that connects neighboring restaurants and diners.
                  </p>
                  <p className="text-gray-extra-dark">
                    Oopsie is our biggest project to date! From product creation to business analysis, Coletiv and our partner Significa designed and developed a solution for Web, iOS, and Android. We used ReactJS, Swift, Kotlin and Elixir/Phoenix for the backend.
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available on
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fas fa-globe fa-2x" /> &nbsp;
                    <i class="fas fa-desktop fa-2x" /> &nbsp;
                    <i class="fab fa-apple fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-android fa-2x text-gray-extra-dark" />
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Some of the technologies used
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-react fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-node fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-docker fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-vuejs fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-grunt fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-aws fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Integrations
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-apple-pay fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-stripe fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-paypal fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-google fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-github fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                      See it live <a href="" className="fas fa-external-link-alt" /> 
                    </div>
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

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Marketing &amp; Branding.</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Project Name</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For Motoroza inc.</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">November 2019</p>
                  <p className="text-gray-extra-dark">
                    a hassle-free, online ordering platform that connects neighboring restaurants and diners.
                  </p>
                  <p className="text-gray-extra-dark">
                    Oopsie is our biggest project to date! From product creation to business analysis, Coletiv and our partner Significa designed and developed a solution for Web, iOS, and Android. We used ReactJS, Swift, Kotlin and Elixir/Phoenix for the backend.
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available on
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fas fa-globe fa-2x" /> &nbsp;
                    <i class="fas fa-desktop fa-2x" /> &nbsp;
                    <i class="fab fa-apple fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-android fa-2x text-gray-extra-dark" />
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Some of the technologies used
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-react fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-node fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-docker fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-vuejs fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-grunt fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-aws fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Integrations
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-apple-pay fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-stripe fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-paypal fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-google fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-github fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                      See it live <a href="" className="fas fa-external-link-alt" /> 
                    </div>
                  </p>
                </div>
              </div>

              <div className="col-lg-12 center-col order-lg-3">
                <h1>&nbsp;</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <img src="custom/images/gif/printer.webp" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Marketing &amp; Branding.</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Project Name</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For Motoroza inc.</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">November 2019</p>
                  <p className="text-gray-extra-dark">
                    a hassle-free, online ordering platform that connects neighboring restaurants and diners.
                  </p>
                  <p className="text-gray-extra-dark">
                    Oopsie is our biggest project to date! From product creation to business analysis, Coletiv and our partner Significa designed and developed a solution for Web, iOS, and Android. We used ReactJS, Swift, Kotlin and Elixir/Phoenix for the backend.
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available on
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fas fa-globe fa-2x" /> &nbsp;
                    <i class="fas fa-desktop fa-2x" /> &nbsp;
                    <i class="fab fa-apple fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-android fa-2x text-gray-extra-dark" />
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Some of the technologies used
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-react fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-node fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-docker fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-vuejs fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-grunt fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-aws fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Integrations
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-apple-pay fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-stripe fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-paypal fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-google fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-github fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                      See it live <a href="" className="fas fa-external-link-alt" /> 
                    </div>
                  </p>
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
