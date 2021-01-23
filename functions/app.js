function addNormalDeclaration(a,b){
    const sum = a+b;
    console.log(`Suma ${a} + ${b} =`, sum);
    return sum;
};

let suma = addNormalDeclaration(10,10);
console.log('suma', suma);


(function(a,b){
    const sum = a + b;
    console.log(`Suma IIFE ${a} + ${b} =`, sum);
})(4,5);


const addFunctionExpression = function(a,b){
    const sum = a + b;
    console.log(`Suma ${a} + ${b} =`, sum);
    return sum;
}

addFunctionExpression(10,6);


const addArrowFunction = (a,b) => {
    const sum = a + b;
    console.log(`Suma ${a} + ${b} =`, sum);
    return sum;
}

addArrowFunction(5,9);


testFunction();

function testFunction(){
    console.log('Hell from test function');
}


// testFunction2();

// var testFunction2 = function(){
//     console.log('Hell from test function');
// }


const array = [1,2,3,4,5];
const arrayMultiplyBy2 = array.map( (num) => num*2 );
console.log(arrayMultiplyBy2);
