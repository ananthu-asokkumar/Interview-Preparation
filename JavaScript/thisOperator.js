

// this
//this refers to the object on which we call our function 

//obj1.displayName()

//here this on displayName refers to obj1




// function displayAge() {
//     console.log(23,this);
// }

// displayAge()

// here this refers to globla object(widiw object)

// let obj1 = {
//     displayAge: function () {
//         console.log(23,this);
//     }
// }

// obj1.displayAge();


let obj2 = {
    name: "ananthu",
    displayName:displayName
}

let obj3 = {
    name: 'rabia',
    displayName:displayName
}

function displayName() {
    console.log(this.name);
}

obj2.displayName();
obj3.displayName()


let name = 'lara';
displayName()


const obj = {
    name: "simran",
    sayHello: function () {
        console.log("helo", this);
        var sayBye =  () =>{
            console.log("bye",this);
        }
        sayBye()
    }
}
obj.sayHello()
/**
 * Inside arrow function value of this deends on where that 
 * arrow function is present or defined .And its defined inside object .So its value will be object
 * 
 * 
 * if say bye is not arrow function it returns window object or global object
 * 
 */