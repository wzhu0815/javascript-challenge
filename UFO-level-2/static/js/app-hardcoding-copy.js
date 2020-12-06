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
var form = d3.select("#fil-form");

screenList = ["datetime", "city", "state"];

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var inputDate = d3.select("#datetime").property("value");
  if (inputDate === "") {
    var dateFilter = tableData;
  } else {
    dateFilter = tableData.filter((obj) => obj.datetime === inputDate);
  }

  inputDate = d3.select("#city").property("value");
  if (inputDate === "") {
    var cityFilter = dateFilter;
  } else {
    cityFilter = dateFilter.filter((obj) => obj.city === inputDate);
  }

  inputDate = d3.select("#state").property("value");
  if (inputDate === "") {
    var stateFilter = cityFilter;
  } else {
    stateFilter = cityFilter.filter((obj) => obj.state === inputDate);
  }

  inputDate = d3.select("#shape").property("value");
  if (inputDate === "") {
    var shapeFilter = stateFilter;
  } else {
    shapeFilter = stateFilter.filter((obj) => obj.shape === inputDate);
  }
  tb.html("");
  shapeFilter.forEach((obj) => {
    row = tb.append("tr");
    Object.values(obj).forEach((obj2) => {
      row.append("td").text(obj2);
    });
  });
}

form.on("submit", runEnter);
button.on("click", runEnter);
