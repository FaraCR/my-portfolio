const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { error } = require('console');
require('dotenv').config();


const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server"})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log("Error with email verification")
    } else {
        console.log("Server is ready to send emails!")
    }
})

app.listen( PORT , () => {
    console.log(`Server is running on port ${PORT}`); 
})