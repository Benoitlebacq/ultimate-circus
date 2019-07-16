import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tickets from "./Tickets";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/tickets" exact component={Tickets} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
