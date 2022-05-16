

const add = (str1,str2) => {
    
    for (let i = 0; i < str1.length; i++){
        console.log(str1.charCodeAt([i])-48);
    }
}

add("123", "011")


let myset = new Set();

myset.add({ a: true });
myset.add({ a: true });
myset.add(undefined);
myset.add(undefined);
myset.add(1);
myset.add(1);
console.log(myset);
