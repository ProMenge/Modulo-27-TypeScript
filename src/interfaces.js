"use strict";
//Interface não é algo visual - é um contrato - uma junção de regras que uma classe deve aplicar
//Por exemplo, um veoculo DEVE acelerar e freiar para ser considerado uma veiculo 
class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
}
class SalaryAccount extends Account {
    deposit(value) {
        this.balance += value;
    }
}
class currentAccount extends Account {
    constructor() {
        super(...arguments);
        this.TransferTax = 0;
    }
    transfer(value, destiny) {
        destiny.balance += (value - this.TransferTax);
        return true;
    }
    ;
}
