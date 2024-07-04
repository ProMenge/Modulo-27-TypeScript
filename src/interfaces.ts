//Interface não é algo visual - é um contrato - uma junção de regras que uma classe deve aplicar
//Por exemplo, um veoculo DEVE acelerar e freiar para ser considerado uma veiculo 

class Account {

    accountNumber: number;
    balance: number = 0;

    constructor(accountNumber: number) {

        this.accountNumber = accountNumber;
    }
}

class SalaryAccount extends Account {

    deposit(value: number) {
        this.balance += value;
    }
}

interface ITransactional {
    transfer: (value: number, destiny: Account) => boolean;
    TransferTax: number;
}

interface Icnpj {

    cnpj: number;
}

interface IPhoneNumber extends Icnpj {

    phoneNumber: number;
}

class currentAccount extends Account implements ITransactional {
    transfer(value: number, destiny: Account) {
        destiny.balance += (value - this.TransferTax)
        return true
    };
    TransferTax: number = 0;
}