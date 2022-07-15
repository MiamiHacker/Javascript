'use strict';

const person = {
    myName: 'MiamiHacker',
    birthYear: 2003,
    job: 'student',
    calcAge: function () {
        // console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    friends: ['John Doe', 'Jane Doe'],
    driverlicense : false
}
console.log(person);
// Member Access
console.log(person.myName);
// Computed Member Acces
console.log(person['myName']);
// function inside a object
console.log(person.calcAge());
console.log(person['calcAge']());

person.location = 'Miami FL';
person['twitter'] = '@miami_hacker';
console.log(person);

// const info = prompt(`What info you want about this person? Choose between myName, age, job, friends, location, twitter and driverlicense.`);
const info = 'age';
if (person[info]){
    console.log(person[info]);
} else {
    console.log('Wrong request!')
}

const hasDriverLicence = person.driverlicense;
function hasLicense(text){
    if (hasDriverLicence) {
        text = `and ${person.myName} has a driver license`;
        return text;
    } else {
        text = `and ${person.myName} has no driver license`;
        return text;
    }
}

const text = `${person.myName} is ${person.calcAge()} years old ${person.job} and has ${person.friends.length} friends.\nHis best friend called ${person.friends[1]} ${hasLicense()}`;
console.log(text);

console.log(`-----------------------------------------`)
const bmiData = {
    personOne: ['MiamiHacker', 78, 1.69],
    personTwo: ['JohnDoe', 392, 1.95]
}
function calcBmi(a, b){
    return a / b ** 2;
}
const bmiOne = calcBmi(bmiData.personOne[1], bmiData.personOne[2]);
const bmiTwo = calcBmi(bmiData.personTwo[1], bmiData.personTwo[2]);
if (bmiOne > bmiTwo) {
    console.log(`${bmiData.personOne[0]} BMI (${bmiOne}) is higher than ${bmiData.personTwo[0]} (${bmiTwo})`);
} else {
    console.log(`${bmiData.personTwo[0]} BMI (${bmiTwo}) is higher than ${bmiData.personOne[0]} (${bmiOne})`)
}
console.log(`-----------------------------------------`)