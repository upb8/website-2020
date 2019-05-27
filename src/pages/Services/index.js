import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './index.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Upbit ––– Services we offer</title>
        </Helmet>
        <section>
        <div data-uk-height-viewport="" style={{minHeight: '100vh', background: 'url(../custom/images/services.jpeg)'}}>
          <div className="uk-overlay-primary uk-position-cover">
            <div className="uk-position-center text-center">
              <div className="width-100 center-col xs-width-95 uk-animation-slide-bottom-small">
                <h2 className="text-weight-700 text-uppercase letter-spacing-4 text-white">Digital Product <br/> Development</h2>
                <div className="separator center-col width-100px bottom-border border-1px border-color-gray-light margin-top-bottom-20px"></div>
                <h5 className="roboto text-extra-large text-weight-300 text-white">
                  That's what we pretty much do. <br/>
                  Here is how we handle our product development process, <br/>
                  in a brief.
                </h5>
                <h5 className="cover-scroll-arrow">
                  &darr;
                </h5>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section>
          <div className="padding-top-150px">
            <div className="container">
              <div className="row margin-bottom-50px">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img src="custom/images/services/1.png" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 uk-flex uk-flex-middle">
                
                  <div>
                    
                    <p className="text-weight-400 text-gray-extra-dark no-margin-bottom">Mobile App Development</p>
                    <h5 className="text-weight-600 text-gray-extra-dark margin-bottom-15px sm-margin-top-15px">Android &amp; iOS</h5>
                    
                    <p className="text-weight-400 text-gray-extra-dark text-extra-large margin-bottom-15px">We have a young and enthusiastic team equipped with the mastery of React Native, ready to develop cross-platform apps. Using adaptability to fuel our fire of innovation, we are prepared to handle technologies which are not even widespread. And compromising with quality and consistency is never an option for us.</p>
                    
                  </div>
                  
                </div>
              </div>

              <div className="row margin-bottom-50px">
                <div className="col-md-6 col-sm-12 col-xs-12 uk-flex uk-flex-middle">
                  <div className="text-right">
                    <p className="text-weight-400 text-gray-extra-dark no-margin-bottom">Web Application</p>
                    <h5 className="text-weight-600 text-gray-extra-dark margin-bottom-15px sm-margin-top-15px">Frontend Design &amp; Development</h5>
                    
                    <p className="text-weight-400 text-gray-extra-dark text-extra-large margin-bottom-15px">Whether it’s a splash of colors, aesthetic minimalistic design or a data-driven UI, our dedicated Frontend team got you covered. Technologies like react, and preprocessed styling languages give us the power to develop sophisticated web apps according to your needs. We break the shackles of limits and compel your imagination to be unchained.</p>
                    
                  </div>
                  
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img src="custom/images/services/2.png" alt="" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img src="custom/images/services/3.png" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 uk-flex uk-flex-middle">
                
                  <div>
                    
                    <p className="text-weight-400 text-gray-extra-dark no-margin-bottom">Backend Development</p>
                    <h5 className="text-weight-600 text-gray-extra-dark margin-bottom-15px sm-margin-top-15px">Scalable Backend Services</h5>
                    
                    <p className="text-weight-400 text-gray-extra-dark text-extra-large margin-bottom-15px">We work with top of the line backend technologies with modern techniques such as containerization and micro-services. With experiences of stacks comprising Node JS, MongoDB our engineers can work with modular systems. Having a strong foundation in Rest and GraphQL API's we are able to scale a lot more efficiently.</p>
                    
                  </div>
                  
                </div>
              </div>


            </div>
          </div>
        </section>

        <section>
          <div
            data-uk-scrollspy="cls:uk-animation-fade"
            className="padding-top-bottom-150px uk-scrollspy-inview uk-animation-fade"
          >
            <div className="container">
              <div
                className="row"
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div ; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-center margin-auto uk-scrollspy-inview uk-animation-slide-bottom-medium">
                  <h4 className="text-weight-600 text-gray-extra-dark margin-bottom-20px">
                    A Workflow of <br/>
                    Your Dreams
                  </h4>

                  <p className="no-margin-bottom text-medium">
                    We have a meticulous process that we've built over the years to that we follow. And we <b>always</b> go through an organized way to tackle down
                    the needs of the product
                  </p>
                </div>
              </div>

              <div className="separator width-10 center-col bottom-border border-1px border-color-gray-light margin-top-50px margin-bottom-75px" />

              <div className="row">
                <div className="col-md-10 col-sm-12 col-xs-12 text-center center-col margin-auto">
                  <div className="position-relative overflow-hidden width-100 padding-150px-bottom">
                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > .row > div ; delay: 50; repeat: false">
                      <div className="row margin-bottom-50px">
                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-left sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              01
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-left sm-text-center text-weight-500">
                            Brainstorm
                          </p>

                          <p className="text-left sm-text-center text-weight-400 no-margin-bottom">
                            Make use of our ability to formulate different perception and generate ideas
                          </p>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-center sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              02
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-center sm-text-center text-weight-500">
                            Planning
                          </p>

                          <p className="text-center sm-text-center text-weight-400 no-margin-bottom">
                            We devise a plan using those ideas and break down tasks accordingly
                          </p>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-center sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              03
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-center sm-text-center text-weight-500">
                            Definition
                          </p>

                          <p className="text-center sm-text-center text-weight-400 no-margin-bottom">
                            Define specific goals for tasks and coming up with technologies to implement
                          </p>
                        </div>
                        
                      </div>
                      <div className="row">

                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-center sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              04
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-center sm-text-center text-weight-500">
                            Development
                          </p>

                          <p className="text-center sm-text-center text-weight-400 no-margin-bottom">
                            We put ideas into action and getting an intermediary representation of the end product
                          </p>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 sm-margin-bottom-50px uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-center sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              05
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-center sm-text-center text-weight-500">
                            Validation
                          </p>

                          <p className="text-center sm-text-center text-weight-400 no-margin-bottom">
                            Revise the finalize product and make amendments
                          </p>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 uk-scrollspy-inview uk-animation-slide-bottom-medium">
                          <h6 className="uk-heading-line text-right sm-text-center">
                            <span className="bg-gray-extra-dark width-70px height-70px line-height-70 text-white text-weight-500 text-center">
                              06
                            </span>
                          </h6>

                          <p className="montserrat text-gray-extra-dark text-medium text-right sm-text-center text-weight-500">
                            Delivery
                          </p>

                          <p className="text-right sm-text-center text-weight-400 no-margin-bottom">
                            End of the journey of creation; finally we deliver you what you so longed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row margin-top-100px">
                <div className="col-md-12 col-sm-12 col-xs-12 center-col text-left margin-auto text-center">
                  <h4 className="text-weight-800 text-black letter-spacing-5 sm-letter-spacing-5 text-center">Product Development Finesse.</h4>			
                  <div className="separator width-30px bottom-border border-2px border-color-gray-light margin-top-bottom-20px margin-left-right-auto"></div>
                  <p>We aim to deliver the absolute best to our capacity; and we thrive to better ourselves everyday.</p>
                  <p>The projects that we've worked on speak for itself.</p>
                  <Link className="btn btn-medium btn-black border-radius-50 sm-margin-left-right-auto sm-display-table xs-no-margin-bottom" to="/projects">Some of our Projects</Link>
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
