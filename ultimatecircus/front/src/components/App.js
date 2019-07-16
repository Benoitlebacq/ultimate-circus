import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tickets from "./Tickets";
import ShoppingCart from "./ShoppingCart";
import "./app.css";
import CircusAct from "./CircusAct";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/tickets" exact component={Tickets} />
          <Route path="/shopping" exact component={ShoppingCart} />
          <Route path="/acts" exact component={CircusAct} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
