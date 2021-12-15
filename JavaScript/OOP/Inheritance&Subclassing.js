

/**
 * Inheritance or subclassing is a very important concept and often
 * used with object oriented paterns.
 * 
 * With ES5 ther ewere different ways of inheritance, but in ES6 
 * "extends" is the key word to inherit a class.
 */

class child extends String {

}

const obj = new child("Test String");


console.log(obj.toLowerCase());