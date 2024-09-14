import Bank from "../src/bank";

const bank = new Bank();

// successful account creation
const acc = bank.createAccount('Someone', 23, '123456');
if (acc.accountNumber == '123456') {
    console.log('Scenario 1 passes');
} else {
    console.log('Scenario 1 fails');
}

// account exists
try {
    bank.createAccount('Someone', 23, '123456');
    console.log('Scenario 2 fails');
} catch (_) {
    console.log('Scenario 2 passes');
}