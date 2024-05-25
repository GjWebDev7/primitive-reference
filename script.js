'use strict';

// Primitive
let lastName = 'oberoi';
let oldLastName = lastName;
lastName = 'jaiswal';
console.log(lastName, oldLastName);

// Reference
const amisha = {
  firstName: 'Amisha',
  lastName: 'oberoi',
  age: 27,
};

const marriedAmisha = amisha;
marriedAmisha.lastName = 'jaiswal';
console.log('Before marriage :', amisha);
console.log('After marriage :', marriedAmisha);

// Copying object
const amisha2 = {
  firstName: 'amisha',
  lastName: 'oberoi',
  age: 24,
  family: ['Mom', 'Dad'],
};
const marriedAmisha2 = Object.assign({}, amisha2);
marriedAmisha2.lastName = 'jaiswal';

marriedAmisha2.family.push('son');
marriedAmisha2.family.push('daughter');

console.log('Before marriage :', amisha2);
console.log('After marriage :', marriedAmisha2);
