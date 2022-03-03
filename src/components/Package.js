import React from "react";
export default function Package() {
  return (
    <div>
      <div className="package-center">
        <h1 className="package-center__title">Package Summary</h1>
      </div>
      <div className="package-box">
        <div className="package-box__cards">
          <h1 className="package-box__cards__title">Package Highlights</h1>
          <div className="item">
            <div className="item__cards">
              <span>Half Board/ All Inclusive</span>
              <span>Child Under 11 Years Stay Free</span>
              <span>LUX* Me Spa</span>
            </div>
            <div className="item__cards">
              <span>Luxurious 5-Star Hotel</span>
              <span>Banyan An Adult Only Zone</span>
            </div>
          </div>
        </div>
        <div className="package-box__card">
          <h1 className="package-box__card__title">offer Details</h1>
          <div className="side">
            <div className="side-content">
              <div className="side_content__cards">
                <p className="side-content__cards__text">
                  Benefit from a special discounted CHILL’OUT OFFER at Grand
                  Hilton Hotel.
                </p>
              </div>
              <div className="side-content__cards">
                <h4>10th March - 30th April 2020</h4>
              </div>
            </div>
            <h5>* Valid until 30 April 2020</h5>
          </div>
        </div>
      </div>
      <div className="summary">
        <h1 className="summary-title">Package Summery Details</h1>
        <div className="summary-top">
          <div className="summary-top__item">
            <h3 className="summary-purchase">Purchase Inclusions</h3>
            <span className="summary-span">Rooms as per selection</span>
            <span className="summary-span">
              Half Board or All Inclusive Meal Plan
            </span>
            <span className="summary-span">
              Complimentary Land & Water activities
            </span>
            <span className="summary-span">
              Child Under 11 years old stays free
            </span>
            <span className="summary-span">Free Wi-Fi</span>
            <span className="summary-span">Free Secure Parking</span>
          </div>
          <div className="summary-top__item">
            <h3 className="summary-purchase">
              Complimentary Land Based Activities
            </h3>
            <span className="summary-span">GYM</span>
            <span className="summary-span">Beach Valley</span>
            <span className="summary-span">Table tennis</span>
            <span className="summary-span">Soccer balls</span>
            <span className="summary-span">Yoga</span>
            <span className="summary-span">
              Unlmited access to driving range
            </span>
          </div>
          <div className="summary-top__item">
            <h3 className="summary-purchase">
              Complimentary Water Based Activities
            </h3>
            <span className="summary-span">Water skiing</span>
            <span className="summary-span">Windsurfing</span>
            <span className="summary-span">Pedal boats</span>
            <span className="summary-span">Kayaking</span>
            <span className="summary-span">Aqua Gym</span>
            <span className="summary-span">Glass bottom boat trips</span>
          </div>
        </div>
        <div className="summary-bottom">
          <div className="summary-bottom__item">
            <h3 className="summary-purchase">Meal Plan Avialable</h3>
            <span className="summary-span">Half Board</span>
            <span className="summary-span">All Inclusive</span>
          </div>
          <div className="summary-bottom__item">
            <h3 className="summary-purchase">Entertainment</h3>
            <span className="summary-span">Live Music</span>
            <span className="summary-span">DJ & Mauritian Dance Show</span>
          </div>
          <div className="summary-bottom__item">
            <h3 className="summary-purchase">Check In & Check Out</h3>
            <span className="summary-span">Check in Time 14:00</span>
            <span className="summary-span">Check in Out 11:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
