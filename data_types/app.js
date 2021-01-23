let num = 10;
console.log('typeof num', typeof num);

let str = 'test';
console.log('typeof str', typeof str);

let boolean = true;
console.log('typeof boolean', typeof boolean);

let undef = undefined;
console.log('typeof undef', typeof undef);

let nul = null;
console.log('typeof nul', typeof nul);


if(typeof num === 'number'){
    console.log(num+10);
}else{
    console.log('Zmienna nie jest liczba');
}


let array = [];
let obj = {};
let set = new Set();

console.log('array instanceof Array', array instanceof Array);
console.log('set instanceof Set', set instanceof Set);
console.log('set instanceof Array', set instanceof Array);
console.log('set instanceof Object', set instanceof Object);
console.log('obj instanceof Object', obj instanceof Object);
console.log('array instanceof Object', array instanceof Object);