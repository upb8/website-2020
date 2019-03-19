import React, { Component, Fragment } from "react";

class BackToTop extends Component {
  render() {
    return (
      <Fragment>
        <a id="return-to-top" style={{display: 'block'}} href="">
          <i
            className="text-gray-extra-dark fa fa-angle-up"
          />
        </a>
      </Fragment>
    );
  }
}

export default BackToTop;
