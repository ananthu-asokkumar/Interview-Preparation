

/**
 * weakMap & WeakSet are 2 more data structures provided by ES6
 * 
 * 
 * AS we know from the "Garbage collection concept "
 * JavaScript engine keeps a value in memory while it is “reachable” 
 * and can potentially be used.
 * 
 */

let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

/*
Usually, properties of an object or elements of an array or another data
 structure are considered reachable and
 kept in memory while that data structure is in memory.

For instance, if we put an object into an array, then while the array is alive,
 the object will be alive as well, even if there are no other references to it.
 */

let johny = { name: "John" };

let array = [ johny ];

johny = null; // overwrite the reference
console.log(array[0]);
// the object previously referenced by johny is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0];

/**
 * Similar to that, if we use an object as the key in a regular Map, 
 * then while the Map exists, that object exists as well. 
 * It occupies memory and may not be garbage collected.
 */

let john1 = { name: "John" };

let map = new Map();
map.set(john1, "...");

john1 = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

//WeakMap and WeakSt
/**
 * The first difference between Map and WeakMap is that keys must be objects, 
 * not primitive values:
 */

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object.

/**
 * Now, if we use an object as the key in it, and there are no other references to that object –
 *  it will be removed from memory (and from the map) automatically.
 */

// let john2 = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john2, "...");

// john2 = null; // overwrite the reference

// john is removed from memory!

/**
 * Compare it with the regular Map example above.
 *  Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
 */


// let rabia = {
//     name: "yogesh",
//     2:"ramesh"
// }

// let yogesh = rabia;
// rabia = {
//     name:"nripul"
// }
// console.log(rabia);
// console.log(yogesh);

// let arr = [1, 2, 3]
// let a = arr;
// arr.push(1);
// arr = [];
// console.log(a);

// function names1(b) {
//     let a=4
//     return function x(c) {
//         console.log(b+a+c);
//     }
// }

// let res1 = names1(1)

// res1(1);

// res1(2)
