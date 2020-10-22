import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import AnimatedCursor from "./AnimatedCursor";
import Navbar from "./Navbar";

const Landing = () => <div></div>;
const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);
const ding = () => (
  <div>
    <h2>ding</h2>
  </div>
);

function App() {
  return (
    <div>
      <Navbar />
      <AnimatedCursor />

      <div className="mainApp">
        <div className="overlay">
          <div className="thyme">
            <h1>Thyme.</h1>
            <p className="slogan">Your meeting place ? Sorted !</p>
          </div>

          <BrowserRouter>
            <div>
              <Route exact={true} path="/" component={Landing}></Route>
              <Route exact path="/surveys" component={Dashboard}></Route>
              <Route exact path="/surveys/new" component={ding}></Route>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

Notes:
* The Router takes the path as a string and checks whether the string is present(substring)
inside the address typed in the browser.
* We need to add 'exact' parameter inside the router tag in order to show the landing
component only when the path is / but not any other address containing '/'
* If exact isnt added, then when we go to the /surveys, obviously route path '/' is 
present inside the /surveys (a substring) and hence it shows Landing component too
which is undesirable
* We can just type only the exact keyword without having to mention = {true}, React
automatically sets the default value as true

*/
