import React from "react";

export default function Our() {
  return (
    <div className="our">
      <div className="containers">
        <div className="our-card">
          <div className="our-card__item">
            <h3>subscribe to our</h3>
            <h1>NEWSLETTER</h1>
          </div>
          <form>
            <input type="text" placeholder="Your email address" />
            <button href="#">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
