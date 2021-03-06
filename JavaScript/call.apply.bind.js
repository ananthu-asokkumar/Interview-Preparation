

// call() apply() bind()
// reuse method of another object in new object
// function displayName() {
//     console.log("ananthu");
// }

// displayName();
// displayName.call();
//Call()
// calls a method of an object substituting another object with current object
//call attaches `this` into function and executes the function immediately:
//It passes a list of arguments

let participant1 = {
    name: "ananthu",
    battery: 70 ,
    chargeBattery: function (a,b) {
        this.battery = this.battery + a + b;
    }
}
// console.log(participant1);
// participant1.chargeBattery();
// console.log(participant1);

// if i want to apply this method on another object we uses call method
// I want to use chargeBattery() fn in participant2
/**
 * Call is used to change the reference or context or value of this object.
 * 
 */
function test(a, b) {
    console.log(this, 55555);
    console.log(a,b);
     }

let participant2 = {
    name: "rabia",
    battery:90,
}
// test.call()// this points to global objext
test.call(participant2,3,4)// now call method changed the context of this operator to object oarticipant2
//appliy can be also used for this 
test.apply(participant1,[3,4])
participant1.chargeBattery.call(participant2,10,20)// applyling chargeBattery fn on participant 2
// first arg is the new object

console.log(participant2);


/// apply()

// apply is also similar to call() only difference is apply takes an array of arguments


participant1.chargeBattery.apply(participant2, [10, 20])


//now battery of participat 2 will be 140
console.log(participant2);


// bind is also similar to call() but it will not return the new object
// instead it returns a fucntion



let newfn = participant1.chargeBattery.bind(participant2, 10, 50);
newfn();
console.log(participant2);
// console.log(newfn());