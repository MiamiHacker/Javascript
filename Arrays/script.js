'use strict';

const students = ['MiamiHacker', 'John Doe', 'Jane Doe'];
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[students.length -1]);

const age = 2022 - 2003;
const hacker = new Array('MiamiHacker', age, 'Miami - FL');
console.log(hacker);
// const arrays can be changed, it's not primitive!
hacker[1] = 2002;
console.log(hacker);
const person = [students, hacker];
console.log(person);
console.log(person[1][2]);

const calcAge = function(birthYear){
    return 2022 - birthYear;
}
console.log(calcAge(2003));
const years = [2003, 2001, 1998, 1986, 1976, 1964];
console.log(calcAge(years[1]));

// array operations (methods)
console.log(years);
// push element to the end of the array
years.push(2005);
console.log(years);
// push element to beginning of the array
years.unshift(2007);
console.log(years);
// remove last element of the array
years.pop();
console.log(years);
// remove first element of the array 
years.shift();
console.log(years);
// position of the element 
// using strict equality so === (it does not type coercion) 
console.log(years.indexOf(2003));
// boolean if element is in array 
console.log(years.includes(2003));

console.log(`-------------------------------------`)
const total = [];
const tipCalc = function (tip, tipPerc){
    if (tip >= 50 && tip <= 300) {
        tipPerc = (tip * 15) / 100;
        // console.log(tipPerc);
    } else {
        tipPerc = (tip * 20) / 100;
        // console.log(tipPerc);
    }
    return tipPerc;
};
const tip = tipCalc(100);
console.log(tip);
const bills = [125, 555, 44];
console.log(bills);
const tipOne = tipCalc((bills[0]));
console.log(tipOne);
total.push(tipOne + bills[0]);
const tipTwo = tipCalc((bills[1]));
console.log(tipTwo);
total.push(tipTwo + bills[1]);
const tipThree = tipCalc((bills[2]));
console.log(tipThree);
total.push(tipThree + bills[2]);
console.log(total);

console.log(`-----------------or------------------`);
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20; 
}
const allBills = [125, 555, 44];
const allTips = [calcTip(allBills[0]), calcTip(allBills[1]), calcTip(allBills[2])];
const amount = [allBills[0] + allTips[0], allBills[1] + allTips[1], allBills[2] + allTips[2]];
console.log(allBills, allTips, amount);

console.log(`----- total of array -----`);
const x = [1, 2, 3, 4, 5];
const y = x.reduce((a, b) => a + b, 0);
console.log(y);

console.log(`----- average of array -----`);
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
