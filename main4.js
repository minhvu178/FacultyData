var getPhoto = function(employee)
{ 
   var photo = employee.photo;
   return  photo;
}


d3.select("body")
.selectAll("img")
.data(employees)
.enter()
.append("img")
.attr("src", getPhoto);