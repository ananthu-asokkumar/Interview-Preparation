


/***
 * It's a unique way to call inner functions where you can pass arguments partially or pass multiple 
 * arguments in a function but 1 argument at a time
 * 
 */

const sum = a => b => a + b;
const ans = sum(5)(6);
console.log(ans);


const priceCal = (price) => {
    return (dPer) => {
        return price * dPer;
    }
}

const discountAmount = priceCal(300);
console.log(discountAmount(0.5));
console.log(discountAmount(0.3));
console.log(discountAmount(0.2));
//or

console.log(discountAmount(300)(.5));


//currying is an application of closures

