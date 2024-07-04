/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080; // Use environment variable for port

const roadmap = require("./api/roadmapInitialData.json");
const scholarship = require("./api/scholarship.json");
const team = require("./api/team.json");              
const article = require("./api/article.json");              

// Configure CORS for development (localhost:3000)
const allowedOrigins = [
  "http://localhost:5173",
  "https://career-roadpe.vercel.app",
];
app.use(cors({ origin: allowedOrigins }));

const users = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  name: `User ${index}`,
  email: `user${index}@example.com`,
  age: Math.floor(Math.random() * 100),
  address: {
    street: `Street ${index}`,
    city: `City ${index}`,
    state: `State ${index}`,
    zip: `Zip ${index}`,
  },
}));

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/user", (req, res) => {
  res.json(users);
});
app.get("/roadmap", (req, res) => {
  res.json(roadmap);
});
app.get("/article", (req, res) => {
  res.json(article);
});
app.get("/scholarship", (req, res) => {
  res.json(scholarship);
});
app.get("/team", (req, res) => {
  res.json(team);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
