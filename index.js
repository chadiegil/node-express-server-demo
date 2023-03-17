<<<<<<< HEAD
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
=======
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world update");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
>>>>>>> 47e655157d2313474e09b7423ef89fb71b379d82
