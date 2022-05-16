
// custom map
Array.prototype.mymap = function (callback) {
    let resultArray = [];
    for (let index = 0; index < this.length; index++){
        resultArray.push(callback(this[index],index,this))
    }
    return resultArray;
}


let arr = [1, 2, 3];

let newArr = arr.mymap((e, i) => { return e * 2 });
console.log(newArr);


// custom filter
console.log("3"+"2"-"1");


  const [hide, setHide] = useState(false);
From Prashant to Everyone 05:42 PM
console.log(0.1 + 0.2 === 0.3);
1: false
2: true
function main(){
   console.log('A');
   setTimeout(
      function print(){ console.log('B'); }
   ,0);
   console.log('C');
}
main();
1: A, B and C
2: B, A and C
3: A and C
4: A, C and B
function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);
1: 1, undefined and undefined
2: ReferenceError: X is not defined
3: 1, undefined and number
4: 1, number and number
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
1: Undefined
2: ReferenceError
3: null
4: {model: "Honda", color: "white", year: "2010", country: "UK"}
