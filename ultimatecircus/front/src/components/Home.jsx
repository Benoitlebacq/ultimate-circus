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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          earum unde autem dolorem voluptates id similique officia harum. Culpa,
          fugiat harum nam tempore doloribus quasi blanditiis aliquam
          repellendus laborum pariatur?
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cupiditate, alias culpa repudiandae adipisci sequi! Iste est esse
            molestias distinctio nobis dolorum iure exercitationem. Sint iure
            voluptas explicabo deleniti dolorum!
          </p>
        </p>
      </div>
    );
  }
}
