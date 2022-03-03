import React from "react";
// Import Images
import privateRoom from "../images/private.webp";
import parking from "../images/parking.webp";
import wifi from "../images/wi-fi.webp";
import coffee from "../images/coffee.webp";
import facilitiesImg from "../images/facilities-img.webp";
export default function Facilities() {
  return (
    <div className="facilities">
      <h1 className="facilities-title">Facilities & Activities</h1>

      <div className="facilities-card">
        <div className="facilities-card__item">
          <div className="facilities-card__item__img">
            <img src={privateRoom} alt="Private" />
          </div>
          <h3>Private Workspace</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>
        <div className="facilities-card__item">
          <div className="facilities-card__item__img">
            <img src={parking} alt="Private" />
          </div>
          <h3>Parking Area</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>
        <div className="facilities-card__item">
          <div className="facilities-card__item__img">
            <img src={wifi} alt="Private" />
          </div>
          <h3>Free Wifi</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>
        <div className="facilities-card__item">
          <div className="facilities-card__item__img">
            <img src={coffee} alt="Private" />
          </div>
          <h3>Breakfast</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>
      </div>
      <div className="fitness">
        <div className="fitness__img">
          <img src={facilitiesImg} alt="facilitiesImg" />
        </div>
        <div className="fitness__item">
          <h1 className="fitness__item__title">
            Finest Luxury Hotels
            <span> & Resort</span>
          </h1>

          <div className="activity">
            <p className="fitness__item__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="activity-card">
              <div className="activity-item">
                <h3>120K+</h3>
                <span>Website User</span>
              </div>
              <div className="activity-item">
                <h3>110K+</h3>
                <span>Happy Clients</span>
              </div>
              <div className="activity-item">
                <h3>20K+</h3>
                <span>Active Hotels</span>
              </div>
              <div className="activity-item">
                <h3>8Y+</h3>
                <span>Company Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
