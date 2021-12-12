

/**
 * 
 */

let a = 5;
let b = 'a';
console.log(a * b);

/**
 * isNaN() is a function which returns true or false depending on the expression
 */

if (isNaN(a * b)) {
    console.log(true);
}

console.log(NaN === NaN); //false
console.log(NaN == NaN); //false

//Because there is always a unique value for NaN each time
