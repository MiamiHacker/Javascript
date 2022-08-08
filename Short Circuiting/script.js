"use strict";

const restaurant = {
  companyName: "Italian Restaurant Miami Beach",
  location: "1130 Collins Ave, Miami Beach",
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Foccia", "Bruchetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  options: "Dine-in · Takeaway · Delivery",
  numOfGuestsCorrect: 0,
};

const numOfGuests = restaurant.numOfGuests ? restaurant.numOfGuests : 5;
console.log(`We have ${numOfGuests} guests in the restaurant`);
const numGuests = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(`We have ${numGuests} guests in the restaurant`);

// They can use and return any data type ~ "Short Circuit Evaluation"
const myName = "MiamiHacker";
console.log(`----- OR -----`);
console.log(0 || myName);
console.log(1 || myName);
console.log("" || myName);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || false || 27 || myName);

console.log(`----- AND -----`);
console.log(0 && myName);
console.log(1 && myName);
console.log("" && myName);
console.log(true && 0);
console.log(undefined && null);

// Nullish
const correctGuests = restaurant.numOfGuestsCorrect ?? 10;
console.log(`Correct number of guests is ${correctGuests}`);

// Logical assignment operators
const restaurantOne = { guestsNumber: 10 };
const restaurantTwo = { guestsNumber: 0 };
const restaurantThree = { guestsNumber: 0, owner: "MiamiHacker" };

// restaurantOne.guestsNumber = restaurantOne.guestsNumber || 5;
restaurantOne.guestsNumber ||= 5;
restaurantTwo.guestsNumber ||= 5;
console.log(restaurantOne.guestsNumber);
console.log(restaurantTwo.guestsNumber);

// nullish assigment operator (null or undefined)
restaurantThree.guestsNumber ??= 5;
console.log(restaurantThree.guestsNumber);

// restaurantTwo.owner = restaurantTwo.owner && "~anonymous~";
// restaurantThree.owner = restaurantThree.owner && "~anonymous~";
restaurantTwo.owner &&= "~anonymous~";
restaurantThree.owner &&= "~anonymous~";
console.log(restaurantTwo);
console.log(restaurantThree);
