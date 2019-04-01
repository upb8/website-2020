import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Upbit ––– the Crew</title>
        </Helmet>
        <section
          data-uk-scrollspy="cls:uk-animation-fade"
          className="padding-top-bottom-150px image-bg-16 overlay-black-light uk-scrollspy-inview uk-animation-fade"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12 center-col">
                <div className="position-relative overflow-hidden width-100">
                  <h2 className="text-weight-600  text-center text-white">
                    Meet Our Crew
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            id="link1"
            data-uk-scrollspy="cls:uk-animation-fade"
            className="padding-top-bottom-150px uk-scrollspy-inview uk-animation-fade"
          >
            <div className="container">
              <h6 className="text-weight-700 text-extra-large letter-spacing-7 text-left text-black text-uppercase no-margin-bottom sm-text-center">
                Application Development
              </h6>

              <div className="separator width-30px bottom-border border-2px border-color-gray-light margin-top-50px margin-bottom-60px sm-center-col" />

              <div
                className="row"
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-text-center uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <div className="width-90 sm-width-100">
                    <h3 className="margin-top-20px margin-bottom-15px text-weight-300 text-black no-margin sm-margin-bottom-20px">
                      Engineering Team
                    </h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-text-center uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <div className="width-90 sm-width-100">
                    <p className="text-medium text-weight-300 text-gray-dark no-margin-bottom sm-margin-bottom-20px">
                      Standard when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-text-center uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <p className="text-medium text-weight-300 text-gray-dark sm-margin-bottom-20px">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>

                  {/* <a
                    className="btn btn-small btn-black md-margin-bottom-15px sm-display-table sm-margin-left-right-auto"
                    href="#"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="padding-top-bottom-150px bg-black top-border border-1px border-color-gray-extra-dark">
            <div className="container">
              {/* team mate */}
              <div
                className="row"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="images/backgrounds/bg-img-38.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Sameen Yasar</h4>

                  <p className="text-gray-light">
                    Necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of sentence structures, to generate
                    Lorem Ipsum which looks reasonable. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>

                  <div>
								
                    <a href="" className="fab fa-instagram fa-2x" /> &nbsp;
                    <a href="" className="fab fa-whatsapp fa-2x" /> &nbsp;
 
                  </div>
                </div>
              </div>
              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Mashrukul Huque</h4>

                  <p className="text-gray-light">
                    Necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of sentence structures, to generate
                    Lorem Ipsum which looks reasonable. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>

                  <div>
								
                    <a href="" className="fab fa-instagram fa-2x" /> &nbsp;
                    <a href="" className="fab fa-whatsapp fa-2x" /> &nbsp;
 
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="images/backgrounds/bg-img-38.jpg" alt="" />
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="images/backgrounds/bg-img-38.jpg" alt="" />
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Motasim Foad</h4>

                  <p className="text-gray-light">
                    Necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of sentence structures, to generate
                    Lorem Ipsum which looks reasonable. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>

                  <div>
								
                    <a href="" className="fab fa-instagram fa-2x" /> &nbsp;
                    <a href="" className="fab fa-whatsapp fa-2x" /> &nbsp;
 
                  </div>
                </div>
              </div>
              {/* <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-sm-12 text-center">
                  <a class="btn btn-medium btn-transparent-white border-radius-50 md-margin-bottom-15px sm-margin-left-right-auto sm-display-table" href="#">See the full team</a>
                </div>
              </div> */}

            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
