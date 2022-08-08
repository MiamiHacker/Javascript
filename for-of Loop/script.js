"use strict";

const restaurant = {
  name: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

for (const menuItem of menu) console.log(menuItem);
for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}
