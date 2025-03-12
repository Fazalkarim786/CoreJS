/* A closure gives you a access of an outer function scope from an inner function. */
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();  // Prints 7

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x(); // It will return the func y
console.log(z);
z(); // It still remembers the scope and prints 7

function z(){
    var b =100;
    function x(){
        var a = 7;
        function y(){
            console.log(a , b);
        }
        y();
    }
    x();  
}
z(); // It will remembers the deepest closure and prints 7 ,100
