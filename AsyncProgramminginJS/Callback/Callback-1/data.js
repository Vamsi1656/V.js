let employees=[{id:101,name:"Nani",Loc:"Hyd"},
              {id:102,name:"Virat",Loc:"Mumbai"},
              {id:103,name:"Pallavi",Loc:"Kerala"}]
        
let createEmployees=(employee,callback)=>{
          setTimeout(() => {
            employees.push(employee)
            callback()
          }, 4000);
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
        document.getElementById('xyz').innerHTML = rows
    }, 1000)
}

createEmployees({ id: 104, name: "Vamsi", Loc: "Guntur" },getEmployees)

//getEmployees()
             