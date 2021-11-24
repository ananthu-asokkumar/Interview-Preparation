

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


/////////////////////////////////////////////////////////////////////////

/**
 * Now  take a look on some interesting interview questions
 */

function x() {
    
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 2000)
    console.log('rabia');
}

x();

/**
 * rabia
 * 1
 */

/**
 * 
 * we are given a problen sttement to print 1,2,3,4,5
 * after 1s,2,3,4,5
 */

function y() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i*1000);
        console.log("rabia");
    }
}

y();

/**
 * when we are using var key word to allows redeclaration so 
 * inside the setTimeout it reffers to the same refference of i
 * which stores 6;
 * So 6 will be printed all the time 
 * 
 * 
 * But if we are declaring let key word instead it doesnot 
 * allow redeclaration so it points to a different reference 
 * each time .So due to closures the function inside settimeout 
 * remembers the value of i for each iteration 
 */


function z() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
    
  }
}

z();

/**
 * Only using var
 */



function j() {
    for (var i = 1; i <= 5; i++) {
        function kk(x) {
            setTimeout(function () {
                console.log(x,"x");
            },2000);
         
            
        }
        kk(i);

    }
  }

j();