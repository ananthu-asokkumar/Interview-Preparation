

/**
 * callback functions are used when there is an Asynchronous process
 * 
 * A process which takes some time to execute is asynchronous process,ie it wont 
 * execute immediately.
 */

//ex 1; an api call

// let data //suppose its the api call
// function fetchData() {
//     setTimeout(() => {
//         data = { pCode: 1001, pName: "Orange" };
//     },2000)
// }

// function displayData() {
//     console.log(data);
//     console.log("Ends here ");
// }
// console.log("Starts here ");
// fetchData();
// displayData();

/**
 * Output
 * 
 * starts here 
 * undefined
 * Ends here 
 * 
 * here displayData fun doesnot waits for fetch data to get
 * execute. thats y data is undefined
 * 
 * This is where callback function come to action to resolve this issue
 *   
 */


// ex:2

//let data; //suppose its the api call
function fetchData(cb) {//cb is the call back
  setTimeout(() => {
     let data = { pCode: 1001, pName: "Orange" };
      cb(data);
  }, 2000);
}

// function displayData() {
//   console.log(data);
//   console.log("Ends here ");
// }
console.log("Starts here ");
fetchData(function (data) {
  console.log(data);
  console.log("Ends here ");
});



/**
 * In example 2 we passed the display data as a callback
 * so it gets executed only after the asychronous action is finished
 * 
 * this is the purpose of callback fn
 * 
 * Output
 * Starts here
 * { pCode: 1001, pName: 'Orange' }
 * Ends here
 * 
 * 
 */


// example 3

/**
 * Lets write a function custom square to find the square 
 * 
 */


function cSqr(n,cb) {
    setTimeout(() => {
        cb(n*n)
    },2000)
}

// console.log(cSqr(2));

cSqr(2, function (res) {
    console.log(res);
})

//Rather than callback Nowadays there are better ways to handle promises that is Promise & async /await



/**
 * Callback Hell or Pyramid of Doom
 * 
 * 
 */
