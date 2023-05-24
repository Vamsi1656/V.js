let ages=[10,15,50,90,78,88,100]
let result=ages.filter(checkAdult)
console.log(result)

function checkAdult(age) {
    return age >=18 ;
  }
