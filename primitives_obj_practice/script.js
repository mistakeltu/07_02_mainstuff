'use strict';
console.clear();

//Primitive types
let lastName = 'smth';
let oldLastName = 'oldsmth';
lastName = 'newsmth';
console.log(lastName, oldLastName);

//Reference types
const jonas = {
  firstName: 'Jonis',
  lastName: 'Petris',
  age: 99,
};

const oldJonas = jonas;
oldJonas.age = 100;
console.log('Before b-day:', jonas);
console.log('After b-day:', oldJonas);
// oldJonas = {}; //jei letas galima keist

//Copying object

const jonas2 = {
  firstName: 'Jonis',
  lastName: 'Petris',
  age: 99,
  family: ['Mom', 'father', 'brother', 'sister'],
};

const jonasCopy = Object.assign({}, jonas2);
jonasCopy.age = 100;
// console.log('Before b-day:', jonas2);
// console.log('After b-day:', jonasCopy);

jonasCopy.family.push('dog');
console.log('Before b-day:', jonas2);
console.log('After b-day:', jonasCopy);
