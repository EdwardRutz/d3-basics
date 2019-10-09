/*
* /main.js
* Data Visualization with D3.js
*/

// Circles representing data in an array
d3.csv("data/ages.csv").then(function(data){
    data.forEach((d) => {
        d.age = +d.age;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var circles = svg.selectAll("circle")
      .data(data);

    circles.enter()
      .append("circle")
        .attr("cx", (d, i) => {
          console.log(d);
          return (i * 50) + 25;
        })
        .attr("cy", 100)
        .attr("r", (d) => {
            return d.age * 2;
        })
        .attr("fill", (d) => {
            if (d.name == "Tony") {
                return "blue";      //Tony's circle is blue
            }
            else {
                return "red";
            }
        });
}).catch((error) => {
    console.log(error);
});



// A basic circle
var svg = d3.select("#chart-area-circle").append("svg")
  .attr("width", 200)
  .attr("height", 200);

var circle = svg.append("circle")
    .attr("cx", 80)
    .attr("cy", 100)
    .attr("r", 70)
    .attr("fill", "blue");


