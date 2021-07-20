'use strict';

// Mock User Data
const account1 = {
  owner: 'Randy Anderson',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 3442,
};

const account5 = {
  owner: 'John Snow',
  transactions: [560, 1635, 250, 10, 33],
  interestRate: 1.26,
  pin: 8943,
};

const account6 = {
  owner: 'Kyle Brown',
  transactions: [977, 400, 15, 85, 35, -455, -695, -32],
  interestRate: 0.9,
  pin: 2457,
};

const account7 = {
  owner: 'Nick Jonas',
  transactions: [700, 10, 650, 1, 25, -165, 977, -440],
  interestRate: 1.13,
  pin: 6804,
};

const account8 = {
    owner: 'Micheal Skies',
    transactions: [346, 75, 2642, 6783, -1065, 165, 1977, -1440],
    interestRate: 1.21,
    pin: 3648,
};

const account9 = {
    owner: 'Cam Hammel',
    transactions: [3648, -708, 2468, -2250, -16],
    interestRate: 1.21,
    pin: 58,
};

const account10 = {
    owner: 'Micheal Skies',
    transactions: [346, 75, 2642, 6783, -1065, 165, 1977, -1440],
    interestRate: 1.21,
    pin: 3648,
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];

// App Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transaction');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
