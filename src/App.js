import React from "react";
import { BrowswerRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Homepage";

const App =() => {
  return (
    <div className="header">
      <nav>
        <Link to="/"><button id="home-button">Home</button></Link>
        <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch>
        <Route path="/pizza" component={Form} />
        <Route path ="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
