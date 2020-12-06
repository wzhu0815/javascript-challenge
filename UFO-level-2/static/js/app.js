// from data.js
var tableData = data;

// YOUR CODE HERE!

var tb = d3.select("tbody");

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

screenList = ["datetime", "city", "state", "shape"];

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var filterData = tableData;

  // try the forEach method didn't work
  for (i = 0; i < screenList.length; i++) {
    var inputElement = d3.select("#" + screenList[i]);
    var inputValue = inputElement.property("value");

    //   console.log(inputValue);
    if (inputValue === "") {
      filterData = filterData;
    } else {
      filterData = filterData.filter(
        (obj) => obj[screenList[i]] === inputValue
      );
    }

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
