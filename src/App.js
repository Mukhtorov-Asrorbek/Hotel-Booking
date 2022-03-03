// import React-Router-Dom
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
// Import Components
import Calls from "./components/Calls";
import Package from "./components/Package";
import TourPlan from "./components/TourPlan";
import Hotel from "./components/Hotel";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Dining from "./components/Dining";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Other from "./components/Other";
import About from "./components/About";
import Our from "./components/Our";
import Playing from "./components/Playing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calls />
        <TourPlan />
        <Router>
          <main className="package">
            <div className="container">
              <ul className="package-top">
                <NavLink exact to="/">
                  Package Summary
                </NavLink>
                <NavLink to="/hotel">Hotel Information</NavLink>
                <NavLink to="/rooms">Rooms</NavLink>
                <NavLink to="/facilities">Facilities & Activities</NavLink>
                <NavLink to="/dining">Dining & Entertainment</NavLink>
                <NavLink to="/reviews">Luxury Charters</NavLink>
                <NavLink to="/questions">Our Special Guests</NavLink>
              </ul>
              <Switch>
                <Route exact path={"/"} component={Package}></Route>
                <Route path={"/hotel"} component={Hotel}></Route>
                <Route path={"/rooms"} component={Rooms}></Route>
                <Route path={"/facilities"} component={Facilities}></Route>
                <Route path={"/dining"} component={Dining}></Route>
                <Route path={"/reviews"} component={Reviews}></Route>
                <Route path={"/questions"} component={Questions}></Route>
              </Switch>
            </div>
          </main>
        </Router>
        <Other />
        <About />
        <Our />
        <Playing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
