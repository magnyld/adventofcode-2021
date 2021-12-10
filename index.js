const express = require("express");
const currentDay = require("./day10");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send(currentDay.getResults()));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
