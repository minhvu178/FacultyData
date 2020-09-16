var getLastname = function(employee)
{ 
   var last = employee.lastName;
   return  last;
}


d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLastname);