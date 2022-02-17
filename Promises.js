var promise;

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result



// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

var eg1;

// const xyz=()=> {
//     return new Promise((resolve,reject)=> {
//     let flag = true ;
//         if(flag){
//             resolve(abc());
//         }
//         else{
//             reject("promise rejected ");
//         }
//     })
// }

// var abc = ()=> {
//     let a=2;
//     let b=3;
//     let c= a+b;
//     console.log("Addition: "+ c );
//     return c;
// }

// xyz().then(value=> console.log("promise resolved Succesfully"))
//   .catch(erro=> console.log(erro))


var eg2;


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("Hey!!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });

var eg3;

// function sleep(amount){
//     return new Promise ((resolve,reject)=> {
//         if(amount <= 300){
//             return reject("thats too fast slow it down ");
//         }
//         setTimeout(() => {
//             resolve(`Slept for ${amount}`)
//         }, amount);
//     })
// }


// sleep(500).then((result)=> {console.log(result); return sleep(1000);})
//     .then((result) => {console.log(result); return sleep(750);})
//     .then((result) => {console.log(result); console.log("Done")})
    