"use strict";

// Maps fundamentals
const restaurant = new Map();
restaurant.set("name", "Italian Restaurant Miami Beach");
restaurant.set("location", "1130 Collins Ave, Miami Beach");
// console.log(restaurant);

restaurant
  .set("categories", ["Italian", "Pizzeria"])
  .set("starterMenu", ["Foccia", "Bruchetta", "Garlic Bread", "Salad"])
  .set("mainMenu", ["Pizza", "Pasta", "Risotto"])
  .set("options", "Dine-in · Takeaway · Delivery")
  .set("open", 13)
  .set("close", 23)
  .set(true, "We are open!!")
  .set(false, "We are closed!");
console.log(restaurant);
console.log(restaurant.get("location"));

console.log(restaurant.has("options"));
restaurant.delete("options");
console.log(restaurant.size);
restaurant.set(document.querySelector("h1"), "Heading");
// restaurant.clear();
console.log(restaurant);

// true false, The result of the end operation will map to one of the values
const time = 19;
console.log(
  restaurant.get(
    time > restaurant.get("open") && time < restaurant.get("close")
  )
);

// Maps Iteration
const question = new Map([
  ["question", "What language are we coding here?"],
  [1, "C++"],
  [2, "JavaScript"],
  [3, "C#"],
  ["correct", 2],
  [true, "Correct!"],
  [false, "Try Again!"],
]);
console.log(`--------QUIZ--------`);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = 2;
console.log(question.get(question.get("correct") === answer));

// Convert Object to Map
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
console.log(openingHours);
const hours = new Map(Object.entries(openingHours));
console.log(hours);

// Convert Map to Array
console.log(...question);
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
