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
  // const message = req.body.message;
  // const subject = req.body.subject;
  // const bet = req.body.bet;

  let HelperOptions = {};

  HelperOptions = {
    from: `${email}`,
    to: "betinvestwild@gmail.com",
    subject: "subject",
    html: `balbalbalbalbalbalb`
  };
  transporter.sendMail(HelperOptions, (error, info) => {
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
