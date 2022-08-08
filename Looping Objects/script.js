"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // [weekdays[0]]: {
  //   open: 13,
  //   close: 22,
  // },
  [weekdays[1]]: {
    open: 15,
    close: 22,
  },
  [weekdays[2]]: {
    open: 15,
    close: 22,
  },
  // [weekdays[3]]: {
  //   open: 15,
  //   close: 22,
  // },
  [weekdays[4]]: {
    open: 13,
    close: 24,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 13,
    close: 22,
  },
};

const restaurant = {
  companyName: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",
  openingHours,
};

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

let openStr = `We're open ${properties.length} days a week:`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// key, value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}
