import React from "react";
import propsTypes from "prop-types";

function Title(props) {
  // const name = "Raja'S";
  // const domain = "I am a front-end developer";
  const { name, domain } = props;
  return (
    // <!-- profile Section  -->
    <div className="container card shadow">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            // src={profileimg}
            src={require("../images/myphoto.png")}
            alt="your name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{domain}</h4>
        </div>
      </div>
    </div>
  );
}
Title.defaultProps = {
  name: "Raja'S",
  domain: "I am a front-end developer",
};
Title.propsTypes = {
  name: propsTypes.string.isRequired,
};
export default Title;
