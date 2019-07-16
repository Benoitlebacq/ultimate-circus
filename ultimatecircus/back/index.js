const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "betinvestwild@gmail.com",
    pass: emailPassword
  }
});

app.post("/contact", (req, res) => {
  const pseudo = req.body.pseudo;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;
  const bet = req.body.bet;

  let HelperOptions = {};

  HelperOptions = {
    from: `betinvestwild@gmail.com`,
    to: "betinvestwild@gmail.com",
    subject: subject,
    html: `<h3>Message de : ${pseudo}; ${email}</h3>
      <p>${message}</p>`
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

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
