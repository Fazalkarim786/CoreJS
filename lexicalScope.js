/*lexical Environment*/

function a(){
    console.log(b);
};
var b = 10;
a(); // It will prints 10

function a(){
    function c(){
        console.log(b); 
    }
   c();
};
var b = 10; 
a();// It will prints 10

function a(){
    var b =10;
    function c(){
        console.log(b); 
    }
   c();
};
 
a(); // It will prints 10

function a(){
    var b =10;
    function c(){
       
    }
   c();
};
console.log(b);  
a();  // It will prints undefined