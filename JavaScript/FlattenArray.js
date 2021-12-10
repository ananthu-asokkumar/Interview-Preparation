/// make a 1D array from a nested array

/**
 * 
 * there is an inbuilt method called flat 
 * syntax:array.flat(depth);
 * 
 * const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

 */

let array = [1, 2, [3, 4], 5, [6, 7, [8, 9, 10], 11], 12];

// result =>[1,2,3,4,5,6,7,8,9,10,11,12];


const flatten = (arr) => {
    
    let newArray = [];

    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {//checks if it is an array
            let flat = flatten(arr[i]);
            newArray = [...newArray, ...flat];
        }
        else {
            newArray.push(arr[i]);
        }
    }

    return newArray
}

console.log(flatten(array));