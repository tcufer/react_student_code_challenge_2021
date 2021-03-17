const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8888;

app.use(cors({}));
app.use(bodyParser.json());

// Hi call
app.get("/", (req, res) => {
  res.json({ message: "Hi!" });
});

// calculate BMI
app.post("/calculate/bmi", (req, res) => {
  if (!req.body.weight || !req.body.height) {
    res.status(400);
    res.json({ error: true, message: "Need weight and height" });
  }
  const weight = req.body.weight;
  const height = req.body.height;

  res.send({
    result: (weight / Math.pow(height / 100, 2)).toFixed(2),
  });
});

// Authentication
app.post("/auth/login", (req, res) => {
  const username = "developer@mediately.co";
  const password = "devmediately";

  if (req.body.username !== username || req.body.password !== password) {
    res.status(401);
    return res.json({ error: true, message: "Invalid credentials!" });
  }

  return res.json({
    isLoggedIn: true,
    name: "John",
    surname: "Doe",
    doctor: true,
  });
});

// Run
app.listen(port, () => {
  console.log(`🚀 Server running on: http://localhost:${port}`);
});
