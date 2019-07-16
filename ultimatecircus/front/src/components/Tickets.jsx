import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class Tickets extends Component {
  render() {
    return (
      <div>
        <h1>TICKETS</h1>

        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="height wide column">
                <p>ticket pour connard</p>
              </div>
              <div className="six wide column">
                <p>Super cher</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() => console.log("clické")}
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
                <p>ticket pour connard</p>
              </div>
              <div className="six wide column">
                <p>Super cher</p>
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
                <p>ticket pour connard</p>
              </div>
              <div className="six wide column">
                <p>Super cher</p>
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
      </div>
    );
  }
}
