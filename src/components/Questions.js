import React from "react";
// Import Images
import ronaldo from "../images/ronaldo.jpg";
import georgina from "../images/georgina.jpg";
import novak from "../images/novak.webp";

export default function () {
  return (
    <div className="special">
      <h1 className="special-title">Our Special Guests</h1>
      <div className="special-box">
        <div className="special-cards profile-card">
          <div className="special-cards__item card-header">
            <div className="special-cards__item__img pic">
              <img src={ronaldo} alt="Ronaldo" />
            </div>
            <div className="name">Ronaldo</div>
            <div className="desc">Football Player</div>
            <div className="sm">
              <a
                href="https://www.facebook.com/"
                className="fab fa-facebook-f"
              ></a>
              <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
              ></a>
            </div>
            <a href="#" className="contact-btn">
              Contact Me
            </a>
          </div>
          <div className="card-footer">
            <div className="numbers">
              <div className="numbers-item">
                <span>3,249K</span>
                Posts
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>403M</span>
                Followers
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>501</span>
                Following
              </div>
            </div>
          </div>
        </div>
        <div className="special-cards profile-card">
          <div className="special-cards__item card-header">
            <div className="special-cards__item__img  pic-two">
              <img src={georgina} alt="Ronaldo" />
            </div>
            <div className="name">Georgina</div>
            <div className="desc">Modeller</div>
            <div className="sm">
              <a
                href="https://www.facebook.com/"
                className="fab fa-facebook-f"
              ></a>
              <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
              ></a>
            </div>
            <a href="#" className="contact-btn">
              Contact Me
            </a>
          </div>
          <div className="card-footer">
            <div className="numbers">
              <div className="numbers-item">
                <span>690</span>
                Posts
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>35.2M</span>
                Followers
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>731</span>
                Following
              </div>
            </div>
          </div>
        </div>
        <div className="special-cards profile-card">
          <div className="special-cards__item card-header">
            <div className="special-cards__item__img pic-one">
              <img src={novak} alt="Ronaldo" />
            </div>
            <div className="name">Novak</div>
            <div className="desc">Tennis Player</div>
            <div className="sm">
              <a
                href="https://www.facebook.com/"
                className="fab fa-facebook-f"
              ></a>
              <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram"
              ></a>
            </div>
            <a href="#" className="contact-btn">
              Contact Me
            </a>
          </div>
          <div className="card-footer">
            <div className="numbers">
              <div className="numbers-item">
                <span>930</span>
                Posts
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>10.3M</span>
                Followers
              </div>
              <div className="border"></div>
              <div className="numbers-item">
                <span>1,262</span>
                Following
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
