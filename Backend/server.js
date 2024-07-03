const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080; // Use environment variable for port

// Configure CORS for development (localhost:3000)
const allowedOrigins = [
  "http://localhost:5173",
  "https://career-roadpe.vercel.app",
];
app.use(cors({ origin: allowedOrigins }));

const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
