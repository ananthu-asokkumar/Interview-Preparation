

/***
 * Functional behaviour of arrow function.
 * 
 * 1) the 'this' object doesn't work with arrow fn
 * 2) "arguments object" does not work with arrow fn
 * 3) You cann't call "new" to call arrow fn
 * 
 */

function test1() {
  //  
}
test1();

// fn expression syntax
const test2 = function () {
    
}
test2();


const test3 = () => {
    //arrow fn is function expression only
}

/**
 * if we have only one parameter we can avoid using parantesis for arguments
 * 
 */

const sum = a => console.log(a);
sum(3)

// const obj = new sum();//we cant  use new keyword with arrow fn

// console.log(obj);// throw error

function sum1(a) {
    console.log(a);
}

const obj1 = new sum1(3);

//this inside an arrow fn reffers to global object,because there is class key word to reffer to the class
//


function k() {
  console.log(this,"this");
}
// k()
const j = () => {
  console.log(this, "this");
  
}
j()