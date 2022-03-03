import React from "react";
// Import Images
import familyRoom from "../images/family-room.webp";
import doubleRoom from "../images/double-room.webp";
import singleRoom from "../images/Single-room.webp";
import luxuryRoom from "../images/Luxury-room.webp";
import guestRoom from "../images/Guests-room.webp";
import deluxeRoom from "../images/Deluxe-room.webp";
export default function Rooms() {
  return (
    <div className="rooms">
      <h1 className="rooms-title">Our Popular Rooms</h1>
      <div className="rooms-box">
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={familyRoom} alt="familyRoom" />
          </div>
          <h3>Family Room</h3>
          <h5>
            $140/ <span>per Night </span>{" "}
          </h5>
        </div>
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={doubleRoom} alt="doubleRoom" />
          </div>
          <h3>Double Room</h3>
          <h5>
            $160/ <span>per Night </span>{" "}
          </h5>
        </div>
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={singleRoom} alt="singleRoom" />
          </div>
          <h3>Single Room</h3>
          <h5>
            $110/ <span>per Night </span>{" "}
          </h5>
        </div>
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={luxuryRoom} alt="luxuryRoom" />
          </div>
          <h3>Luxury Room</h3>
          <h5>
            $120/ <span>per Night </span>{" "}
          </h5>
        </div>
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={guestRoom} alt="guestRoom" />
          </div>
          <h3>Guest Room</h3>
          <h5>
            $100/ <span>per Night </span>{" "}
          </h5>
        </div>
        <div className="rooms-box__item">
          <div className="rooms-box__item__img">
            <img src={deluxeRoom} alt="deluxeRoom" />
          </div>
          <h3>Deluxe Room</h3>
          <h5>
            $180/ <span>per Night </span>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}
