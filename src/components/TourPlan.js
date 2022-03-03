import React from "react";
// Import React-Router-Dom
// Import Images
import headerLogo from "../images/header-logo.webp";
import headerSearch from "../images/header-search.webp";
import shoppingCard from "../images/shopping-cart.webp";
import tourMan from "../images/tour-man.webp";
import grandStar from "../images/grand-star.webp";
import grandImg from "../images/grand-img.webp";

export default function TourPlan() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      e32
      <section className="tour">
        <div className="container">
          <div className="tour-box">
            <section className="tour-side">
              <img className="tour-logo" src={headerLogo} alt="headerLogo" />
              <form className="tour-side__form">
                <input
                  className="tour-content__form__input"
                  type="text"
                  placeholder="Search Location"
                />
                <button
                  onClick={handleSubmit}
                  className="tour-content__form__btn"
                >
                  <img src={headerSearch} alt="headerSearch" />
                </button>
              </form>
            </section>
            <section className="tour-content">
              <div className="tour-content__shopping">
                <img
                  className="shoppingCard"
                  src={shoppingCard}
                  alt="shoppingCard"
                />
              </div>
              <section className="tour-content__man">
                <img src={tourMan} alt="tourMan" />
                <h3 className="tour-content__man__name">Nathan</h3>
              </section>
            </section>
          </div>
        </div>
      </section>
      <div className="info">
        <div className="container">
          <div className="info-link">
            <a className="info-link__item" href="">
              ALL DEALS
            </a>
            <a className="info-link__item" href="">
              HOTELS
            </a>
            <a className="info-link__item" href="">
              ACTIVITIES
            </a>
            <a className="info-link__item" href="">
              HOTEL DAY PACKAGES
            </a>
            <a className="info-link__item" href="">
              RESTAURANTS
            </a>
            <a className="info-link__item" href="">
              EVENTS
            </a>
            <a className="info-link__item" href="">
              RODRIGUES
            </a>
          </div>
        </div>
      </div>
      <div className="grand">
        <div className="container">
          <h1 className="grand-title">
            Home/ Flash Offers / Grand Hilton Hotel
          </h1>
          <div className="grand-hotel">
            <div className="grand-hotel__item">
              <div className="grand-hotel__item__star">
                <img className="grandStar" src={grandStar} alt="grandStar" />
                <img className="grandStar" src={grandStar} alt="grandStar" />
                <img className="grandStar" src={grandStar} alt="grandStar" />
                <img className="grandStar" src={grandStar} alt="grandStar" />
                <img className="grandStar" src={grandStar} alt="grandStar" />
              </div>
              <div className="grand-hotel__flash">
                <h1 className="grand-hotel__flash__title">
                  GRAND HILTON HOTEL
                </h1>
                <a className="grand-hotel__flash__offer" href="">
                  Flash Offer
                </a>
              </div>
              <h3 className="grand-hotel__item__all">
                Half-Board/ All Inclusive + Complimentary Activities + Child
                Stays Free
              </h3>
            </div>
            <div className="grand-hotel__item grand-hotel__item__second">
              <h4 className="grand-hotel__item__rate">User Rattings</h4>
              <h3 className="grand-hotel__item__score">
                4.5/<span>5</span>
              </h3>
            </div>
          </div>
          <div className="grand-content">
            <div className="grand-content__item">
              <img className="grandImg" src={grandImg} alt="grandImg" />
            </div>
            <div className="grand-content__price">
              <div className="grand-content__price__booking">
                <div className="grand-cards">
                  <div className="grand-content__price__take">
                    <span className="grand-content__price__span">
                      price starts as
                    </span>
                    <h1 className="grand-content__price__pay">$ 8,500</h1>
                    <h5 className="grand-content__price__night">
                      per room / night
                    </h5>
                    <h3 className="grand-content__price__quick">
                      Quick Booking
                    </h3>
                  </div>
                  <div className="grand-content__price__take">
                    <span className="grand-content__price__guests">
                      2 x Guests
                    </span>
                    <span className="grand-content__price__room">1 x Room</span>
                    <h3 className="grand-content__price__call">12100</h3>
                  </div>
                </div>
                <a className="grand-content__price__option" href="">
                  View Other Options
                </a>
              </div>
              <iframe
                className="iframeImg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5768.660419178678!2d-122.42065398217439!3d37.77668613865874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2s!4v1644565758723!5m2!1sen!2s"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <main className="package">
        <div className="container"></div>
      </main>
    </div>
  );
}
