

// console.log("hi");

// setTimeout(function timeout() {
//   console.log("Click the button!1");
// }, 5000);
// setTimeout(function timeout() {
//   console.log("Click the button! 3");
// }, 4900);
// console.log("hi");


/**
 * 
 * Javascript is a synchronous single threaded language
 * It has one call stack and it can do only one thing at a time 
 * 
 * call stack is present inside the javascript engine 
 * 
 * whenever a js program is run a global execution context is created
 * and it will go inside the call stack
 * 
 * In example 2a
 * when the function a is called  a execution context is created 
 * inside callstack and all code inside the fn is executed and the the fn gets poped out as it
 * finishes the execution.
 */









//example 2a


// console.log("start");
// function a() {
//   console.log("a");
// }
// a()
// console.log("end");





//Example 3
function check() {
  
  console.log("start");


  setTimeout(function (cb) {
    console.log("call back 1 ");
  }, 5000)

   setTimeout(function (cb) {
     console.log("call back 2 ");
   }, 4000);
  
  
  console.log("End");
}

// check()

/**
 * Event loop acts as a gatekeeper which continuously monitors the callstack, whenever the call stack is empty 
 * it pushes the call back from callback Queue.
 * 
 * ////////web apis
 * settimeout
 * DOM apis
 * fetch
 * console
 * local storage
 * 
 * 
 */
// var yogesh = 5;
// var rabia = yogesh


// yogesh += 4;
// // console.log(rabia);
// console.log(yogesh+rabia);  