const express = require("express");

const app = express();

app.use(express.json());

const credentials = {
  apiKey: "MyAppAPIkey",
  username: "MyAppUsername",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);
const voice = AfricasTalking.VOICE;

// Get the voice service

function makeCall() {
  const options = {
    // Set your Africa's Talking phone number in international format
    callFrom: "+254730731216",
    // Set the numbers you want to call to in a comma-separated list
    callTo: ["+254740924507"],
  };

  // Make the call
  voice.call(options).then(console.log).catch(console.log);
}

// makeCall();

app.listen(5000, () => console.log("Backend running on port 5000"));
