/**
 * The whole concept of class is to create a blue print or design or commonly reffered as the "prototype".
 *  
 */
// dynamic value

let data="getData"


class house {
  constructor(nDoors, windows) {
    // console.log("constructor called");
    this.nDoors = nDoors;
    this.windows = windows;
  }
  showData() {
    console.log(this.nDoors, this.windows);
  }
  [data]() {
    console.log(this.nDoors, this.windows);
    console.log("hello");
  }
  static test() {
      console.log("static method");
      this.test1();
  }
  static test1() {
    console.log("static method");
  }
  static applicationVersion = 1.3;
}

let obj = new house(2, 3);
 console.log(obj);
obj.showData();
obj.getData()
const obj1 = new house();

house.test()// we dont need the instance of the class to call the 
//static method
console.log(house.applicationVersion);


/***
 * What are static members in class?
 * 
 * Static members can be created by write "static" keyword
 * 
 * For creating a module which has services where we do
 * not need to instantiate the class -we create a class 
 * and create those member as static members.
 * 
 */

