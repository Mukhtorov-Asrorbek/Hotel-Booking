import React from "react";
// Import Images
import footerLogo from "../images/footer-logo.webp";
import footerFacebook from "../images/footer-facebook.webp";
import footerYoutube from "../images/footer-youtube.webp";
import footerInstagram from "../images/footer-instagram.webp";
import footerLink from "../images/footer-link.webp";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-card__item">
            <div className="footer-card__item__img">
              <h1 className="footer-card__item__img__title">
                BEST <span>TOUR</span> PLAN{" "}
              </h1>
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div className="footer-card__item__box">
              <h1 className="footer-card__item__box__title">ALL CATEGORIES</h1>
              <a href="#">All Deals</a>
              <a href="#">Hotels</a>
              <a href="#">Activities</a>
              <a href="#">Spa Packages</a>
              <a href="#">Hotel Day Packages</a>
              <a href="#">Restaurants</a>
              <a href="#">Fitness</a>
              <a href="#">Rodrigues</a>
            </div>
            <div className="footer-card__item__box">
              <h1 className="footer-card__item__box__title">
                ADDITIONAL INFORMATION
              </h1>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">How does it work?</a>
              <a href="#">Frequently Asked Questions</a>
              <a href="#">Deals.mu loyalty program</a>
              <a href="#">Promote your Business on BTP</a>
              <div className="social-network">
                <h1 className="social-network__title">SOCIAL NETWORK</h1>
                <div className="social-network__net">
                  <a href="https://www.facebook.com/">
                    <img src={footerFacebook} alt="footerFacebook" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <img src={footerYoutube} alt="footerYoutube" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={footerInstagram} alt="footerInstagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-card__item__box">
              <h1 className="footer-card__item__box__title">
                LEGAL INFORMATION
              </h1>
              <a href="#">Terms & Conditions</a>
              <a href="#">Disclaimer</a>
              <a href="#">Cancellation policy</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="footer-card__box">
            <div className="footer-card__box__detail">
              <h1 className="footer-card__box__detail__title">
                CONTACT DETAILS
              </h1>
              <p className="footer-card__box__detail__text">
                Feel free to contact us by phone, email or by our contact form
              </p>
              <h4>
                9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United
                States
              </h4>
              <div className="footer-contact">
                <span>Tel (business hours) : 269 1500</span>
                <span>
                  Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00
                  pm)
                </span>
                <span>
                  Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)
                </span>
              </div>
              <h5>cherly.lawson@example.com</h5>
            </div>
            <div className="footer-card__box__item">
              <h1 className="footer-card__box__item__title">
                SEND US A MESSAGE
              </h1>
              <form>
                <input type="text" placeholder="Your Full Name*" required />
                <input type="text" placeholder="Phone Number*" required />
              </form>
              <textarea placeholder="Message" required></textarea>
              <div className="send">
                <a href="#">Send</a>
                <h3 className="send-text">* Required Fields</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__item">
            <div className="footer-box">
              <a className="footer-bottom__item_net" href="#">
                Disclaimer
              </a>
              <a className="footer-bottom__item_net" href="#">
                Conditions of use
              </a>
              <a className="footer-bottom__item_net" href="#">
                cancellation policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
