const express = require("express");
const app = express();


const users = [];

for (let i = 0; i < 10; i++) {
  const user = {
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    age: Math.floor(Math.random() * 50) + 18,
    role: ['user', 'admin', 'manager'][Math.floor(Math.random() * 3)],
    address: {
      street: `Street ${i + 1}`,
      city: `City ${i + 1}`,
      state: ['CA', 'NY', 'TX', 'FL'][Math.floor(Math.random() * 4)],
      zip: Math.floor(Math.random() * 10000) + 1000
    }
  };
  users.push(user);
}

console.log(users);

app.get("/", (req, res) => {
  res.send(users);
});

app.listen(8080, () => {
  console.log("Sever is listening to port 8080");
});
