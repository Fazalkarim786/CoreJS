/* SetTimeout takes two parameter ->  a callback func and a timer. */

// function x(){
//     var i =2;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste Js");    
// }
// x();

//  //first prints Namaste Js and after 3 sec value of i

//  /* Same code as above  written in arrow function */
// const x =() =>{
//     var i =2;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Js");    
// }
// x();

// const x =() =>{
//     for(var i =1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);     
//     }   
//     console.log("Namaste Js");    
// }
// x(); 

// /* It will prints Namaste Js and 6 five time bcz var is function scoped to print 1 to 5 we can use let. */

// const x =() =>{
//     for(let i =1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);     
//     }   
//     console.log("Namaste Js");    
// }
// x(); 

 /*Let is block scoped 
this will ffix the value and it prints Namaste Js and 1 to 5 */

const x =() =>{
    for(var i =1; i <= 5; i++){
        const close = i =>{
            setTimeout(() => {
                console.log(i);
            }, i * 1000); 
        }   
        close(i);    
    }   
    console.log("Namaste Js");    
}
x();
/* this will fix the var problem with closure adn it will prints the value Namaste Js and 1 to 5 */