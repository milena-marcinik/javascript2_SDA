const persons = [];

persons.push('Anna');
persons.push('Piotr');
persons.push('Jan');

console.log('persons', persons);

const lastPerson = persons.pop();
console.log('lastPerson', lastPerson);
console.log('persons after pop ', persons);

persons.unshift('Agnieszka');
console.log('persons', persons);

const personsJoined = persons.join('; ');
console.log('personsJoined', personsJoined);

console.log('Persons przed reverse', persons);
console.log('Persons reverse', persons.reverse());
console.log('Persons po revers', persons);

const numberArray = [10, 1, 3, 13];
console.log('numberArray', numberArray);
numberArray.sort();
console.log('numberArray po sort', numberArray);

persons.sort();
console.log(persons);

numberArray.sort((a, b) => a - b);
console.log(numberArray);

const newPersons = ['Andrzej', 'Marcin', 'Piotr'];

const allPersons = persons.concat(newPersons);
console.log('allPersons', allPersons);
console.log('persons', persons);
console.log('newPersons', newPersons);

const allPersonsSpread = [...persons, ...newPersons];