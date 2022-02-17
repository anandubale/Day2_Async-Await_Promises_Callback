//In JavaScript, users can declare a variable using 3 keywords that are:

//--------------------------------------------------var----------------------------------------------------------------
//Scope: 1.Global scoped   2.function scoped

//The scope of the var keyword is the global or function scope. 
//It means variables defined outside the function can be accessed globally, and 
//variables defined inside a particular function can be accessed within the function.

var Global_Scope;
// var a = 10
//         function f(){
//             console.log(a)
//         }
//     f();
// console.log(a);

var function_Scope;

// function f() {
 
//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     console.log(a)
// }
// f();

// A cannot be accessible
// outside of function
// console.log(a);


// Users can declare the 2 variables with the same name using the var keyword.




//---------------------------------------------------------let-------------------------------------------------------

//Scope: block scoped 
//The scope of a let variable is only block scoped. 
//It can’t be accessible outside the particular block ({block}).

var Block_Scope;

// 	let a = 10;
// 	function f() {
// 		let b = 9
// 		console.log(b);
// 		console.log(a);
// 	}
// f();


//Users cannot re-declare the variable defined with the let keyword but can update it.
//User can declare the variable with the same name in different blocks using the let keyword.

//Mistake 1:- we are accessing the let variable outside the function block.

// let a = 10;
//     function f() {
//         if (true) {
//             let b = 9
 
//             // It prints 9
//             console.log(b);
//         }
 
//         // It gives error as it
//         // defined in if block
//         console.log(b);
//     }
// f()
 
//     // It prints 10
// console.log(a)


//Mistake 2:- cant Re-declare

// let a = 10
 
// // It is not allowed
// let a = 10
 
// // It is allowed
// a = 10

//Mistake 3:-Using the let variable before the declaration, it does not initialize with undefined just like a var variable and return an error.

// console.log(a);
// let a = 10;              //var and  let cant be use before declaration



//-------------------------------------const----------------------------------------

//The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

//Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. 

// const a = 10;
// function f() {
//     a = 9
//     console.log(a)
// }
// f();


//Users cannot change the properties of the const object, but they can change the value of properties of the const object.
// const a = {
//     prop1: 10,
//     prop2: 9
// }
 
// // It is allowed
// a.prop1 = 3

// // It is not allowed
// a = {
//     b: 10,
//     prop2: 9
// }




















