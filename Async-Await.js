var Async


//The word “async” before a function means one simple thing: a function always returns a promise.
//Other values are wrapped in a resolved promise automatically.

//For instance, this function returns a resolved promise with the result of 1

var eg1;

// async function f() {
//     return 1;
// }
  
// f().then(alert); // 1


// explicitly return a promise

// async function f() {
//     return Promise.resolve(1);
// }
  
// f().then(alert); // 1

var Await;

// works only inside async functions
// let value = await promise;

//The keyword await makes JavaScript wait until that promise settles and returns its result.

var eg2;

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     // alert(result); // "done!"
//     console.log(result);
// }
  
// f();


var eg3;


// function snacks(ticket){

//     return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(["nooodeles","pasta"])
//     }, 5000)
// })
// }

// async function display(){
//     try {
//             let user = await login("some_email",32239829);
//             let ticket=await bookticket(user.email);
//             let snacks = await snacks(ticket);
//             console.log("done")
//     } catch (error) {
        
//     }
// }

// display();


var eg4;

// async function myDisplay(){
//     let promise = new Promise(function(resolve){
//     setTimeout(function(){resolve("Heeeey"); }, 3000);} );
    
//     document.getElementById("demo").innerHTML= await promise;
// }
// myDisplay();








