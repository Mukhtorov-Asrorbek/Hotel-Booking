import React from "react";
// Import Images
import hiltonImg from "../images/edvin.jpg";
import hiltonInside from "../images/homeInside.webp";
import hotelInside from "../images/homeInside_50.jpg";
export default function Hotel() {
  return (
    <div>
      <div className="package-center">
        <h1 className="package-center__title">Hotel Information</h1>
      </div>
      <div className="package-box">
        <div className="package-box__cards">
          <h1 className="package-box__cards__title">Hotel Highlights</h1>
          <div className="item">
            <div className="item__cards">
              <span>Banyan An Adult Only Zone</span>
              <span>Luxurious 5-Star Hotel </span>
              <span>Child Under 11 Years Stay Free</span>
            </div>
            <div className="item__cards">
              <span>LUX* Me Spa</span>
              <span>Half Board/ All Inclusive </span>
            </div>
          </div>
        </div>
        <div className="package-box__card">
          <h1 className="package-box__card__title">Hotel offer Details</h1>
          <div className="side">
            <div className="side-content side-img">
              <div className="side_content__cards ">
                <p className="side-content__cards__text ">
                  Especially in the best luxury hotels you’ll find that
                  everything from the exterior
                </p>
              </div>
              <div className="side-content__cards">
                <h4>
                  Some hotels provide incredible transfer services such as
                  helicopters
                </h4>
              </div>
            </div>
            <h5>* Valid until 10 April 2020</h5>
          </div>
        </div>
      </div>
      <div className="hotel">
        <div className="hotel-img">
          <img src={hiltonImg} alt="hiltonImg" />
        </div>
        <div className="hilton-info">
          <p className="hotel-info">
            Explore the world in a whole new way from the comfort of a Hilton
            Grand Vacations resort, offering spacious studio and suite-style
            accommodations accented by all the comforts of home. You’ll find
            Hilton Grand Vacations locations in sought-after destinations
            ranging from sun-splashed beaches to snowy mountaintops and nearly
            every landscape
          </p>
          <div className="hotel-info__box">
            <div className="hotel-info__box__img">
              <img
                className="hiltonInside"
                src={hotelInside}
                alt="hiltonInside"
              />
            </div>
            <div className="hotel-info__box__cards">
              <h1>Special for Family</h1>
              <h3>
                674$ <span>/</span> <span>Per Day</span>
              </h3>
              <div className="btn">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
