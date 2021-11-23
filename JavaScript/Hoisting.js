// hoisting

// JavaScript Hoisting refers to the process whereby the 
//  allocates memory for variable and function declarations 
//  prior to execution of the code.Declarations that are made
//  using var are initialized with a default value of undefined.
//  Declarations made using let and const are not initialized as
//  part of hoisting.

// Conceptually hoisting is often presented as the interpreter "splitting variable
// declaration and initialization,
// and moving(just) the declarations to the top of the code". 
// This allows variables to appear in code before they are defined.
// Note however, that any variable initialization in the original code will not happen until 
// the line of code is executed.


// variables are partially hoisted and functions are copletly hoisted

/**
 * 
 * 
 * 
 * 
 * 
 */

var a = 10;
var a = 1;
console.log(a);

var res = 10;

const test = () => {
    
    var i = 5;
    res = i;
    // console.log(i,"i");
}

test();

console.log(res,"res");