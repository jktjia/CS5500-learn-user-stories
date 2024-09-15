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