'use strict';

// Mock User Data
const account1 = {
  owner: 'Randy Anderson',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  transactionDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-07-11T23:36:17.929Z',
    '2021-07-12T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  transactionDates: [
    '2020-11-01T13:15:33.035Z',
    '2020-11-30T09:48:16.867Z',
    '2020-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  transactionDates: [
    '2021-03-18T13:37:56.955Z',
    '2021-03-30T20:49:12.782Z',
    '2021-05-03T04:43:31.939Z',
    '2021-05-04T18:49:00.243Z',
    '2021-05-24T08:57:25.001Z',
    '2021-05-30T06:38:58.230Z',
    '2021-06-07T05:53:47.003Z',
    '2021-06-20T06:41:18.358Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  transactionDates: [
    '2020-06-01T20:20:30.543Z',
    '2020-07-14T16:45:19.947Z',
    '2020-08-06T13:41:33.324Z',
    '2021-03-28T08:05:53.429Z',
    '2021-03-30T06:28:54.359Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'John Snow',
  transactions: [560, 1635, 250, 10, 33],
  interestRate: 1.26,
  pin: 5555,

  transactionDates: [
    '2020-06-23T01:47:23.043Z',
    '2020-07-28T10:24:26.561Z',
    '2021-01-29T17:51:35.337Z',
    '2021-02-08T10:22:46.104Z',
    '2021-04-22T11:23:50.234Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account6 = {
  owner: 'Kyle Brown',
  transactions: [977, 400, 15, 85, 35, -455, -695, -32],
  interestRate: 0.9,
  pin: 6666,

  transactionDates: [
    '2020-01-31T18:24:40.109Z',
    '2020-02-23T18:13:57.226Z',
    '2020-03-10T06:58:19.385Z',
    '2020-08-04T23:34:47.773Z',
    '2020-08-05T01:45:46.118Z',
    '2021-06-23T12:48:57.837Z',
    '2021-07-10T07:35:27.843Z',
    '2021-07-19T02:51:59.316Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account7 = {
  owner: 'Nick Jonas',
  transactions: [700, 10, 650, 1, 25, -165, 977, -440],
  interestRate: 1.13,
  pin: 7777,

  transactionDates: [
    '2020-08-03T17:12:38.357Z',
    '2020-12-22T19:55:17.219Z',
    '2020-12-25T43:44:11.910Z',
    '2021-01-26T16:00:00.110Z',
    '2021-01-28T16:51:09.834Z',
    '2021-03-04T14:01:01.947Z',
    '2021-03-16T18:10:30.112Z',
    '2021-03-17T12:01:56.356Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account8 = {
  owner: 'Micheal Skies',
  transactions: [346, 75, 2642, 6783, -1065, 165, 1977, -1440],
  interestRate: 2.88,
  pin: 8888,

  transactionDates: [
    '2020-08-06T13:45:13.835Z',
    '2020-09-02T19:11:36.183Z',
    '2020-10-21T43:01:13.907Z',
    '2021-08-09T16:19:56.235Z',
    '2021-08-23T16:37:56.386Z',
    '2021-08-30T14:33:55.374Z',
    '2021-10-07T18:09:00.371Z',
    '2021-12-02T12:10:22.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account9 = {
  owner: 'Cam Hammel',
  transactions: [3648, -708, 2468, -2250, -16],
  interestRate: 0.8,
  pin: 9999,

  transactionDates: [
    '2021-08-25T16:18:46.953Z',
    '2021-08-26T16:33:06.118Z',
    '2021-11-22T14:43:26.296Z',
    '2021-11-25T18:49:59.783Z',
    '2021-12-21T12:01:20.999Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account10 = {
  owner: 'Kim Loa',
  transactions: [
    345, -175, 346, 86, -45, 47, -998, -63, 1366, 346, -34, 425, 477, -1350,
  ],
  interestRate: 1.8,
  pin: 4321,

  transactionDates: [
    '2019-09-04T07:29:53.354Z',
    '2019-12-13T16:43:13.228Z',
    '2019-07-03T22:03:33.734Z',
    '2019-07-03T45:05:33.021Z',
    '2019-09-12T12:46:33.044Z',
    '2019-12-23T27:02:33.037Z',
    '2020-11-01T11:15:33.035Z',
    '2020-11-30T19:48:16.002Z',
    '2020-12-25T43:04:23.511Z',
    '2021-01-25T16:18:46.225Z',
    '2021-02-05T16:12:06.837Z',
    '2021-04-18T14:43:26.936Z',
    '2021-06-25T18:49:59.734Z',
    '2021-07-26T12:11:21.148Z',
  ],
  currency: 'USD',
  locale: 'pt-PT',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
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
const containerTransactions = document.querySelector('.transactions');

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

const displayTransactions = function (transactions, sort = false) {
  containerTransactions.innerHTML = '';

  const trans = sort
    ? transactions.slice().sort((a, b) => a - b)
    : transactions;

  trans.forEach(function (trans, i) {
    const type = trans > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="transactions__row">
            <div class="transactions__type transactions__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="transactions__date"></div>
            <div class="transactions__value">${trans}</div>
        </div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = acc => {
  acc.balance = acc.transactions.reduce((acc, trans) => acc + trans, 0);
  labelBalance.textContent = `$${acc.balance}`;
};

const calcDisplaySummary = acc => {
  const cashNow = acc.transactions
    .filter(tran => tran > 0)
    .reduce((acc, tran) => acc + tran, 0);
  labelSumIn.textContent = `$${cashNow}`;

  const cashOut = acc.transactions
    .filter(tran => tran < 0)
    .reduce((acc, tran) => acc + tran, 0);
  labelSumOut.textContent = `$${Math.abs(cashOut)}`;

  const interest = acc.transactions
    .filter(tran => tran > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interest}`;
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUi = acc => {
  // This displays transactions history
  displayTransactions(acc.transactions);
  // This displays the account balance
  calcDisplayBalance(acc);
  // This displays the account summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', e => {
  // This prevents the form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // This displays UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // This clears the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // This updates the UI
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputLoanAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    // Transfer
    currentAccount.transactions.push(-amount);
    receiverAccount.transactions.push(amount);

    // This updates the UI
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.transactions.some(tran => tran >= amount * 0.1)
  ) {
    // Adds the transaction
    currentAccount.transactions.push(amount);

    // Updates UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);

    // This will delete current account
    accounts.splice(index, 1);

    // Hide the UI after account deletion
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayTransactions(currentAccount.transactions, !sorted);
  sorted = !sorted;
});
