const express = require("express");
const app = express();
var hivesigner = require("hivesigner");
var client = new hivesigner.Client({
  app: "demo",
  callbackURL: "https://demo.hivesigner.com",
  scope: ["vote", "comment"],
});



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res)=>{
  console.log(req.body);
})

client.login("params", "callbackURL");

app.listen(8080, () => {
  console.log("Sever is listening to port 8080");
});
