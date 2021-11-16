
// it stores unique elements only
let Myset = new Set();
Myset.add(2);
Myset.add(3);
Myset.add(2);
Myset.add(4);
Myset.add(5);
console.log(Myset,Myset.size);
console.log(Myset.has(4));//false
console.log(Myset.has(3));//true


Myset.delete(5)
console.log(Myset);

// iterate on set
// use item of set
//or we can use For each
for (let item of Myset) {
    console.log(item);
}

let data = Array.from(Myset);
console.log(data);

let number = [1, 2, 2, 3, 3, 4, 5, 5]
let unique = [...new Set(number)];
console.log(unique);