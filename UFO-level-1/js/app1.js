// from data.js
var tableData = data;

var tbody = d3.select('tbody');

tableData.forEach(function(ufoSighting) {

    // d3.event.preventDefault();
    // append tr
    var row = tbody.append('tr');

    Object.entries(ufoSighting).forEach(function([key,value]) {

        var cell = row.append('td')
        cell.text(value);
        
        });
});

var button = d3.select("#filter-btn");
button.on("click",function(){
    console.log("Hello")
    d3.event.preventDefault();
    tbody.html('');

    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach(function(selected) {
        console.log(selected);
        var row = tbody.append('tr');
        Object.entries(selected).forEach(function([key,value]){
        console.log(key,value);

        var cell = row.append('td');
            cell.text(value);
        })
    });
});
