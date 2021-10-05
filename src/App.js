import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PhotoListing from "./components/PhotoListing";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
test        </a>
        <div className="navbar-nav mr-auto">
         
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={PhotoListing} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
