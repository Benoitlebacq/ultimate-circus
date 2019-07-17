import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default class Header extends Component {
  getEmail = (email, name) => {
    this.props.getEmail(email, name);
  };
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link exact to="/" className="item">
          <img
            src="http://icons.iconarchive.com/icons/flat-icons.com/flat/256/Circus-icon.png"
            alt="home icone"
          />
        </Link>
        <div className="right menu" />
        <Link exact to="/tickets" className="item">
          Buy Tickets
        </Link>
        <Link exact to="/acts" className="item">
          Circus Acts
        </Link>
        <GoogleAuth getEmail={this.getEmail} />
      </div>
    );
  }
}
