import React from "react";
import LoggedIn from "../LoggedIn";

import "../App.css";

function App() {
  return (
    <div className="mainApp">
      <div className="App">
        <p>Hello World</p>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    </div>
  );
}

export default App;
