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
              <h6 className="text-weight-700 text-center text-extra-large letter-spacing-7 text-left text-black text-uppercase no-margin-bottom sm-text-center">
                Engineering
              </h6>
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
                  <img src="custom/images/crew/mash.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white no-margin-bottom">Mashrukul Huque</h4>
                  <p className="text-white no-margin-top">Fullstack Engineer <a href="mailto:mashruk@up-bt.com"><span className="text-gray-light">(mashruk@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    If generosity was a country, this guy would be the President, Prime minister and the Bartender. Mash also likes turkish pidé for breakfast, lunch and dinner.
                  </p>

                  <p className="text-gray-light">
                    <b> Greatest Achievement - </b> Best slow claps award at Upbit. Pizza Eating Competition Winner 2019.
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite Accent - </b> British
                  </p>

                  <div>
                    <a href="https://fb.com/mashrukul.huque" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/mashrukul.mash" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Aareef Abrar</h4>
                  <p className="text-white no-margin-top">Frontend Engineer <a href="mailto:aareef@up-bt.com"><span className="text-gray-light">(aareef@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    The only sportsman in the team. Former tour de Mirpur winner; and on his free time he writes code and frees us from all the filthy bugs.
                  </p>
                  <p className="text-gray-light">
                    <b> Greatest Achievement - </b> Winning tour de Mirpur
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite Movie - </b> The Night Rider
                  </p>

                  <div>
                    <a href="https://fb.com/mashrukul.huque" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/mashrukul.mash" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/aareef.jpg" alt="" />
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/salman.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white no-margin-bottom">Salman Tasdid</h4>
                  <p className="text-white no-margin-top">Fullstack Engineer <a href="mailto:salman@up-bt.com"><span className="text-gray-light">(salman@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    The sage. This is whom we go to for our tech and non-tech sage advice. He always has a plan, and never gets offended. Even when he gets offended; he doesn’t.
                  </p>

                  <p className="text-gray-light">
                    <b> Greatest Achievement - </b> Being able to live without a phone for a year
                  </p>

                  <div>
                    <a href="https://www.facebook.com/salmanbrac" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                  </div>
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Tanhim Islam</h4>
                  <p className="text-white no-margin-top">Frontend Engineer <a href="mailto:tanhiim@up-bt.com"><span className="text-gray-light">(tanhiim@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    We have no idea why he works with as a programmer. Pretty sure he could make more money doing photography. And for obvious reasons; he is the most popular among the opposite sex among the team.
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite Dance Track - </b> Baby Shark
                  </p>

                  <div>
                    <a href="https://www.facebook.com/Codr.warrior" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/tanhim_islam" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/tanhim.jpg" alt="" />
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
              <h6 className="text-weight-700 text-center text-extra-large letter-spacing-7 text-left text-black text-uppercase no-margin-bottom sm-text-center">
                Creative
              </h6>
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
                  <img src="custom/images/crew/sadaf.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white no-margin-bottom">Sadaf Tasin</h4>
                  <p className="text-white no-margin-top">Content Writer <a href="mailto:sadaf@up-bt.com"><span className="text-gray-light">(sadaf@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    Known for his popularity among la demoiselle, only second to Tanhim. He is also a great singer and avid french speaker. His proficiency in the lexicon of the language of English is well known among his peers.
                  </p>

                  <p className="text-gray-light">
                    <b> Favorite Passtime - </b> Instagram
                  </p>
                  <p className="text-gray-light">
                    <b> Special Talent - </b> Proficiency in singing national anthems of 5 different countries
                  </p>

                  <div>
                    <a href="https://www.facebook.com/sheikhsadaftasin" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/sadafsk" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Sameen Yasar</h4>
                  <p className="text-white no-margin-top">Motion Graphics & UI UX <a href="mailto:sameen@up-bt.com"><span className="text-gray-light">(sameen@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    A horror movie fanatic; and the only one with a saw themed bedroom. Foad’s workout partner, but often time he is seen irregular at the gym. The angry littol guy of the lot, the two syllables of his name says a lot.
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite GOT Character - </b> Ronald Weasley
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite Drink - </b> Water, Just
                  </p>

                  <div>
                    <a href="https://www.facebook.com/sameen52" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/aerosol.cheese" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/sameen.jpg" alt="" />
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
              <h6 className="text-weight-700 text-center text-extra-large letter-spacing-7 text-left text-black text-uppercase no-margin-bottom sm-text-center">
                Product
              </h6>
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
                  <img src="custom/images/crew/foad.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white no-margin-bottom">Motasim Foad</h4>
                  <p className="text-white no-margin-top">Product Manager <a href="mailto:foad@up-bt.com"><span className="text-gray-light">(foad@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    Our beloved product manager and the medic in the team. He is an avid sportsman and likes to hit the gym all the time whenever he is not working. He really likes xiaomi products but wouldn’t admit.
                  </p>

                  <p className="text-gray-light">
                    <b> Favorite Quote - </b> <i>"Le Chat"</i>
                  </p>

                  <div>
                    <a href="https://www.facebook.com/okrittim" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/motasimfoad" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white">Nazmus Sakib</h4>
                  <p className="text-white no-margin-top">Client Services & Product Strategy <a href="mailto:aareef@up-bt.com"><span className="text-gray-light">(aareef@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    Don’t fall for his innocent looks, the guy is not what he looks like. Often seen in the great alps meditating.
                  </p>
                  <p className="text-gray-light">
                    <b> Favorite Animal - </b> Bear
                  </p>

                  <div>
                    <a href="https://www.facebook.com/ns.sanim" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/s.a.n.i.m" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/sanim.jpg" alt="" />
                </div>
              </div>

              <div
                className="row padding-top-150px"
                data-uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 50; repeat: false"
              >
                <div className="col-md-4 col-sm-12 col-xs-12 center-col text-left sm-margin-bottom-30px uk-scrollspy-inview uk-animation-scale-up">
                  <img src="custom/images/crew/kazi.jpg" alt="" />
                </div>

                <div className="col-md-8 col-sm-12 col-xs-12 center-col text-left margin-auto uk-scrollspy-inview uk-animation-scale-up">
                  <h4 className="text-white no-margin-bottom">Kazi Ridwan</h4>
                  <p className="text-white no-margin-top">Team Curation & Product Strategy <a href="mailto:salman@up-bt.com"><span className="text-gray-light">(salman@up-bt.com)</span></a></p>

                  <p className="text-gray-light">
                    He is just a normal guy, no one knows what he actually does in the team. Some says he flies all night saving the world. But rumor has it that he is always busy saving himself from the vape clouds.
                  </p>

                  <p className="text-gray-light">
                    <b> Dislikes - </b> Smoking, Gluten
                  </p>

                  <div>
                    <a href="https://www.facebook.com/Ridwanshere" target="_blank"> <span className="fab fa-facebook fa-2x"/></a> &nbsp;
                    <a href="https://www.instagram.com/kaziridwan" target="_blank"> <span className="fab fa-instagram fa-2x"/></a> &nbsp;
                    <a href="https://kaziridwan.com" target="_blank"> <span className="fas fa-external-link-square-alt fa-2x"/></a> &nbsp;
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
