let promises1 = new Promise((resolve, reject) =>{
    let percentage = 85;
    let sayPer = 86;
    if(percentage <= sayPer){
        resolve ("you are the fulfilled!");
    }else{
        reject ("you are rejected");
    }
});

promises1.then((message)=>{
    console.log("success:" , message)
});
promises1.catch((error)=>{
    console.log("failed:" , error)
});



const promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("it is fulfilled");
    }else{
        reject("it is rejected");
    }
});

promise.then((result) =>{
    console.log("successful" , result)
});
promise.catch((error)=>{
    console.log("failed" , error)
});
promise.finally((final)=>{
    console.log("promise completed")
});
