const numberArray = [1,2,3,4,5,6];

numberArray.forEach(function(element, index){
    console.log('index: ', index);
    console.log('element: ', element);
});

console.log(numberArray);


const numberArrayMultiplyBy2 = numberArray.map(
    function(number){
        return number*2;
    }
);

console.log(numberArrayMultiplyBy2);


console.log('numberArray.includes(4)', numberArray.includes(4));
console.log('numberArray.includes(10)', numberArray.includes(10));


const evenNumber = numberArray.filter(function(number){
    return number % 2 === 0;
});

console.log('evenNumber', evenNumber);


console.log('Indeks 5', numberArray.indexOf(5));
console.log('Indeks 10', numberArray.indexOf(10));


const copyNumberArray = numberArray.slice(2, 5);
console.log(copyNumberArray);
console.log(numberArray);


const splicePar = numberArray.splice(1, 2);
console.log(splicePar);
console.log(numberArray);

numberArray.splice(1,0,...splicePar);
console.log(numberArray);
