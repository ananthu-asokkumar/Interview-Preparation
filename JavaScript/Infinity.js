/***
 * In Javascript the numbers are stored in 64 -bit format.It means any value which cannot fit in the 64-bit format
 * will return Infinity.That means it cannot hold the value larger than 64-bit.
 */

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


console.log(9e4);//9e4=9*10000
console.log(-9e4);

console.log(9e400);//Infinity
console.log(-9e400);//-Infinity


//Or

console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);


//0r 
console.log(1/0);
/**
 * How will you put validation  for positive or negative Infinity?
 * 
 * if (num === Number.NEGATIVE_INFINITY) {
 * return "Negative infinite value"
 *}
 */
