
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello world update!!! from local");
});

app.post("/create-user", (req, res) => {
  const { username, password } = req.body; // Assuming incoming data is JSON

  console.log(`${password} ${username}`);

  res.status(200).send(`Hello ${username}!`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
