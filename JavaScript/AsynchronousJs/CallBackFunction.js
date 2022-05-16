

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

// cSqr(2, function (res) {
//     console.log(res);
// })

//Rather than callback Nowadays there are better ways to handle promises that is Promise & async /await



/**
 * Callback Hell or Pyramid of Doom
 * 
 * That means callback is difficult to deal with when there are nested 
 * callbacks
 * 
 * 
 * ex: if we want to process the result we received furter 
 * 
 * 
 * suppose if we are using a third party api with returns a token on success 
 * and we need to make another api call using that token
 * 
 * Now there are two levels of callack so that the code will look clumcy and 
 * it is very difficult to deal error handling and debuging
 * So it becomes hell to manage callbacks
 * 
 * To write callback functions in better way we have promises in Javascript
 * 
 * 
 */


  cSqr(2, function (res) {
      console.log(res);
      cSqr(res, function (res) {
          console.log(res);
      })
  })

  /***
   * What is asynchronous process?
   * The process which takes some time to execute is called Asynchrou=nous process
   * ex::api calls,fetch,promises
   * 
   * 
   * What is meaning of callback hell or pyramid of doom?
   * It is difficult to handle as there are multiple api calls and callback functions .That is what is call back hell or pyramid of doom
   * 
   * 
   * 
   */







let data;

function getdata() {

    setTimeout(() => {
        data = { token: 1212323 } 
        
    },1000)
    
}
console.log("Stat=rts here");

getdata();
function displayData() {
    console.log(data);
console.log("Ends here ");
}
displayData();