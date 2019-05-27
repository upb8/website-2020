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
                  We build ideas. We provide custom product development services <br/>
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
                <img src="custom/images/projects/sitetrax-2.jpg" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Application Development</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Sitetrax.io</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For Netarus LLC.</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">2017</p>
                  <p className="text-gray-extra-dark">
                    A platform for construction surveillance, powered by state of the art image processing, deep learning,
                    where data transactions are done using blockchain. The platform also has it's own cryptocurrency developed,
                    called "BaconCoin".
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available privately
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Some of the technologies used
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-react fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-node fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-docker fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-grunt fa-2x text-gray-extra-dark" /> &nbsp;
                    <i class="fab fa-python fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <a href="https://sitetrax.io" target="_blank">
                      <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                        See it live <i className="fas fa-external-link-alt" /> 
                      </div>
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-12 center-col text-left margin-auto">
                <h1>&nbsp;</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto order-lg-2">
                <img src="custom/images/projects/rabbitrax.jpg" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Mobile App Development</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Rabbitrax</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For SELECT1 Solution, Inc.</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">2018</p>
                  <p className="text-gray-extra-dark">
                    Transitioning from hard paperwork to eased off automatic scheduling, RabbitTrax enables organizations to build forms or checklists within, where every user has control over each assigned audit allowing assignments to be managed. It also provides secure and fast cloud storage.
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available on
                  </p>
                  <p className="text-gray-extra-dark">
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
                    <i class="fab fa-aws fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <a href="https://rabbittrax.net" target="_blank">
                      <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                        Website <i className="fas fa-external-link-alt" /> 
                      </div>
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-12 center-col order-lg-3">
                <h1>&nbsp;</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <img src="custom/images/projects/pm.jpg" alt="" />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto">
                <div className="position-relative overflow-hidden width-100 padding-150px-bottom page-title-smaller md-margin-top-25px">
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">Product Development</p>
                  <h3 className="no-margin-bottom text-weight-700 text-gray-extra-dark">Privatemedicals</h3>
                  <p className="no-margin-bottom text-weight-400 text-gray-dark">For Privatemedicals UK</p>
                  <p className="text-weight-400 text-extra-small text-gray-dark">2017</p>
                  <p className="text-gray-extra-dark">
                    PrivateMedicals incorporates over 20 years of combined medical experience in managing health. Their strategy is designed by doctors who see both the short and long term consequences of people not addressing the issues affecting their health until it is too late. 
                  </p>
                  <p className="text-gray-extra-dark">
                  PrivateMedicals aims to provide healthcare facilities to individuals as well as organizations. The website has been designed focusing on the services they provide in a vivid way that makes sure the user understands the gravity and gets straight to business.
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Available on
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fas fa-globe fa-2x" /> &nbsp;
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Some of the technologies used
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-js fa-2x text-gray-extra-dark"/> &nbsp;
                    <i class="fab fa-php fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-dark text-weight-700">
                    Integrations
                  </p>
                  <p className="text-gray-extra-dark">
                    <i class="fab fa-stripe fa-2x text-gray-extra-dark" /> &nbsp;
                  </p>
                  <p className="text-gray-extra-dark">
                    <a href="http://privatemedicals.co.uk" target="_blank">
                      <div className="btn btn-medium btn-white md-margin-bottom-15px sm-margin-left-right-auto sm-display-table">
                        See it live <i className="fas fa-external-link-alt" /> 
                      </div>
                    </a>
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
