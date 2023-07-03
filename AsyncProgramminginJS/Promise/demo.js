let goTOtour=(success,failure)=>{
    let acc_bal=60000

    acc_bal>50000 ? success("Go to Tour"): failure("sit in the home")
}

goTOtour((msg)=>{console.log("msg")}, (err)=>{console.log("err")})


//In JS promise is a object  which ensures to produce a single value in the future. Promise in javascript is used for managing and tackling asynchronous operations.
// In promise there is only two values i.e is Resolve and Reject.