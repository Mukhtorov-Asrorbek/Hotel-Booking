import React from "react";
// import Images
import otherImg from "../images/other-img.webp";
import otherImgOne from "../images/other-img_one.webp";
import otherImgTwo from "../images/other-img_two.webp";
import otherImgThree from "../images/other-img_three.webp";
import otherImgFour from "../images/other-img_four.webp";
import otherImgFive from "../images/other-img_five.webp";
export default function Other() {
  return (
    <div className="other">
      <div className="container">
        <h1 className="other-title">Other Packages</h1>
        <div className="other-card">
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImg} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>Hotel Blue Haven</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room">1 x Room</span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImgOne} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>Grand White Palace</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room">1 x Room</span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImgTwo} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>LUX* Belle Mare</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room">1 x Room</span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImgThree} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>White Palace</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room" className="other-card__room">
                1 x Room
              </span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImgFour} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>Luxury Palace</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room">1 x Room</span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-card__item">
            <div className="other-card__item__img">
              <img src={otherImgFive} alt="OtherImg" />
            </div>
            <div className="other-card__item__palace">
              <h3>Hotel Five Star</h3>
              <span className="other-card__ridge">
                1749 Wheeler Ridge Delaware
              </span>
              <span className="other-card__guest">2 x Guests</span>
              <span className="other-card__room">1 x Room</span>
              <h4>$ 10,500</h4>
              <div className="other-card__item__price">
                <h2>$ 9,500</h2>
                <div className="other-card__item__price__link">
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
