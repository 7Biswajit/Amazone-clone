const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "pk_test_51K96UHSEjn9TKBMHZtwlIkqIfBUETj8r7Zmsc6QZMzjWXUjuTxhkDKNdknJmQheszVBGXwDFce4wdLUhvpEroDxw00Q4wwgg7Y"
  );

  // - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

      // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

})

//listen compand
exports.api = functions.https.onRequest(app);



// http://localhost:5001/e-challenge-84892/us-central1/api