const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  //   const height = req.body.height;
  //   const base = req.body.base;
  const { height, base } = req.body;
  const area = 0.5 * height * base;
  res.send(`<h2>Area of Triangle is : ${area}</h2>`);
});
app.post("/circle", (req, res) => {
  //   const radius = req.body.radius;
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of Circle is : ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
