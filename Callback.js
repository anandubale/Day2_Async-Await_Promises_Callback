var callback_Function;

//A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.

//E.g 1:-

// function endfun(){
//     console.log("3");
// }

// var mainFun = (callback) => {      //provide function in parenthesis
//     console.log("1");
//     setTimeout(()=>{
//         console.log("2");
//         callback();              //call function as we want 
//     },2000)
// }                                  //mi jevha mhnil tevhach yee 

// mainFun(endfun)


//E.g 2:-

// function greeting(name) {
//     alert('Hello ' + name);
// }
  
// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }
  
// processUserInput(greeting);


//E.g 3:-

// var greet = (a,b)=>{

//     console.log("have a good day");
//     let abc = a+b;
//     console.log("Sum: "+ abc);
// }

// var sayHi = (callback)=>{
//     console.log("Hii");
//     setTimeout(()=>{
//         let a = 5;
//         let b =6;
//         console.log("Hello");
//         callback(a,b);
//     },2000)
// }

// sayHi(greet);

//E.g 4:-
//login  ----> book Ticket -----> buy snacks


// function login(email,phNo, callback){

//     setTimeout(() => {
//         callback([email,phNo]);                    //Provide to next;
//     }, 2000);
// }


// function book_ticket(email,callback){
//     setTimeout(() => {
//         callback(["something1","something2"]);
//     }, 2000);
// }

// function snacks(Ticket){
//     setTimeout(() => {
//         callback(["pasta","noodles"]);
//     }, 2000);
// }

// const User = login ("email",'98349834', (val)=>{
//     book_ticket(val=>{
//         snacks(val,()=>{
//             console.log('Donnnne');
//         });
//     }

//     );

// })

//E.g 5: code eith harry using Object;

var Asyncronous_callback


// const students = [
//     {name: "Anand" , subject: "javscript"},
//     {name: "Swapnil" , subject: "python"}
// ] 
// //mimiking the response get from  server;


// function enrollStudents(student){
//     setTimeout(() => {
//         student.push(student);
//     }, 5000);
// }

// function getStudent(){
//     setTimeout(() => {
//      let str ="";
//      student.foreach((student)=>{
//          str += `<li> ${student.name}<li>`
//      })                                                                     //printing student in DOM 
//      document.getElementById('idofsometag').innerHTML = str;
//     },2000);

// }

// let newstudent = {name:"sunny", subject:"c++"}
// enrollStudents(newstudent)
// getStudent();

//output : print anand and swapnil  and take time(5000) for enroll of sunny but list already populated





//so to avoid we use call back 
var syncronous_callback




// const students = [
//     {name: "Anand" , subject: "javscript"},
//     {name: "Swapnil" , subject: "python"}
// ] 



//mimiking the response get from  server;


// function enrollStudents(student,callback){
//     setTimeout(() => {
//         student.push(student);
//         callback();
//     }, 5000);
// }

// function getStudent(){
//     setTimeout(() => {
//      let str ="";
//      student.foreach((student)=>{
//          str += `<li> ${student.name}<li>`
//      })                                                                     
//      document.getElementById('idofsometag').innerHTML = str;
//     },2000);

// }

// let newstudent = {name:"sunny", subject:"c++"}
// enrollStudents(newstudent,getStudent)


var Problems_with_Callback


//1.Callback Hell  
//2.Difficult to Manage 
//3.Inversion Coontrol ----> control is depend on others 








