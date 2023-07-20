let arr=[10,20,30,40]

console.log(arr[0]) //Here we can call a arr by index 
console.log([0]) // Here there is no name of an array so it cannot return any value of an array by index



//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let a=["Jan","Feb","March","April"]
    b=["May","June","July","Aug"]
    c=["Sept","Oct","Nov","Dec"]

let new_months=[...a,...b,...c]
console.log(new_months)

//We can use ... dots for spread operator

let d=["Sun","Mon","Tues"]
    e=["Wed","Thur","Fri"]
    f=["Satur"]
let days=[...d,...e,...f]
console.log(days)

