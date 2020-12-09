// from data.js
var tableData = data;

// YOUR CODE HERE!

var tb = d3.select("tbody");
// hardcoding method
// tableData.forEach((obj) => {
//   row = tb.append("tr");
//   row.append("td").text(obj.datetime);
//   row.append("td").text(obj.city);
//   row.append("td").text(obj.state);
//   row.append("td").text(obj.country);
//   row.append("td").text(obj.shape);
//   row.append("td").text(obj.durationMinutes);
//   row.append("td").text(obj.comments);
// });

// nested forEach method (based on the clean and completed data)

tableData.forEach((obj) => {
  row = tb.append("tr");
  Object.values(obj).forEach((obj2) => {
    row.append("td").text(obj2);
  });
});

d3.selectAll(".table-head").style("font-size", "15px");

var button = d3.select("#filter-btn");
var form = d3.selectAll("#fil-form");

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  //   console.log(inputValue);
  if (inputValue === "") {
  } else {
    var filterData = tableData.filter((obj) => obj.datetime === inputValue);
    tb.html("");
    filterData.forEach((obj) => {
      row = tb.append("tr");
      Object.values(obj).forEach((obj2) => {
        row.append("td").text(obj2);
      });
    });
  }
}
button.on("click", runEnter);
form.on("submit", runEnter);
