/*
* /main.js
* Data Visualization with D3.js
*/

// Circles representing data in a csv
d3.csv("data/ages.csv").then(function(data){
  data.forEach((d) => {
    d.age = +d.age;
  });

  var svg2 = d3.select("#chart-area2").append("svg")
    .attr("width", 200)
    .attr("height", 200);

  var circles = svg2.selectAll("circle")
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




