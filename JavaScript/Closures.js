

let a = 12;

function test(a=8,b=7) {
     b = 3;
    return function s() {
        console.log(a,b);
    }

}
let d = test(6,8);
d();