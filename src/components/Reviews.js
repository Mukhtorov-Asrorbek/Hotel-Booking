import React from "react";
// Import Images
import picturesOne from "../images/picturs-one.webp";
import picturesTwo from "../images/pictures-two.webp";
import picturesThree from "../images/pictures-three.webp";
import picturesFour from "../images/pictures-four.webp";
export default function Reviews() {
  return (
    <div className="charter">
      <h1 className="charter-title">Luxury Charters</h1>
      <div className="charter-content">
        <div className="charter-content__item">
          <div className="charter-content__item__img">
            <img src={picturesOne} alt="picturesOne" />
          </div>
          <span>Piaggio P.180 Avanti</span>
        </div>
        <div className="charter-content__item">
          <div className="charter-content__item__img">
            <img src={picturesTwo} alt="picturesOne" />
          </div>
          <span>Pilatus Pc-12</span>
        </div>
        <div className="charter-content__item">
          <div className="charter-content__item__img">
            <img src={picturesThree} alt="picturesOne" />
          </div>
          <span>Piper Pa27 Aztec</span>
        </div>
        <div className="charter-content__item">
          <div className="charter-content__item__img">
            <img src={picturesFour} alt="picturesOne" />
          </div>
          <span>Beech BE100 King Air</span>
        </div>
      </div>
      <div className="title">Enjoy Our Membership</div>
      <div className="charter-card">
        <div className="charter-card__item">
          <h2>Popular</h2>
          <h3>What You'll Get</h3>
          <div className="charter-card__item__info">
            <span>One-time initiation fee $0</span>
            <span>Deposit $50k</span>
            <span>Pricing / rates Dynamic</span>
            <span>Priority fleet access Yes</span>
            <span>Guaranteed fleet access No</span>
          </div>
          <h1>
            $250/<sub>month</sub>{" "}
          </h1>
          <div className="btn">
            <a href="#">Choose</a>
          </div>
        </div>
        <div className="charter-card__item">
          <h2>Buniness</h2>
          <h3>What You'll Get</h3>
          <div className="charter-card__item__info">
            <span>One-time initiation fee $0</span>
            <span>Deposit $50k</span>
            <span>Pricing / rates Dynamic</span>
            <span>Priority fleet access Yes</span>
            <span>Guaranteed fleet access No</span>
          </div>
          <h1>
            $480/<sub>month</sub>{" "}
          </h1>
          <div className="btn">
            <a href="#">Choose</a>
          </div>
        </div>
        <div className="charter-card__item">
          <h2>Elite</h2>
          <h3>What You'll Get</h3>
          <div className="charter-card__item__info">
            <span>One-time initiation fee $0</span>
            <span>Deposit $50k</span>
            <span>Pricing / rates Dynamic</span>
            <span>Priority fleet access Yes</span>
            <span>Guaranteed fleet access No</span>
          </div>
          <h1>
            $680/<sub>month</sub>{" "}
          </h1>
          <div className="btn">
            <a href="#">Choose</a>
          </div>
        </div>
      </div>
    </div>
  );
}
