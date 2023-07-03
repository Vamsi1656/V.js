function empdata(a,b){
    return a+b;
}
function getemp(callback){
       console.log(callback(2,2));
}
getemp(empdata);

// Callback is used to pass a function as argument in another function.