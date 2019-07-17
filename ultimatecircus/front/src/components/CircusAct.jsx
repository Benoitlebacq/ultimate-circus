import React, { Component } from "react";
import CircusCards from "./CircusCards";
import "./circusAct.css";

export default class CircusAct extends Component {
  render() {
    return (
      <div>
        <h1>CIRCUS ACTs</h1>
        <div className="ui divided four column grid">
          <div className="stretched row">
            <div className="column">
              <CircusCards
                url={
                  "https://i.pinimg.com/564x/7e/5d/ec/7e5decb51f5e30906ec5362f982e1453.jpg"
                }
                description={"LeaRn With 'IT' hoW tO mAke WonDErfUl BalLoOns !"}
                name={"IT"}
                ability={"tHE baLl0on cATchEr"}
              />
            </div>
            <div className="column">
              <CircusCards
                url={
                  "https://i.pinimg.com/564x/0c/1e/1b/0c1e1b75296b2ddf13229aebc2203fe7.jpg"
                }
                description={"bl"}
                name={"BiRtHDeaTh"}
                ability={"BeST BIRthDaY MaTe"}
              />
            </div>
            <div className="column">
              <CircusCards
                url={
                  "https://i.pinimg.com/564x/bc/4e/3d/bc4e3d65d0283b0e3dca16679df477b6.jpg"
                }
                description={"bl"}
                name={"KiLly"}
                ability={"tHE CooCKER"}
              />
            </div>
            <div className="column">
              <CircusCards
                url={
                  "https://i.pinimg.com/564x/e2/00/cf/e200cf2a8505820fee9439ab892a58bd.jpg"
                }
                description={"bl"}
                name={"FaAtheR FouRraSs"}
                ability={"ThE SEcrET KEePer"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
