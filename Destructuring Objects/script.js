"use strict";

const restaurant = {
  companyName: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 13,
      close: 22,
    },
    fri: {
      open: 13,
      close: 23,
    },
    sat: {
      open: 0, // 24 hours
      close: 24,
    },
  },
};

const { companyName, openingHours, categories } = restaurant;
console.log(companyName, openingHours, categories);

const {
  companyName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting a default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 9;
let b = 12;
const obj = { a: 19, b: 27, c: 10 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const { sat } = openingHours;
console.log(sat);

const {
  sat: { open, close },
} = openingHours;
console.log(open, close);
