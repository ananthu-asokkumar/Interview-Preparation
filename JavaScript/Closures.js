

let a = 12;

function test(a=8,b=7) {
     b = 3;
    return function s() {
        console.log(a,b);
    }

}
let d = test(6,8);
d();

/**
 * ********CLOSURES****
 * A Closure is a combination of function bundled together with its lexical environment.
 * 
 *  In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript,
 *  closures are created every time a function is created, at function creation time.
 * 
 * 
 * 
 * 
 * here when function s is called from outside d() the function s remembered the value 3 
 * which is in its lexical environment due to closures
 */


