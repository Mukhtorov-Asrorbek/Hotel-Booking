import React from "react";
import "./All.scss";
export default function Calls() {
  return (
    <div>
      <main className="contact">
        <div className="container">
          <main className="contact-main">
            <main className="contact-item">
              <h4 className="contact-item__call">Questions?</h4>
              <h4 className="contact-item__call">Need Help?</h4>
              <span className="contact-item__link">
                Call us on (+123) 456 1500
              </span>
            </main>
            <main className="contact-center">
              <h3 className="contact-center__gift">BTP Gift Card</h3>
              <h3 className="contact-center__star">Loyalty Program</h3>
            </main>
          </main>
        </div>
      </main>
    </div>
  );
}
