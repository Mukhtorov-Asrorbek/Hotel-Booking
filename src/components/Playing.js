import React from "react";
// Import Images
import corner from "../images/corner.webp";
import golf from "../images/golf.webp";
import hiking from "../images/hiking.webp";
import discovery from "../images/discovery.webp";
export default function Playing() {
  return (
    <div className="playing">
      <div className="container">
        <h1 className="playing-title">OTHER ACTIVITIES</h1>
        <div className="playing-card">
          <div className="playing-card__box">
            <div className="playing-card__box__img">
              <img src={corner} alt="corner" />
              <div className="playing-card__box__img__item">
                <h3>The curious corner of chamarel</h3>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="playing-card__box">
            <div className="playing-card__box__img">
              <img src={golf} alt="golf" />
              <div className="playing-card__box__img__item">
                <h3>Gymkhana club folf course</h3>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="playing-card__box">
            <div className="playing-card__box__img">
              <img src={hiking} alt="corner" />
              <div className="playing-card__box__img__item">
                <h3>Tamarind falls hiking trip - full day </h3>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="playing-card__box">
            <div className="playing-card__box__img">
              <img src={discovery} alt="corner" />
              <div className="playing-card__box__img__item">
                <h3>The blue marine discovery quest</h3>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
