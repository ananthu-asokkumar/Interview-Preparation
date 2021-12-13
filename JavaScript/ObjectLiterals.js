


/**
 * to take dynamic values as key inside an object we use 
 * arry brackets
 */

let tv = "pCode";

let obj = {
    [tv]:1000
}
console.log(obj);

/** 
 * How can you add read only properties to an object?
 * 
 */

const proto = Object.defineProperty({}, "pCode", {
    writable: false,
    configurable: true,
    value: 20002
});


const obj1 = Object.create(proto);

obj1.pCode = 3001;

console.log(obj1.pCode);