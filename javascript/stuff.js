// var svg = d3.select("svg");
//
// var circle = svg.selectAll("circle")
//     .data([32, 57, 112, 293])
//
// var someVarName = circle.enter().append("circle");
//
// someVarName.style("fill", "steelblue")
//   .attr("r", function(d) { return Math.sqrt(d); })
//   .attr("cy", 60)
//   .attr("cx", function() { return Math.random() * 200; });
//
//
//
//
//

// _______________________________

var width  = 300;
var height = 300;

var svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height).selectAll("circle")
  .data([32, 57, 112, 293])
  .enter().append("circle")
  .style("fill", "steelblue")
  .attr("r", function(d) { return Math.sqrt(d); })
  .attr("cy", 60)
  .attr("cx", function() { return Math.random() * 200; });



$('button').on('click', function (event) {
  console.log('SOMETHNG')
});
