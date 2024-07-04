"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    sayHi() {
        return `${this.nome} say Hi!`;
    }
}
class bankAccount {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    static returnsBankNumber() {
        return 125;
    }
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        this.balance += value;
    }
}
class bankAccountPessoaFisica extends bankAccount {
    deposit(value) {
        this.balance = value * 2;
    }
}
const pedroBankAccount = new bankAccountPessoaFisica(123456);
bankAccount.returnsBankNumber();
