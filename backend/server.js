const express = require("express");
const dotenv = require("dotenv")
const app = express();

require('dotenv').config()

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}..`))