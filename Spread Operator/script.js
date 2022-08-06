"use strict";

const array = [5, 10, 15];
const badArray = [1, 2, 3, array[0], array[1], array[2]];
console.log(badArray);
const goodArray = [1, 2, 3, ...array];
console.log(goodArray);
console.log(...goodArray);

const restaurant = {
  companyName: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `This is your delicious ${this.mainMenu[1]} with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const newMenu = [...restaurant.mainMenu, "Lasagne"];
console.log(newMenu);

// copy array
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = "Miami";
console.log(str);
console.log(...str);
const letters = [...str];
console.log(letters);

// example
const ingredients = ["cheese", "mushrooms", "garlic"];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurent = {
  foundedIn: 1989,
  founderName: "Lorenzo",
  ...restaurant,
  companyName: "Lorenzo Pizza",
};
console.log(newRestaurent);
