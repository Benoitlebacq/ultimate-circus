import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link exact to="/" className="item">
          WILD CIRCUS 2.0
        </Link>
        <div className="right menu" />
        <Link exact to="/tickets" className="item">
          <i ria-hidden="true" className="red shopping cart large icon" />
        </Link>

        <GoogleAuth />
      </div>
    );
  }
}
