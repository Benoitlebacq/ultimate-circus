const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "betinvestwild@gmail.com",
    pass: "toto123456!"
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const tickets = req.body.tickets;
  const name = req.body.name;
  const adult = req.body.adult;
  const pinguin = req.body.pinguin;
  const oneEyed = req.body.oneEyed;

  let placeOrder = {};

  placeOrder = {
    from: `${email}`,
    to: "betinvestwild@gmail.com",
    subject: `Hell Circus order : ${tickets} €`,
    html: `Total order : ${tickets} €<br/>
    name : ${name}  <br/>
    total adults : ${adult} * ${14} = ${14 * adult} €<br/>
    total pinguins : ${pinguin}  * ${4} = ${4 * pinguin} €<br/>
    total One Eyed Dudes : ${oneEyed}  * ${8} = ${8 * oneEyed} €
    
    `
  };
  transporter.sendMail(placeOrder, (error, info) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
  let receiveOrderConfirmation = {};

  receiveOrderConfirmation = {
    from: "betinvestwild@gmail.com",
    to: `${email}`,
    subject: `Hell Circus order : ${tickets} €`,
    html: `Hi, ${name}, this is an automatic email, do not repply <br/>
    total order : ${tickets} € <br/>
    total adults : ${adult} * ${14} = ${14 * adult} €<br/>
    total pinguins : ${pinguin}  * ${4} = ${4 * pinguin} €<br/>
    total One Eyed Dudes : ${oneEyed}  * ${8} = ${8 * oneEyed} € <br/>
    <br/>
    Your order has been placed , you must now send monney via paypal to YOUWILLDIE@hellcircus.com <br/>
    Once we got the monney you order will be validate and you'll receive a confirmation email<br/>
    <br/>
    Have a good Death,<br/>
    the HELL CIRCUS TEAM
    `
  };
  transporter.sendMail(receiveOrderConfirmation, (error, info) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(8000, function() {
  console.log("Example app listening on port 8000!");
});
