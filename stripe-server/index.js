const express = require('express');
const app = express();
const path = require('path');

require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_PRODUCTION);

const buildPath = path.join(__dirname, '..', 'build');


const bodyParser = require("body-parser");
//const cors = require("cors");
//delete cors because of the tutorial

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());

app.use(express.static(buildPath));

app.post("/stripe/charge", async (req, res) => {


  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started...");
});
