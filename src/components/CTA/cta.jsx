import React from "react";
import "./cta.css";
import BgImage from "../../assets/cta-bgimage.png";

function cta() {
  return (
    <div className="cta-main">
      <div className="cta-text">
        <p className="cta-label">Grab upto 50% off On Each Purchase</p>
        <button>Buy Now</button>
      </div>
      <img className="cta-image" src={BgImage} alt="hhfjj" />
    </div>
  );
}

export default cta;
