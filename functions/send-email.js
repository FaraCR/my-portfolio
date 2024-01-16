const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { error } = require("console");
require("dotenv").config();

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/send-emails", (req, res) => {
  res.json({ message: "Hello from server" });
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
  authMethod: "login", 
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error with email verification:", error);
  } else {
    console.log("Server is ready to send emails!");
  }
});

app.post("/send-emails/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: "Interview",
      html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message sent" });
      }
    });
  }
);


app.get( '*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

module.exports = app;
