// SVG wrapper dimensions are determined by the current width
// and height of the browser window.
var svgWidth = 1070;
var svgHeight = 660;
var margin = {
 top: 50,
 right: 50,
 bottom: 50,
 left: 50
};
var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;
d3.json("../resources/raw_data/Year/retail_data.json", function(data) {
 //console.log(data)
 var yearlyTotals = [];
 var year = [];
data.forEach(element => {
 yearlyTotals.push(element.Total)
 year.push(element.Year)
});
// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
 .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
 .append("g")
   .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");
 // Add X axis
 var x = d3.scaleLinear()
   .domain([d3.min(year), d3.max(year)])
   .range([ 0, width ]);
 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x));
 // Add Y axis
 var y = d3.scaleLinear()
   .domain([0, d3.max(yearlyTotals)])
   .range([ height, 0]);
 svg.append("g")
   .call(d3.axisLeft(y));
 // Add dots
 svg.append('g')
   .selectAll("dot")
   .data(data)
   .enter()
   .append("circle")
     .attr("cx", function (d) { return x(d.Year); } )
     .attr("cy", function (d) { return y(d.Total); } )
     .attr("r", 4)
     .style("fill", function (d) {
     switch(d.NAICS) {
       case 441:
         return "#beb8e0";
         break;
       case 442:
         return "#7b56e0";
         break;
       case 443:
         return "#a7ffd9";
           break;
       case 444:
         return "#fff2a5";
         break;
       case 445:
         return "#c257e3";
         break;
       case 446:
         return "#5696e0";
           break;
       case 447:
         return "#ffc2f3";
           break;
       case 448:
         return "#e0c7ff";
           break;
       case 551:
         return "#58fff7";
       case 772:
         return "#b8e0c4";
           break;
       default:
         return "#888888";
       }
   })
});