import React from "react";
import { BrowswerRouter as Router, Switch, Route, Link } from "react-router-dom";
import PizzaForm from "./PizzaForm.js";
import HomePage from "./HomePage.js";

const App =() => {
  return (
    <div className="header">
      <nav>
        <Link to="/"><button id="home-button">Home</button></Link>
        <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch>
        <Route path="/pizza" component={PizzaForm} />
        <Route path ="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
