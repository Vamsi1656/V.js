// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

let letters=new Set() // creates a new set

letters.add("a") // add new element to the set
letters.add("b")
letters.add("c")
letters.add("d")
console.log(letters.size)

letters.delete("d")  // delete a element in the set
console.log(letters.size)

console.log(letters.has("a")) // Returns true if a value exists i.e;in this example a is there that is true
console.log(letters.has("e")) //in this set  e is not there that is false









