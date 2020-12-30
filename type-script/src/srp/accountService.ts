import * as moment from 'moment';
import * as numeral from 'numeral';

import { Clock } from './clock';
import { Console } from './console';
import { Transaction } from './transaction';
import { TransactionRepository } from './transactionRepository';

export class AccountService {

    private static readonly STATEMENT_HEADER = "DATE | AMOUNT | BALANCE";
    private static readonly DATE_FORMAT = "DD/MM/YYYY";
    private static readonly AMOUNT_FORMAT = "0.00";

    constructor(
        private transactionRepository: TransactionRepository,
        private clock: Clock, 
        private console: Console
    ) {}
    
    deposit(amount: number): void {
        this.transactionRepository.add(this.transactionWith(amount));
    }

    withdraw(amount: number): void {
        this.transactionRepository.add(this.transactionWith(-amount));
    }

    printStatement(): void {
        this.printHeader();
        this.printTransactions();
    }

    private printHeader(): void {
        this.printLine(AccountService.STATEMENT_HEADER);
    }

    private printTransactions(): void {
        let balance = 0;
        
        this.transactionRepository.all()
        .map(transaction => {
            balance += transaction.amount();
            return this.statementLine(transaction, balance);
        })
        .reverse()
        .forEach(line => this.printLine(line));
    }

    private transactionWith(amount: number): Transaction {
        return new Transaction(this.clock.today(), amount);
    }

    private statementLine(transaction: Transaction, balance: number): string {
        return `${this.formatDate(transaction.date())} | ${this.formatNumber(transaction.amount())} | ${this.formatNumber(balance)}`;
    }

    private formatDate(date: Date): string {
        return moment(date).format(AccountService.DATE_FORMAT);
    }

    private formatNumber(amount: number): string {
        return numeral(amount).format(AccountService.AMOUNT_FORMAT);
    }

    private printLine(line: string): void {
        this.console.printLine(line);
    }
}