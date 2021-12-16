

/**
 * In case of map the keys can also have types like string ,number ,boolean etc.
 * This is the collection or data structure where you are mapping value to value.
 * 
 * 
 * values inserted in map collection are retrieved in same order .
 * 
 */

let product = new Map();

// product.set('pCode', "1001");
// product.set(1, "apple");
// product.set(true, 1);// value to value mapping
// console.log(product);
//or we can chain 
product.set('pCode', "1001")
    .set(1, "apple")
    .set(true, 1);// value to value mapping
console.log(product);

console.log(product.get(1));
product.has(1);

for (let v of product.values()) {
    console.log(v);
}


for (let k of product.keys()) {
  console.log(k);
}

for (let [k,v] of product.entries()) {
  console.log(k,v);
}
//Object.entries converts object into arrays

let obj = {
    pCode: 1001,
    pName: "pen",
    price:23
}

// we can use Object.entries to convert normal objects to Map
let p = Object.entries(obj);
console.log(p);
let prod = new Map(p);
console.log(prod);

// to comver map to object we can use Object.fromEntries();
let obj1 = Object.fromEntries(product.entries());
console.log(obj1);

// map.has(key)  checks whether th map has given key or not

product.forEach((v, k, m) => {
    console.log(v,k);
})

//delete() method removes values by key and clear() method wipes out everything from the map


product.delete('pCode');
console.log(product);
product.clear();
console.log(product);

/**
 * what are the advantages of using map over objects
 * Map's keys can also be values .They can be of any datatype.
 * But in case of objects we have keys as strings.value to value maping is not possible.
 * Keys are ordered -the insertion and retrieval is always inthe same order .
 * 
 * 
 * But in object keys are not ordered.
 * 
 * map has size property which returns number of key/value pairs.Where as objects does not have any direct way you need to get the count.
 * 
 * 
 * Maps are more optimized for data manipulation compared to object,
 * 
 */
