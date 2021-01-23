const array = [];
console.log('array =', array);

const numArray = [1,2,3,4];
console.log('numArray =', numArray);

const strArray = ['test1', 'test2', 'test3'];
console.log('strArray =', strArray);

const arrayArray = [[1,2],[3,4]];
console.log('arrayArray', arrayArray);

const array2 = [
    1,
    'test',
    function(){
        return 'Test';
    },
    [1,2,3,4],
    ['Jan', 'Anna']
];
console.log('array2', array2);
console.log('array2[1]', array2[1]);
console.log(array2[3][1]);
console.log(array2[2]());