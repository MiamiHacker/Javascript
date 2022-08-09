"use strict";

const orders = new Set([
  "Pizza",
  "Pasta",
  "Risotto",
  "Risotto",
  "Risotto",
  "Pizza",
  "Foccia",
  "Bruchetta",
  "Pizza",
  "Garlic Bread",
  "Salad",
  "Pizza",
]);

console.log(orders);
console.log(orders.size);
console.log(orders.has("Pizza"));
console.log(orders.has("Bread"));

orders.add("Tomato Soup");
orders.delete("Salad");
console.log(orders);

for (const order of orders) {
  console.log(order);
}

// clear
const clearIt = orders;
console.log(clearIt);
clearIt.clear();
console.log(clearIt);

const staff = [
  "Waiter",
  "Chef",
  "Manager",
  "Waiter",
  "Waiter",
  "Chef",
  "Chef",
  "Waiter",
  "Waiter",
  "Waiter",
];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
