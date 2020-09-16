var getLastname = function(employee)
{ 
   var last = employee.lastName;
   return  last;
}

console.log("lastname", getLastname(employees[0]));

d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLastname);