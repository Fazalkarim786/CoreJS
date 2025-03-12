// Promise.all() , Promise.settled(),Promise.race(), Promise.any()

const p1 = new Promise((resolve ,reject)=>{
   setTimeout(()=>
    resolve("P1 success"),3000)
   });

const p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>
        reject("P2 fails"),2000)
    });
   


const p3 = new Promise((resolve , reject)=>{
    setTimeout(()=>
        resolve("P3 success"),1000)
    })


Promise.all([p1,p2,p3]).then((res)=>{
console.log(res)
}).catch((err)=>{
    console.log(err)
});

promise.settled

const p5 = new Promise((resolve , reject)=>{
    setTimeout(()=> reject("p5 success"),3000)
})

const p6 = new Promise((resolve , reject)=>{
    setTimeout(()=>
        reject("P2 fails"),100)
    });
   


const p7 = new Promise((resolve , reject)=>{
    setTimeout(()=>
       reject("P3 success"),1000)
    })

    Promise.any([p5,p6,p7]).then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    