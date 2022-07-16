'use strict';

// runs while condition is true
for(let i = 1; i <= 3; i++){
    console.log(`log ${i}`);
}

const person = [
    'MiamiHacker',
    'Student',
    19,
    ['John Doe', 'Jane Doe'],
    'Miami FL',
    false
]
const types = [];
for(let i = 0; i < person.length; i++){
    console.log(person[i], typeof person[i]);
    // use like you prefer
    // types[i] = typeof person[i];
    types.push(typeof person[i]);
}
console.log(types)
console.log(`----- continue -----`)
for(let i = 0; i < person.length; i++){
    if(typeof person[i] !== 'string') continue;
    console.log(person[i], typeof person[i]);
}
console.log(`----- break -----`)
for(let i = 0; i < person.length; i++){
    if(typeof person[i] === 'number') break;
    console.log(person[i], typeof person[i]);
}
console.log(`----- loop backwards -----`)
for(let i = person.length - 1; i >= 0; i--){
    console.log(person[i]);
}

console.log(`----- calc birthyear -----`)
const d = new Date();
let year = d.getFullYear();
const birthYear = [2003, 2000, 1993, 1987, 1981, 1977, 1968];
const ages = [];
console.log(year)
for(let i = 0; i < birthYear.length; i++){
    ages.push(year - birthYear[i]);
}
console.log(ages);

