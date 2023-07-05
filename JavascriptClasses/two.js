class Car{

    constructor(name,model){
        this.name=name     
        this.model=model

    }

    method(){             
         console.log(this.name)
         console.log(this.model) 

    }

}

let car1=new Car("Benz",5)
let car2=new Car("BMW",7)

car1.method()
car2.method()
