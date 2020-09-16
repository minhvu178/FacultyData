var getFullname = function(employee)
{ 
   var first = employee.firstName;
   var last = employee.lastName;
   return first + last;
}

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getFullname);