

/**
 * iterators are newly introduced in ES6
 */


let arr =[1,2,3,4,5]
for (let i of arr) {
    console.log(i);
}

/**
 * Symbol.iterator:which returns an iterable object
 */
let itr = arr[Symbol.iterator]();//returns iterable object

// itr now has itr.next() metod which iterates through every element one by one.
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
