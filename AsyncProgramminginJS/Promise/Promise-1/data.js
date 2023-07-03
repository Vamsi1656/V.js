let employees=[{id:101,name:"Nani",Loc:"Hyd"},
              {id:102,name:"Virat",Loc:"Mumbai"},
              {id:103,name:"Pallavi",Loc:"Kerala"}]
        
let createEmployees=(employee)=>{
          return new Promise((resolve,reject)=>{
          setTimeout(() => {
            let flag = true;
            flag ? resolve("Data Inserted") : reject("Not Inserted")
            employees.push(employee)
        
          }, 4000)
        })
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
              <td>${emp.id}</td>            
              <td>${emp.name}</td>            
              <td>${emp.Loc}</td>            
            </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, 1000)
}

createEmployees({ id: 104, name: "Vamsi", Loc: "Guntur" })
        .then((msg) => {
        console.log(msg)
        getEmployees()
        })
        .catch((err) => {
          console.log(err)
        })

             