"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("AA321");
createBooking("AA321", 5, 498);
createBooking("AA321", undefined, 999);

// example of Higher-order function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascipt is the best!", oneWord);
transformer("Javascipt is the best!", upperFirstWord);

// another example of a call-back function
const thumbsUp = function () {
  console.log("👍");
};
document.body.addEventListener("click", thumbsUp);

// functions returning functions
const myName = "Miami Hacker";
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greet("Hi")(myName);

// greeter is a function
const greeter = greet("Hey");
greeter(myName);

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("yoo")(myName);

// the call and apply methods
const airlineCompany = {
  airline: "American Airlines",
  code: "AA",
  bookings: [],
  // book: function() {}
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNumber}`
    );
  },
};
airlineCompany.book(6578, myName);

const easyJet = {
  airline: "EasyJet Europe",
  code: "EC",
  bookings: [],
};

const airFrance = {
  airline: "Air France",
  code: "AF",
  bookings: [],
};

const book = airlineCompany.book;
// call method
book.call(easyJet, 3452, myName);

const flightData = [8976, myName];
// apply method is not used anymore
book.apply(airFrance, flightData);

// with the call method it is working with the spread operator
// to give all arguments of the array
book.call(easyJet, ...flightData);

//bind method
const bookAF = book.bind(airFrance);
bookAF(7658, myName);

// partial application, a part of the function is already applied
// 6675 is already predefined
const bookEE6675 = book.bind(easyJet, 6675);
bookEE6675(myName);

// with event listeners
airlineCompany.planes = 300;
airlineCompany.buyPlane = function () {
  console.log(this.planes);
  this.planes++;
  console.log(this.planes);
};
// airlineCompany.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", airlineCompany.buyPlane.bind(airlineCompany));

// challenge

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: C++", "3: C#"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    // const answer = 0;
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    // console.log(answer);

    // register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      // console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// callback function with timer
setTimeout(function () {
  console.log(`TIMER AFTER 1 SECOND`);
}, 1000);

// Immediately invoked function expression IIFE
(function () {
  console.log(`This will only run ones.`);
})();

(() => console.log(`This will also run ones`))();

// Closures
// A closure is like a backpack that a function carries around wherever it goes.
// This backpack has all the variables that were present in the emvironment where the function was created.
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// more closures examples
// example 1
let f;

const g = function () {
  const a = 10;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 15;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding ${n} passengers now!`);
    console.log(`There are 3 groups with ${perGroup} passengers each.`);
  }, wait * 1000);

  console.log(`Boarding starts in ${wait} seconds.`);
};

boardPassengers(279, 3);
