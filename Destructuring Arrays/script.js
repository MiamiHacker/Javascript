"use strict";

const restaurant = {
  name: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// console.log(restaurant.order(3, 1));

const arr = [5, 10, 15];
const a = arr[2];
console.log(a);

// Dectructuring
const [x, y, z] = arr;
console.log(x, y, z);

const [first, , second] = restaurant.mainMenu;
console.log(first, second);

// Switching variables
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [menuStarter, menuMain] = restaurant.order(3, 1);
console.log(`The order is ${menuStarter} and ${menuMain}`);

// Nested array destructuring
const numbers = [5, 10, [15, 20]];
const [i, , ii] = numbers;
console.log(i, ii);
const [j, , [jj, jjj]] = numbers;
console.log(j, jj, jjj);

// Default values
const [zz = 1, zzz = 1, zzzz = 1] = [2, 4];
console.log(zz, zzz, zzzz);
