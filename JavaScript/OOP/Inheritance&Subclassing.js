

/**
 * Inheritance or subclassing is a very important concept and often
 * used with object oriented paterns.
 * 
 * With ES5 ther ewere different ways of inheritance, but in ES6 
 * "extends" is the key word to inherit a class.
 */
// this is the practical example of how we extends a built in class 
class child extends String {
    noc(str) {
        console.log(str.length);
    }
}

const obj = new child("Test String");


console.log(obj.toLowerCase());

obj.noc("New String");

//how do we vreate or extends the class

/**
 *  whatever member we create in the  parent are available / accessible for an object of the "child class"
 */
class Parent {
    constructor(a) {
        this.a = a;
        console.log("parent");
    }
    pMethod() {
        console.log("Parent method",this.a);
    }
}


class Child extends Parent {
    constructor(a) {
        super(a); // super is the keyword which allows us to accesss parent class members
    }
    cMethod() {
        super.pMethod();// to call parent method we user super.method()
    }
}

const obj1 = new Child(12);
obj1.pMethod();
console.log(obj1);
obj1.cMethod();

/**
 * In short super() is the keyword which is used to call the super constructor.
 * We can use super.property to access parent properties
 */

/**
 * How can you inherit a class?
 * 
 * If you are using the "extends " keyword - its going to inherit any class
 * 
 * 
 * what is subclassing?
 * In ES6- Inheritance is also called subclassing
 * 
 * what is the purpose of super keyword/
 * Super is a keyword which helps you to access members of the parent class.
 * 
 * How will you override a method?
 * to override a method in js we use the super keyword
 */