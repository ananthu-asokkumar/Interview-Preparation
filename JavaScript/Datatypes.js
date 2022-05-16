/**
 * Primitive Datatypes:In javascript primitive is a data that is not an object and has no methods .
 * There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
 *
 *
 * All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a
 * variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be 
 * changed in the ways that objects, arrays, and functions can be altered.
 * 
 * Abstract datatypes
 * 1) objects
 * 2)arrays
 * 3)Sets
 * 4)Maps
 * 
 */
console.log(NaN === NaN);//false
console.log(undefined==null)//true
console.log(undefined === null);//false
console.log(typeof function () { });// function



//presedence of operator
/**
 * 
 * 
 */

console.log(5 && 2 && 0 || 2 && 3 || 15 && 21);
//step1: 0||3||21
console.log(2 && 3, 2 || 3, 3 || 2, 3 && 2);

function test(arg1, arg2) {
    console.log(arguments);
}

test(1,2);
console.log(test.length);// length=2,no of arguments

/**
 * if we want to make an array of any size
 */

let arr = new Array(5).fill(3);
let arr2=new Array(1,2,3)
console.log(arr);
console.log(arr2);

console.log(typeof arr === typeof {});

console.log([] == []);
console.log([] === []);


/**
* const key;
*key = 'rabia';
*console.log(key);
 */
const key = [1];
console.log(typeof key);




// console.log(k);
// let  k = 0;