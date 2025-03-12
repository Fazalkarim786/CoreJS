/* Suntax of arrow function (a,b) => is same as function(a,b)
in normal form */

//Arrow function two parameters
const multiply = (a,b) =>{
    return a * b;
}
console.log(multiply(5,4));

const greet = name =>{
    console.log(`Hello , ${name}`)
}
greet("Alice");

// Settimeout Function
setTimeout(function(){
    var i = 10;
    console.log(i);
},1000)
console.log("JS");

