"use strict";

const airline = "American Airlines";
const plane = "B777-200";
console.log(airline.length);
console.log(airline[9]);
console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));
console.log(airline.slice(9));
console.log(airline.slice(9, 12));
console.log(airline.slice(0, airline.indexOf(" ")));
// + 1 removes space in console
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-5));
console.log(airline.slice(-8, -5));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Boolens
console.log(plane.includes("B777"));
console.log(plane.startsWith("B7"));
console.log(plane.endsWith("00"));
if (plane.includes("777") && plane.startsWith("B") && plane.endsWith("200")) {
  console.log(`The first flight of the ${plane} was on June 12, 1994`);
}

// Fix capitalization in name
const passenger = "MIamI";
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrect);

// comparing email
const email = "miami@hacker.com";
const loginEmail = "   MIamI@HAcKeR.cOM  ";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail, normalizedEmail === email);

// slice()
const checkWindowSeat = function (seats) {
  // Airline with a row of 6 seats, A and E are the windowseats
  const seat = seats.slice(-1);
  if (seat === "A" || seat === "E") console.log(`You get a window seat!`);
  else console.log(`You don't get a window seat.`);
};
checkWindowSeat("2A");
checkWindowSeat("4D");
checkWindowSeat("5E");

// replace() and replaceAll()
const announcement = "It's a perfect day to make things perfect !!";
const newAnnouncementOne = announcement.replace("perfect", "horrible");
const newAnnouncementTwo = announcement.replaceAll("perfect", "horrible");
console.log(newAnnouncementOne);
console.log(newAnnouncementTwo);

// example in a function
const checkLuggage = function (items) {
  const luggage = items.toLowerCase();
  if (luggage.includes("knife") || luggage.includes("gun")) {
    console.log(`You are not allowed on board!`);
  } else {
    console.log(`Welcome aboard!`);
  }
};
checkLuggage("Knife");
checkLuggage("Food");
checkLuggage("gUn");

// split() gives a array
console.log("All+in+one".split("+"));
console.log("Miami Hacker".split(" "));

// split() and join()
const [firstName, lastName] = "Miami Hacker".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// function example split() join() push() slice()
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("miami hacKeR");
capitalizeName("joHn fitzgErald kennEdy");

// padding a string
// console.log(newName.length);
console.log(newName.padStart(26, "+").padEnd(36, "+"));

// mask numbers like a creditcardnumber
const maskCreditCard = function (number) {
  const str = String(number);
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, "#");
};
console.log(maskCreditCard(12345678));

// repeat()
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(5);
