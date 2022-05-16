

let pr = new Promise((resolve, reject) => {
    
    reject("LL")
})

pr.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})