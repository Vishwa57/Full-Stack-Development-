// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength : function(){
    var k=0;
    for(i in employee)
    {
      k++;
    }
    return k-1;
  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
/*
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  fn : function()
  {
    for(i in employee)
    {
      alert(i+" is "+employee[i])
    }
  }
}*/

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
/*
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName : function()
  {
    var k=0;
    var str = "";
    for(var i=0;i<this.name.length;i++)
    {
      if(k)
      {
        str += this.name[i];
      }
      if(this.name[i]==' ')
      {
        k=1;
      }
    }
    return str;
  }
}
*/
// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
