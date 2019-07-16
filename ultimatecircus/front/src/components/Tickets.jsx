import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./tickets.css";

export default class Tickets extends Component {
  render() {
    return (
      <div className="ticket-comp">
        <h1>TICKETS</h1>

        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="height wide column">
                <p className="tickets-category">Adulte</p>
              </div>
              <div className="six wide column">
                <p className="price">14€</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() =>
                    Swal.fire("Good job!", "You clicked the button!", "success")
                  }
                >
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </div>
            </div>
            <div className="ui row">
              <div className="height wide column">
                <p className="tickets-category">Adulte</p>
              </div>
              <div className="six wide column">
                <p className="price">14€</p>
              </div>
              <div className="two wide column">
                <Button animated="vertical" className="red">
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </div>
            </div>
            <div className="ui row">
              <div className="height wide column">
                <p className="tickets-category">Adulte</p>
              </div>
              <div className="six wide column">
                <p className="price">14€</p>
              </div>
              <div className="two wide column">
                <Button animated="vertical" className="red">
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="fluid"
          src="https://steamcdn-a.akamaihd.net/steam/apps/760410/header.jpg?t=1559559318"
          alt="afraid"
        />
      </div>
    );
  }
}
