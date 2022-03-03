import React from "react";
// Import Images
import megan from "../images/megan-fox.webp";
import aboutStar from "../images/grand-star.webp";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="about-title">WHAT PEOPLE THINKS ABOUT US</h1>
        <div className="about-box">
          <div className="about-card">
            <div className="about-card__img">
              <img src={megan} alt="megan" />
            </div>
            <h3 className="about-card__img__name">Megan Fox</h3>
            <h4 className="about-card__img__birth">Stayed 18 Nov, 2019</h4>
            <div className="about-card__star">
              <img src={aboutStar} alt="AboutStar" />
              <img src={aboutStar} alt="AboutStar" />
              <img src={aboutStar} alt="AboutStar" />
              <img src={aboutStar} alt="AboutStar" />
              <img src={aboutStar} alt="AboutStar" />
            </div>
            <p className="about-card__text">
              It was very nice hotel with cleanliness. Staff behavior was good
              and polite. They welcome us very well. Issue was only that Lift
              was not in working and we were allotted to 3rd floor and amenities
              articles were in corner of gallery which were giving bad feeling.
              Breakfast was good and support of the staff was also very nice.
              Location is not good as per atmosphere, it is very nearby most of
              the popular places but self location in a narrow street is not
              good. Overall it was a good experience and could recommend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
