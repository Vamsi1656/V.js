// Creating objects are three types in Java Script
// They are:



// ObjectLiteral
//The syntax of creating object using object literal is given below:

//object={property1:value1,property2:value2.....propertyN:valueN} 



let emp={id:101,Name:"Nani",Sal:45000}

console.log(emp)



// Instance of Object

// The syntax of creating object directly is given below:

// var objectname=new Object(); 


let e=new Object()
e.id=102
e.name="Virat"
e.Sal=55000
console.log(e)



// By using object Constructor

// Here this keyword is used. This keyword pointing to current object

function Employee(id,Name,Sal){

this.id=id
this.Name=Name
this.Sal=Sal
}
e= new Employee(103,"Pallavi",65000)
console.log(e)