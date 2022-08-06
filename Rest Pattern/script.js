"use strict";

const restaurant = {
  companyName: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",
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
    sun: {
      open: 12,
      close: 23,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// spread, ... is on the right side of the =
const numbers = [3, 4, 5];
const allNumbers = [1, 2, ...numbers];
console.log(allNumbers);

// rest, ... is on the left side of the =
const [a, b, c, ...others] = [1, 3, 5, 10, 15, 25];
console.log(a, b, c, others);

const { sat, sun, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(12, 8, 10, 5, 15);
add(...allNumbers, ...others, 10);

restaurant.orderPizza("tomato", "cheese", "mushrooms");
