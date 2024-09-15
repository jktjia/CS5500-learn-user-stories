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

    /**
     * This method adds the given amount of money to the balance of the account with the given 
     * account number
     * @param {number} amount The amount to add to the account
     * @param {string} accountNumber The number of the account to update
     */
    public deposit(amount: number, accountNumber: string) : void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error('Account does not exist');
        }
        if (amount < 0) {
            throw new Error('Invalid deposit amount');
        }
        account.balance += amount;
    }    

    /**
     * This method removes the given amount of money to the balance of the account with the given 
     * account number
     * @param {number} amount The amount to take from the account
     * @param {string} accountNumber The number of the account to update
     */
    public withdraw(amount: number, accountNumber: string) : void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error('Account does not exist');
        }
        if (amount < 0) {
            throw new Error('Invalid deposit amount');
        }
        if (amount > account.balance) {
            throw new Error('Insufficient funds to withdraw');
        }
        account.balance -= amount;
    }    
}

export default Bank;