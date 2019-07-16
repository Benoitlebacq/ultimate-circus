import React, { Component } from "react";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null
    };
  }
  componentDidMount() {
    this.setState({ tickets: this.props.location.state.tickets });
  }
  // getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps);
  //   console.log(prevState);
  // }
  renderShoppinCart = () => {
    return this.state.tickets === null ? (
      <div>
        <h4>Your cart is empty !</h4>
        <p>
          An evil clown is gonna come to YOUR PLACE if don't buy any ticket
          RIGHT NOW !
        </p>
      </div>
    ) : (
      <div>
        <h4>Well Done !</h4>
        <p>text a mettre qd on est content</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderShoppinCart()}
        <p>blabla {console.log(this.state.tickets)}</p>
      </div>
    );
  }
}
