// In ES6 destructring,we may have array or object that are working with,
//but we only need some of the items contained in these.


let emp={
    id:101 ,
    name: "Nani" ,
    Sal:45000    
}
let{name,Sal}=emp
console.log(name,Sal)


// let employee={
//     id:101,
//     names:"Virat" ,
//     Sal:45000,

//     id:102,
//     names:"Vamsi" ,
//     Sal:55000,

//     id:103,
//     names:"Pallavi" ,
//     Sal:65000
// }
// let{names,Sal}=employee
// console.log(names,Sal)

// In object it does not allow the duplicates ,it overides.
 