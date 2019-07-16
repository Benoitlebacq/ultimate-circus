import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./tickets.css";
import history from "./history";
// import { connect } from "react-redux";
// import { combineReducers } from "redux";
// import { bindActionCreators } from "redux";
// import { shoppin } from "../actions";

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null
    };
  }
  goToCheckout = () => {
    console.log("blabla");
  };
  addToCart = value => {
    Swal.fire("Ticket added to your cart!", "Go to Cart icon !", "success");
    // Swal.fire({
    //   title: "Ticket added to your cart.",
    //   text: "Do you want to go to checkout ?",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#276949",
    //   cancelButtonColor: "#b62828",
    //   confirmButtonText: "Yes, go to checkout!",
    //   cancelButtonText: "No stay on this page"
    // }).then(result => {
    //   if (result.value) {
    //     history.push("/shopping");
    //     setTimeout(this.goToCheckout(), 1500);
    //   }
    // });
    this.setState({ tickets: this.state.tickets + value });
  };
  render() {
    return (
      <div className="ticket-comp">
        <div className="ui grid">
          <div className="ui row">
            <div className="fourteen wide column">
              <h1>TICKETS</h1>
            </div>
            <div className="two wide column">
              <Link
                exact
                to={{
                  pathname: "/shopping",
                  state: {
                    tickets: this.state.tickets
                  }
                }}
                className="item"
              >
                <i ria-hidden="true" className="red shopping cart big icon" />
                {this.state.tickets} €
              </Link>
            </div>
          </div>
        </div>
        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="height wide column">
                <p className="tickets-category">Adult</p>
              </div>
              <div className="six wide column">
                <p className="price">14€</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() => this.addToCart(14)}
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
                <p className="tickets-category">One eyed dude</p>
              </div>
              <div className="six wide column">
                <p className="price">8€</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() => this.addToCart(8)}
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
                <p className="tickets-category">Pingouin</p>
              </div>
              <div className="six wide column">
                <p className="price">4€</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() => this.addToCart(4)}
                >
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </div>
              <img
                className="ui container fluid affraid"
                src="https://steamcdn-a.akamaihd.net/steam/apps/760410/header.jpg?t=1559559318"
                alt="afraid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(shoppin, dispatch)
});
const mapStateToProps = state => {
  return { inBasket: state.shop };
};
 */
export default Tickets;
