class Parent {
    Amount = '100 CR'
}
class Child extends Parent {

}
let c1 = new Child()
let c2 = new Child()

console.log(c1.Amount)
console.log(c2.Amount)