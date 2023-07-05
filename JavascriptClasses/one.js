// Declaring Class
class Employee{       

    // Initlizing object using constructor
    constructor(id,name){               //The this keyword is a reference variable that refers to the current object

        this.id=id
        this.name=name
    }

// Declaring method              //  JavaScript methods are actions that can be performed on objects.
   detail(){
    console.log(this.id)
    console.log(this.name)
}
}

//passing object to a variable i.e ; creating new object

let e1=new Employee(101,"Nani")
let e2=new Employee(102,"Virat")

e1.detail()
e2.detail()

