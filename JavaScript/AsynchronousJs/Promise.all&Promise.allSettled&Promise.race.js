

/**
 * Promise.all()
 * 
 * when you have multiple promises as in[ut it should return a single promise 
 * after all promises are resolved ,then you can use the all()
 * 
 * 
 * Syntax
 * Promise.all([p1,p2,p3,p4,p5]).then(values){
 * // statements
 * }
 */


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1")
    },4000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, 2000);
});

const p4  = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise4");
  }, 1000);
});


Promise.all([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
})

Promise.all([p3, p2, p1]).then((prMsgs) => {
  console.log(prMsgs);
})
Promise.all([p1, p2, p3, p4])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log("Error",err);
  });

  Promise.allSettled([p1, p2, p3, p4])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log("Error",err);
  });;

/**
 * all() method is settled with only resolved promises, so if any 
 * promise returns error then it wont work
 *  ex: line 47
 * 
 * Promise.all() method will stop the execution if any promise returns error
 * allSettled() method helps inthis situation
*/

/**
 * allSettled() method waits for all promises regardless of their state
 * and returns Promise at the end
 */

/**
 * Promise.race()
 * 
 * race() method returns a promise as soon as any of promise returns 
 * the state from the iterable list provided. it is going to race among each 
 * promise.In situatoins like we want ot execute the first resolved or rejected promise.
 * we can use promise.race()
 * 
 */

 Promise.race([p1, p2, p3, p4])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log("Error",err);
  });;


let res = Promise.race([]);
// give promise pending forever
console.log(res);
