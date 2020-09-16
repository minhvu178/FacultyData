var getFirstName = function(employee) {
    return employee.firstName;
}

d3.select('body').selectAll("h2").data(employees).enter().append("h2").style("color","green").text(getFirstName);