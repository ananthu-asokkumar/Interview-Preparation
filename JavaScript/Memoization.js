/**
 * 
 * Memoization is a method used to store the results of previous function calls to speed up future calculations.
 * ~ If repeated function calls are made with the same parameters, we can store the previous values instead of repeating unnecessary calculations. 
 * This results in a significant speed up in calculations.
 */






const multiplyBy10 = (num) => {
  return num * 10;
};


/**
 * decorative function
 */


const memoize = (fn) => {

    const cache = {};

    return (...args) => {
        
        if (args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()]
        }

        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
    
}


const addMany = (...args) => {
    return args.reduce((acc,el)=>acc+el)
}



const initapp = () => {
  // const multiplyBy10 = memoizedMultiplyBy10();

  // console.log(multiplyBy10(5));
  // console.log(multiplyBy10(3));
  // console.log(multiplyBy10(5));
  // console.log(multiplyBy10(5));
  // console.log(multiplyBy10(5));

  // using decorator function
//   const multiplyByTen = memoize(multiplyBy10);
//   console.log(multiplyByTen(5));
//   console.log(multiplyByTen(3));
//   console.log(multiplyByTen(5));
//   console.log(multiplyByTen(5));
//   console.log(multiplyByTen(5));
    const add = memoize(addMany);
    console.log(add(1, 2, 3));
    console.log(add(1, 2, 3));
    console.log(add(1, 4, 3));
    console.log(add(1, 2, 4));
    console.log(add(1, 2, 4));

    
    
};;

initapp();









function memoizedMultiplyBy10(){
    const cache = {};
    
    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num]
        }
        const result = num * 10;
        cache[num] = result;
        return result;
            
    }
};
