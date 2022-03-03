import React from "react";
// Import Images
import spicy from "../images/gyro.png";
import salted from "../images/enchilada.png";
import beef from "../images/green-beans.png";
import omelet from "../images/pizza.png";
import omelette from "../images/chicken.png";
import leaf from "../images/green-salad.png";
export default function Dining() {
  return (
    <div className="dining">
      <h1 className="dining-title">Dining & Entertainment</h1>
      <div className="dining-content">
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={spicy} alt="spicy" />
          </div>
          <h3>Gyro Sandwhich</h3>
          <span>$ 2.29</span>
          <h4>20 Bowls available</h4>
        </div>
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={salted} alt="salted" />
          </div>
          <h3>Enchilada</h3>
          <span>$ 2.69</span>
          <h4>11 Bowls available</h4>
        </div>
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={beef} alt="beef" />
          </div>
          <h3>Green Beans</h3>
          <span>$ 2.29</span>
          <h4>16 Bowls available</h4>
        </div>
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={omelet} alt="beef" />
          </div>
          <h3>Pizza</h3>
          <span>$ 3.29</span>
          <h4>22 Bowls available</h4>
        </div>
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={omelette} alt="omelet" />
          </div>
          <h3>Chicken Pot Pie</h3>
          <span>$ 3.49</span>
          <h4>13 Bowls available</h4>
        </div>
        <div className="dining-content__item">
          <div className="dining-content__item__img">
            <img src={leaf} alt="omelette" />
          </div>
          <h3>Green Salad</h3>
          <span>$ 3.59</span>
          <h4>17 Bowls available</h4>
        </div>
      </div>
    </div>
  );
}
