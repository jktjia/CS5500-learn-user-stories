import Bank from "../src/bank";

const bank = new Bank();

// successful account creation
const acc = bank.createAccount('Someone', 23, '123456');
if (acc.accountNumber == '123456') {
    console.log('Scenario 1 passes');
} else {
    console.log('Scenario 1 fails');
}

// account creation but account exists
try {
    bank.createAccount('Someone', 23, '123456');
    console.log('Scenario 2 fails');
} catch (_) {
    console.log('Scenario 2 passes');
}

// deposit money into existing account
bank.deposit(16, '123456');
if (acc.balance == 16) {
    console.log('Scenario 3 passes');
} else {
    console.log('Scenario 3 fails');
}

// deposit money into nonexistant account
try {
    bank.deposit(100, 'account does not exist');
    console.log('Scenario 4 fails');
} catch (_) {
    console.log('Scenario 4 passes');
}

// deposit negative money
try {
    bank.deposit(-5, '123456');
    console.log('Scenario 5 fails');
} catch (_) {
    console.log('Scenario 5 passes');
}

// withdraw money from existing account
bank.withdraw(8, '123456');
if (acc.balance == 8) {
    console.log('Scenario 6 passes');
} else {
    console.log('Scenario 6 fails');
}

// withdraw money from nonexistant account
try {
    bank.withdraw(1, 'account does not exist');
    console.log('Scenario 7 fails');
} catch (_) {
    console.log('Scenario 7 passes');
}

// withdraw negative money
try {
    bank.withdraw(-20, '123456');
    console.log('Scenario 8 fails');
} catch (_) {
    console.log('Scenario 8 passes');
}

// withdraw too much money
try {
    bank.withdraw(100, '123456');
    console.log('Scenario 9 fails');
} catch (_) {
    console.log('Scenario 9 passes');
}

// check balance of existing account a few times
bank.createAccount('New User', 20, '789101');
bank.checkBalance('789101'); // should be 0
bank.deposit(25, '789101');
bank.checkBalance('789101'); // should be 25
bank.withdraw(10, '789101');
bank.checkBalance('789101'); // should be 15
try {
    bank.withdraw(20, '789101');
    console.log('Scenario 9 fails'); // scenario 9 even though it's in scenario 10 b/c the try catch uses something tested in scenario 9
} catch (_) {
    bank.checkBalance('789101'); // should still be 15
}

// check balance of nonexistant account
try {
    bank.checkBalance('This account is not real');
    console.log('Scenario 11 fails');
} catch (_) {
    console.log('Scenario 11 passes');
}