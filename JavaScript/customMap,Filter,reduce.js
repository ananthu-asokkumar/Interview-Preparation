// let data// api call

// function getdata(cb) {

//     setTimeout(() => {
//         data = { token: "123434" }
//         cb(data);
//     },1000)
// }

// console.log("Start here");

// getdata(function (data) {
//   console.log(data);
//   console.log("Ends here");
// });
// display();

// function a(x) {

//     let k = 3;
//     return function b(y) {
//         console.log(x+k+y);
//     }

// }

// let res = a(1);
// res(1);

Array.prototype.mymap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};



Array.prototype.myFilter = function (callback) {
  const filterArr = [];
  for (let index = 0; index < this.length; index++) {
    if (!!callback(this[index], index, this)) {
      filterArr.push(this[index]);
    }
  }
  return filterArr;
};

Array.prototype.myReduce = function (callback, accumulator) {
  if (this.length < 1) {
    throw new Error("Array is Empty");
  }

  if (!accumulator) {
    if (typeof this[0] === "string") {
      accumulator = "";
    } else if (typeof this[0] === "number") {
      accumulator = 0;
    }
  }

  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};