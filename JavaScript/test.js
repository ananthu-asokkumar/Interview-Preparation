

// let str = 'rabia';




// const obj = {
//     name: "rabia",
//     check: ()=> {
//         console.log(this);
//     }
// }

// obj.check();


// const rabia = () => {
//     console.log(this);
// }

// // rabia();

// console.log(typeof rabia);

// // console.log({} === {});
// // console.log([] === []);

// console.log(NaN === NaN);

// console.log(null == undefined);

// const key = [1];
// console.log(typeof key);//number


// console.log(typeof null);
// let r="aaa"
// console.log(r.__proto__);


// function test(a, b) {
//     console.log(a, b);;
//     console.log(this);
// }

// test();

// let obj1 = {
//     battery: 10,
//     chargeBattery: function (a,b) {
//         this.battery = this.battery + a + b;
        
//     }
// }

// test.call( 2, 3);

// let obj2 = {
//     battery:10
// }

// obj1.chargeBattery.apply(obj2, [1, 1]);
// console.log(obj2,"first");
// let res = obj1.chargeBattery.bind(obj2, 1, 1);
// // console.log(res);
// res();
// console.log(obj2,"second");


// function test(x) {
//     return new Promise((resolve, reject) => {
//        resolve("wewe")
//    })
// }
// test().then((x) => {
//     console.log(x);
// })


// function test() {
    
//     return 1
//     { a: 10 };
// }

// console.log(test());
var arr = [1, 2, 3];
var fun = [];
for (var i = 0; i < 3; i++) {
  fun[i] = function () {
    console.log("array", i);
  };
}

for (var j = 0; j < 3; j++) {
  fun[j]();
}

function a1() {
    let a = {
        val:10
    }
    b1(a)
    console.log(a.val);
}

function b1(a) {
    // a = {
    //     val:11
    // }
    console.log(a.val=1);
}
a1()