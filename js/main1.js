/*
* /main.js
* Creating a basic blue circle
* Creating a circles from an array of data.
* The circle sizes reflect the data value
*/

// A basic circle
var svgCircle = d3.select("#chart-area-circle").append("svg")
  .attr("width", 200)
  .attr("height", 200);

var circle = svgCircle.append("circle")
  .attr("cx", 80)
  .attr("cy", 120)
  .attr("r", 70)
  .attr("fill", "blue");

// Circles representing data in an array
var data = [25, 20, 10, 12, 15];

var svg1 = d3.select("#chart-area1").append("svg")
  .attr("width", 200)
  .attr("height", 200);

var circles1 = svg1.selectAll("circle")
  .data(data);

circles1.enter()
  .append("circle")
  .attr("cx", (d, i) => {
    console.log("Item: " + d,  "Index: " + i);
    return (i * 50) + 25;
  })
  .attr("cy", 100)
  .attr("r", (d) => {
    console.log("Item: " + d);
    return d;
  })
  .attr("fill", "red");

