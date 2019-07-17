import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Tickets from "./Tickets";
import ShoppingCart from "./ShoppingCart";
import "./app.css";
import CircusAct from "./CircusAct";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  state = {
    email: ""
  };
  getEmail = email => {
    this.setState({ email: email });
  };
  render() {
    return (
      <div className="ui container">
        <BrowserRouter history={history}>
          <Header getEmail={this.getEmail} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tickets" exact component={Tickets} />
            <Route
              path="/shopping"
              render={props => (
                <ShoppingCart {...props} email={this.state.email} />
              )}
            />
            <Route path="/acts" exact component={CircusAct} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
