// console.log("script start")

// setTimeout(() => {
//     console.log("timer")
// }, 2000)

// console.log('script end') 


let a = 10;
let b=0;
// setTimeout(()=>{
//     b=20;
// }, 2000)

// console.log(a+b);


// asynchronous operation handling with promises

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
    }, 2000)
})

promise.then((value)=>{
   b=value
console.log(a+b);

})
