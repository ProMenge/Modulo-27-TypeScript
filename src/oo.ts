class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }



    sayHi(): string {
        return `${this.nome} say Hi!`
    }


}

class bankAccount {
    protected balance: number = 0;
    accountNumber: number;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }

    static returnsBankNumber() {
        return 125;
    }

    private getBalance() {
        return this.balance;
    }

    deposit(value: number) {
        this.balance += value;
    }
}

class bankAccountPessoaFisica extends bankAccount {

    deposit(value: number): void {
        this.balance = value * 2;
    }
}

const pedroBankAccount = new bankAccountPessoaFisica(123456)
bankAccount.returnsBankNumber();