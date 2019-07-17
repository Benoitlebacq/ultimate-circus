import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./tickets.css";

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
      persons: []
    };
  }

  addToCart = (value, name) => {
    Swal.fire({
      title: "Ticket added to your cart.",
      text: "Do you want to go to checkout ?",
      customClass: {
        title: "title-class",
        image: "image-class",
        content: "content-class",
        confirmButton: "confirm-button-class",
        cancelButton: "cancel-button-class"
      },
      background: "#000",
      imageUrl:
        "https://cdn.images.dailystar.co.uk/dynamic/1/photos/15000/620x/killer-clowns-terrorising-children-near-schools-Thamesview-654332.jpg",
      imageAlt: "Evil Clown",
      focusCancel: true,
      showCancelButton: true,
      confirmButtonColor: "#276949",
      cancelButtonColor: "#b62828",
      confirmButtonText: "Yes, go to checkout!",
      cancelButtonText: "No I want MORE TICKET !!"
    }).then(result => {
      if (result.value) {
        setTimeout(
          this.props.history.push("/shopping", {
            tickets: this.state.tickets,
            persons: this.state.persons
          }),
          1500
        );
      }
    });
    this.setState({
      tickets: this.state.tickets + value,
      persons: [...this.state.persons, name]
    });
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
                    tickets: this.state.tickets,
                    persons: this.state.persons
                  }
                }}
                className="item"
              >
                <i ria-hidden="true" className="red shopping cart big icon" />
                {this.state.tickets === null ? null : (
                  <span className="euros">{this.state.tickets} €</span>
                )}
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
                  onClick={() => this.addToCart(14, "adult")}
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
                  onClick={() => this.addToCart(8, "one eyed dude")}
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
                <p className="tickets-category">Pinguin</p>
              </div>
              <div className="six wide column">
                <p className="price">4€</p>
              </div>
              <div className="two wide column">
                <Button
                  animated="vertical"
                  className="red"
                  onClick={() => this.addToCart(4, "Pinguin")}
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
