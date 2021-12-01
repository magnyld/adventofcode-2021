const express = require("express");
const day1_data = require("./day1");
const app = express();
const port = 3000;


function getDay1_part2_data() {

  var newData = [];

  for (var j = 0; j <= day1_data.depths.length; j++) {
    newData.push(day1_data.depths[j] + day1_data.depths[j+1] + day1_data.depths[j+3]);
  }

  return newData;
}


function calcIncreases (data) {

  var inc = 0,
      debug = "";

  for (var j = 1; j <= data.length; j++) {

    if (data[j-1] < data[j]) {
      inc++;
    }
  }

  return "increases: " + inc + debug;
}

function getResults() {

  return "" +
    "Day 1 part 1: " + calcIncreases(day1_data.depths) + "<br>" +
    "Day 1 part 2: " + calcIncreases(getDay1_part2_data());

}


app.get("/", (req, res) => res.send(getResults()));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
