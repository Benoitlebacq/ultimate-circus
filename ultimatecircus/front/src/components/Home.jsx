import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>HELL CIRCUS</h1>
        <Image
          circular
          src="https://cdn3.movieweb.com/i/article/c4NE2MNDs9x6uGuG9DORVgaey1Kvct/798:50/It-Movie-Review-2017.jpg"
          className="ui fluid image"
        />
        <h3>About :</h3>
        <p className="paragraph">
          <span className="hellcircus">Hell circus</span> is an{" "}
          <span className="evilcircus">evil circus</span> where you can see ALL
          the BEST <span className="killerclown">Killer Clowns</span> in the
          world !
        </p>
        <p>
          Be ready to get <span className="killed">KILLED</span> by those
          <span className="monsters">MONSTERS</span> ! Don't be affraid, this
          will be the best pain you'll ever feel in your entire life !
        </p>
      </div>
    );
  }
}
