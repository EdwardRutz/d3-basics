/*
* /main.js
* Data Visualization with D3.js
*/

// Circles representing data in an array
d3.csv("data/ages.csv").then(function(data){
    data.forEach((d) => {
        d.age = +d.age;
    });
        console.log(data);
});
//
// var svg = d3.select("#chart-area").append("svg")
//     .attr("width", 400)
//     .attr("height", 400);
//
// var circles = svg.selectAll("circle")
//   .data(data);
//
// circles.enter()
//   .append("circle")
//     .attr("cx", (d, i) => {
//       console.log("Item: " + d,  "Index: " + i);
//       return (i * 50) + 25;
//     })
//     .attr("cy", 25)
//     .attr("r", (d) => {
//         console.log("Item: " + d);
//         return d;
//     })
//     .attr("fill", "red");
//
//
//
// // A basic circle
// var svg = d3.select("#basic-circle").append("svg")
//   .attr("width", 400)
//   .attr("height", 400);
//
// var circle = svg.append("circle")
//     .attr("cx", 100)
//     .attr("cy", 250)
//     .attr("r", 70)
//     .attr("fill", "blue");
