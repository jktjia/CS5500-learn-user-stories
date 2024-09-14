// Indicates the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/** 
 * Bank class that manages all of the accounts in a bank 
 */
class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * This method creates a new account with the given name, age, and account number
     * @param {string} name The name of the account holder
     * @param {number} age The age of the account holder
     * @param {string} accountNumber The account numer of the account
     * @returns {BankAccount} The created account
     */
    public createAccount(name: string, age: number, accountNumber: string) : BankAccount {
        const accExists = this.findAccount(accountNumber);
        if (accExists != null) {
            throw new Error('Account already exists');
        }
        const account = {
            name, 
            age,
            accountNumber, 
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * This method checks if an account with the given account number exists.
     * @param {string} accNum The account number to check
     * @returns {BankAccount | undefined} The account if it exists, undefined otherwise
     */
    private findAccount(accNum: string) : BankAccount | undefined {
        return this.accounts.find((acc) => (acc.accountNumber == accNum));
    }
}

export default Bank;