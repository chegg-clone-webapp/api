const express = require("express");
const app = express();
const port = 8000;

// import routes
const index = require("routes/index.js")

app.get("/", (req, res) => {
  res.send("API works");
});

app.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});


