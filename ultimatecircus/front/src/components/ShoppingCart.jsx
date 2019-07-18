import React, { Component } from "react";
import "./shoppinCart.css";
import Swal from "sweetalert2";
import axios from "axios";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null
    };
  }
  peopleCaclulate = (person, type) => {
    return person.filter(dude => {
      return dude === type;
    }).length;
  };
  componentDidMount() {
    console.log("");
    this.setState({ tickets: this.props.location.state.tickets });
  }
  confirmCommit = () => {
    Swal.fire({
      title: `An email will be send to ${this.props.email}`,
      text: "ReADy to BUy ?",
      customClass: {
        title: "title-confirm-class",
        image: "image-class",
        content: "content-class",
        confirmButton: "confirm-button-class",
        cancelButton: "cancel-button-class"
      },
      background: "#000",
      imageUrl:
        "https://i.pinimg.com/564x/1d/49/51/1d495119ac740a4a759a79e510e00277.jpg",
      imageAlt: "Evil Clown",
      focusCancel: true,
      showCancelButton: true,
      confirmButtonColor: "#276949",
      cancelButtonColor: "#b62828",
      confirmButtonText: "ReADy To Die !!",
      cancelButtonText: "I'm TOO SCaRE !!"
    }).then(result => {
      if (result.value) {
        axios
          .post(`http://localhost:8000/contact`, {
            email: this.props.email,
            tickets: this.props.location.state.tickets,
            name: this.props.name,
            adult: this.peopleCaclulate(
              this.props.location.state.persons,
              "adult"
            ),
            oneEyed: this.peopleCaclulate(
              this.props.location.state.persons,
              "one eyed dude"
            ),
            pinguin: this.peopleCaclulate(
              this.props.location.state.persons,
              "Pinguin"
            )
          })
          .then(() => {
            Swal.fire({
              title: `thanks for your order ${this.props.name}`,
              text: `CoNFIrmATIon emAiL hAS bEEn SEnT`,
              customClass: {
                text: "text-confirm-class",
                title: "title-confirm-class",
                image: "image-class",
                content: "content-class"
              },
              background: "#000",
              confirmButtonColor: "#276949",
              imageUrl:
                "https://i.pinimg.com/564x/85/17/9d/85179d7cdf34ef88eeba99fc04eb42be.jpg",
              imageAlt: "Evil Clown"
            });
            this.props.history.push("/acts");
          })
          .catch(() => {
            Swal.fire({
              title: "ErROr !",
              text: "an ErRoR hAS OcCuREd whILe SuBMiTting YOuR OrDEr",
              background: "#000",
              confirmButtonColor: "#b62828",
              customClass: {
                title: "title-confirm-class",
                image: "image-class",
                content: "content-class",
                confirmButton: "cancel-button-class"
              }
            });
          });
      }
    });
  };

  renderShoppinCart = () => {
    let adultsCount = "";
    let pinguinsCount = "";
    let oneEyedCount = "";
    return this.state.tickets === null ? (
      <div>
        <h3 className="welldone">Your cart is empty !</h3>
        <img
          className="ui centered image"
          src="https://www.topinspired.com/wp-content/uploads/2015/05/scary-clown3.jpg"
          alt="sad evil clown"
          width="50%"
        />
        <p className="empty-cart">
          An evil clown is gonna come to YOUR PLACE if don't buy any ticket
          RIGHT NOW !
        </p>
        <img
          className="ui centered image"
          src="https://talkradio.co.uk/sites/talkradio.co.uk/files/field/image/201610/clownscolombia311016.jpg"
          alt="evil clowns"
          width="75%"
        />
      </div>
    ) : (
      <div>
        <h3 className="welldone">Well Done !</h3>
        <div className="clowncontainer">
          <img
            className="happy-clown-image"
            src="https://i.pinimg.com/originals/37/02/22/3702228412b965a772d087f956c196c1.jpg"
            alt="happy evil clown"
            w
          />
        </div>

        <p className="sumup">Sum'up your order : </p>
        <div className="ticketsBought">
          {(adultsCount = this.peopleCaclulate(
            this.props.location.state.persons,
            "adult"
          ))
            ? adultsCount
            : null}{" "}
          {adultsCount ? "adult(s) ," : null}
          <br />
          {(pinguinsCount = this.peopleCaclulate(
            this.props.location.state.persons,
            "Pinguin"
          ))
            ? pinguinsCount
            : null}{" "}
          {pinguinsCount ? "pinguin(s) ," : null}
          <br />
          {(oneEyedCount = this.peopleCaclulate(
            this.props.location.state.persons,
            "one eyed dude"
          ))
            ? oneEyedCount
            : null}{" "}
          {oneEyedCount ? "One eyed dude(s)," : null}
        </div>
        <div className="button-position">
          <button
            className="ui secondary button buttoncentered"
            onClick={this.confirmCommit}
          >
            Commit to buy
          </button>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.renderShoppinCart()}</div>;
  }
}
