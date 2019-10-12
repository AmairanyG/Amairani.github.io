// Trace1 for Retail Data
var trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.retail),
    // text: data.map(row => row.greekName),
    name: "Retail",
    type: "bar"
  };
  
  // Trace 2 for eCommerce Data
  var trace2 = {
    x: data.map(row => row.year),
    y: data.map(row => row.eCommerce),
    // text: data.map(row => row.romanName),
    name: "Ecommerce",
    type: "bar"
  };
  
  // Combining both traces
  var data = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Retail vs Ecommerce results",
    barmode: "group"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("chart", data, layout);