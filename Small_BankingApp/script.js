"use strict";

// Data
const account1 = {
  owner: "Miami Hacker",
  movements: [1200, 1450, -400, 2200, -650, -130, -70, -135, 1940],
  interestRate: 1.7, // %
  pin: 1111,
};

const account2 = {
  owner: "John Doe",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.4,
  pin: 2222,
};

const account3 = {
  owner: "Jane Snow",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.9,
  pin: 3333,
};

const accounts = [account1, account2, account3];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// transactions
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// create username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

// current balance
const calcCurrentBalance = function (acc) {
  const balance = acc.movements.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  acc.balance = balance;
  console.log(balance);
  labelBalance.textContent = `€ ${balance}`;
};
// calcCurrentBalance(account1.movements);

// display in, out and interest
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((accumulator, current) => accumulator + current, 0);
  console.log(`incomes ${incomes}`);
  labelSumIn.textContent = `€${incomes}`;
  const outgoing = acc.movements
    .filter((mov) => mov < 0)
    .reduce((accumulator, current) => accumulator + current, 0);
  console.log(`outgoing ${outgoing}`);
  labelSumOut.textContent = `€${Math.abs(outgoing)}`;
  const interest = ((incomes + outgoing) * acc.interestRate) / 100;
  console.log(`interest ${interest}`);
  labelSumInterest.textContent = `€${interest.toFixed(2)}`;
};
// calcDisplaySummary(account1.movements);

// display
const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcCurrentBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// login user
let currentAccount;

btnLogin.addEventListener("click", function (event) {
  // prevent form from submitting (so reloading the page)
  event.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // with ? if statement only runs when currentAccount exist
  // optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`Login: ${currentAccount.owner}`);
    // display UI and welcome message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome, ${currentAccount.owner}`;
    // clear input fields of login
    inputLoginUsername.value = inputLoginPin.value = "";
    // blur cursor focus when enter is used
    inputLoginUsername.blur();
    inputLoginPin.blur();

    updateUI(currentAccount);
  }

  //   console.log(currentAccount);
});

// transfer money to other account
btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  //   console.log(amount, receiver);

  if (
    amount > 0 &&
    receiver &&
    currentAccount.balance >= amount &&
    receiver?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);
    updateUI(currentAccount);
    console.log(
      `Valid Transaction: €${amount} from ${currentAccount.owner} to ${receiver.owner}`
    );
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferAmount.blur();
    inputTransferTo.blur();
  }
});

// get loan
const depositPerc = 0.28;
btnLoan.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * depositPerc)
  ) {
    // push amount to movements
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  } else {
    const maxDeposit = currentAccount.movements.reduce(
      (accumulator, current) => (accumulator > current ? accumulator : current),
      currentAccount.movements[0]
    );
    const maxLoan = maxDeposit / depositPerc;
    console.log(`Max loan: ${maxLoan.toFixed(2)}`);
  }
});

// close account
btnClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // delete account
    console.log(`Account of ${currentAccount.owner} is deleted!`);
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
