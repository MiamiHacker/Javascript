'use strict';

// string
const firstName = "Miami";
const lastName = "Hacker";
// number
let year = 2022;
const birthYear = 2003;
let age = year - birthYear;
// boolean
let user = false;
// Undefined means not defined yet so it's a empty value
// Null also means empty value
let student;
// BigInt is for larger integers than the Number type can hold
if (!user){
    console.log(`
    firstName is a ${typeof firstName} 
    lastName is a ${typeof lastName}
    age is a ${typeof age}
    user is a ${typeof user}
    student is ${typeof student}
    `)
    console.log(`My name is ${firstName} ${lastName} and i'm ${age} yrs old.`);
}

// Assignment operators
let x, y;
x = y = 5 + 4; // 5 + 4 = 9 for x and y
x++; // 9 + 1 = 10
x += 5; // 10 + 5 = 15
x *= 2; // 15 * 2 = 30
x /= 10; // 30 / 10 = 3
x--; // 3 - 1 = 2
const average = (x + y) / 2;
console.log(`x is ${x} and y is ${y}, so the average is ${average}`)

// Comparison operators
console.log(x > y); // >, <, >=, <=, ==, !=

// BMI
const massMiamiHacker = 71; // set to 83.5 
const heightMiamiHacker = 1.81;
const massJohnDoe = 94;
const heightJohnDoe = 1.92;
let bmiMiamiHacker = massMiamiHacker / heightMiamiHacker ** 2;
bmiMiamiHacker = bmiMiamiHacker.toFixed(1)
console.log(`BMI MiamiHacker ${bmiMiamiHacker}`);
let bmiJohnDoe = massJohnDoe / heightJohnDoe ** 2;
bmiJohnDoe = bmiJohnDoe.toFixed(1)
console.log(`BMI John Doe ${bmiJohnDoe}`);
if (bmiMiamiHacker > bmiJohnDoe) {
    console.log(`MiamiHacker BMI is ${bmiMiamiHacker} and John Doe BMI is ${bmiJohnDoe} so MiamiHacker BMI is higher`);
} else if (bmiMiamiHacker < bmiJohnDoe) {
    console.log(`John Doe BMI is ${bmiJohnDoe} and MiamiHacker BMI is ${bmiMiamiHacker} so John Doe BMI is higher`);
} else {
    console.log(`John Doe BMI is ${bmiJohnDoe} and MiamiHacker BMI is ${bmiMiamiHacker} so both BMI are the same`);
}

// string to number - conversion
let _year = "2022";
console.log(typeof _year);
_year = Number(_year);
console.log(typeof _year, _year - 22);

// type coercien - bcs of the plus 19 is also a string now 
console.log("I'm " + 19 + " years old");
// - * / will converts a string to a number
console.log("15" * "10" - 50, "100" / "10");

let n = "10" / "5" - "1" + "2";
n -= 2;
console.log(`n = ${n + "0"}`);

// equality operator
// const z = Number("1")
const z = "1"; // change "1" to 1 
if (z === 1) console.log(`z is a strict equality operator`);
else console.log(`z is not a strict equality operator`);
if (z == 1) console.log(`z is a loose operator`);

// operators
// const teamA = 102;
// const teamB = 101;
const teamA = Math.floor((96 + 108 + 89) / 3);
const teamB = Math.floor((88 + 91 + 110) / 3);
const winScore = 100;
console.log(`Avarage Team A ${teamA}`);
console.log(`Avarage Team B ${teamB}`);
if (teamA > teamB && teamA >= winScore){
    console.log(`Team A wins the trophy with a score of ${teamA}`);
} else if (teamA < teamB && teamB >= winScore){
    console.log(`Team B wins the trophy with a score of ${teamB}`);
} else if (teamA === teamB && teamB >= winScore){
    console.log(`Team A and Team B wins the trophy both with a score of ${teamA}`);
} else if (teamA > teamB && teamA < winScore) {
    console.log(`Team A wins with a score of ${teamA} but gets no trophy`);
} else if (teamA < teamB && teamA < winScore) {
    console.log(`Team B wins with a score of ${teamB} but gets no trophy`);
} else {
    console.log(`Team A and Team B scored both ${teamA} but they gets no trophy`);
}

const luckyNumber = 100;
switch (luckyNumber) {
    case 100:
        console.log(`It's 100`);
        break;
    case 99:
    case 98:
        console.log(`It's 98 or 99`);
        break;
    default:
        console.log(`Try 98, 99 or 100`);
}

// conditional operator
const num = 20;
num >= 20 ? console.log(`It's 20 or above`) : console.log(`It's below 20`);
const check20 = num >= 20 ? `It's 20 or above` : `It's below 20`;
console.log(check20);

const billValue = 100; 
const tipValue = billValue >= 50 && billValue <= 300 ? 15 : 20;
const tip = billValue * tipValue / 100;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${billValue + tip}`);

// functions
function blender(apple, orange, banana){
    const smoothie = `${apple} apples, ${orange} oranges and ${banana} bananas`;
    return smoothie;
}
const appleJuice = blender(8,0,0);
console.log(`For applejuice you need ${appleJuice}`);
const orangeJuice = blender(0,6,0);
console.log(`For orangejuice you need ${orangeJuice}`);
const bananaSmoothie = blender(2,1,4);
console.log(`For a bananasmoothie you need ${bananaSmoothie}`);

function multiplySum(a, b){
    const sum = a * b;
    return sum;
}
console.log(multiplySum(10,5));

// Function declaration 
console.log(myAge(2003));
function myAge(birthYear){
    return 2022 - birthYear;
}
console.log(myAge(2003));

// Function expression 
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const newAge = calcAge(2003);
console.log(newAge);

// Arrow Function
const newAgeTwo = birthYear => 2022 - birthYear;
const ageTwo = newAgeTwo(2003);
console.log(ageTwo);

const retirement = birthYear => {
    const myAge = 2022 - birthYear;
    const retire = 67 - myAge;
    return retire;
}
const retireAge = retirement(2003);
console.log(`It takes you ${retireAge} yrs before retirement.`);

const myRetirement = (birthYear, myName) => {
    const age = 2022 - birthYear;
    const retire = 67 - age;
    return `${myName} retires in ${retire} years.`;
}
console.log(myRetirement(2003, 'MiamiHacker'));
console.log(myRetirement(1969, "JohnDoe"));