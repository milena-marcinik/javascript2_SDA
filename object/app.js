const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
};

console.log(person);
console.log(person.firstName);
console.log(person['firstName']);


const person2 = new Object();
person2.firstName = 'Jan';
person2.lastName = 'Kowalski';

console.log(person2);
console.log(person2.firstName);


function PersonFunction(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const personFunction = new PersonFunction('Jan', 'Kowalski');
console.log(personFunction);
console.log(personFunction['lastName']);


class PersonClass{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        console.log(`Witaj, tutaj ${this.firstName}, ${this.lastName}`);
    }
}

const personClas = new PersonClass('Jan', 'Kowalski');
console.log(personClas);
console.log(personClas['lastName']);


console.log('personFunction', personFunction instanceof PersonFunction);
console.log('personFunction', personFunction instanceof Object);
console.log('personFunction', personFunction instanceof PersonClass);
console.log('person', person instanceof PersonClass);
console.log('person', person instanceof PersonFunction);

personClas.sayHello();