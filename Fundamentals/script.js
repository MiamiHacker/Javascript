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
// BigInt is for larger integers than the Number type cab hold
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
const massMiamiHacker = 73;
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
    console.log(`MiamiHacker BMI is ${bmiMiamiHacker} and John Doe BMI is ${bmiJohnDoe} so MiamiHacker BMI is higher`)
} else {
    console.log(`John Doe BMI is ${bmiJohnDoe} and MiamiHacker BMI is ${bmiMiamiHacker} so John Doe BMI is higher`)
}
