import React, { Component, Fragment } from "react";
import './index.scss';

class BackToTop extends Component {
  render() {
    return (
      <Fragment>
        <a 
          id="return-to-top" style={{display: 'block'}} href=""
          data-uk-scroll
          data-uk-tooltip="title: Go to top; pos: right"
        >
          <i
            className="text-gray-extra-dark fa fa-angle-up"
          />
        </a>
      </Fragment>
    );
  }
}

export default BackToTop;
