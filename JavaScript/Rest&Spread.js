// rest parameter should be at last only
const sum = (...args) => { //we can use rest to take n no of arguments to a fn
    
    // console.log(arguments); arguments object doesnot work with arrow fn
    console.log(args);
}

sum(1, 2, 3, 4);

function sum1() {
    console.log(arguments[0]); // ES5
}

sum1(1, 2, 3, 4);

/**
 * to find max value of an array we can use spread operator
 */

let arr = [1, 23, 45, 6, 4, 343, 5];
console.log(Math.max(...arr));