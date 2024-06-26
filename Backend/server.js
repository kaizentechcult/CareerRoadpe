const express = require("express");
const app = express();
var hivesigner = require("hivesigner");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

var client = new hivesigner.Client({
  app: 'demo',
  callbackURL: 'https://demo.hivesigner.com',
  scope: ['vote', 'comment']
});

client.login("params", "callbackURL");

app.listen(8080);
