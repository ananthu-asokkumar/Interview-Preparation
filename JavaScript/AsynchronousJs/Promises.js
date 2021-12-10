/**
 * What is a promise?
 *
 * Callbackfunctions are used when there is an asynchronous
 * process
 *
 * When there are multi-level functions, it's a hell of a job & that's why its called
 * "callback hell" or "pyramid of doom"
 *
 * To avoid the callback hell "Promise object is invented";
 *
 * Promise object is a better way to write callback process.
 *
 */

//Suntax of Promise

// let promise = new Promise((resolve, reject) => {

// });

// console.log(promise);

/**
 * Output:Promise { <pending> }
 *
 * this shows that when creating a promise ,by default there is a pending state / pending status
 */

// let promise = new Promise((resolve, reject) => {
//   //Statements

//     resolve("Data processed");
// });

// console.log(promise);

/**
 * Output:Promise { 'Data processed' }
 * now the promise is resolved
 *
 */

// let promise = new Promise((resolve, reject) => {
//   //Statements

//   reject("Data processed");
// });

// console.log(promise);

/**
 *
 * Output:Promise { <rejected> 'Data processed' }
 */

let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 2000);
});

pr.then((msg) => {
  console.log(msg);
})
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Finishing proess");
  });

/**
 *
 * output:Erroe Error
 *        Finishing proess
 *
 *
 */


/***
 * The process of converting callback fn to promise is called promisification or promisify.
 */


//ex: 12


const cSqr = (n) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n*n);
      }, 2000);
    });
    // return pr;
}
    
cSqr(2).then((res) => {
    console.log(res);
    return cSqr(res)
}).then((res1) =>{ //chainig of promise
    console.log(res1);
})
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("Finishing proess");
  });


  //Funtions are not thenable by default
  // we can make functions thenable b returning a
  // value
  //


  /**
   * nesting of response or chaining
   */