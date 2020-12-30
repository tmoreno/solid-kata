import { mock } from 'jest-mock-extended';

import { Clock } from '../../src/srp/clock';
import { Console } from '../../src/srp/console';
import { Transaction } from '../../src/srp/transaction';
import { AccountService } from '../../src/srp/accountService';
import { TransactionRepository } from '../../src/srp/transactionRepository';

const POSITIVE_AMOUNT = 100;
const NEGATIVE_AMOUNT = -POSITIVE_AMOUNT;
const TODAY = new Date(2017, 8, 6);
const TRANSACTIONS = [
    new Transaction(new Date(2014, 3, 1), 1000),
    new Transaction(new Date(2014, 3, 2), -100),
    new Transaction(new Date(2014, 3, 10), 500)
];

let console;
let clock;
let accountService;
let transactionRepository

beforeEach(() => {
    console = mock<Console>();

    clock = mock<Clock>();
    clock.today.mockReturnValue(TODAY);
    
    transactionRepository = mock<TransactionRepository>();

    accountService = new AccountService(transactionRepository, clock, console);
});

test('deposit amount into the account', () => {
    accountService.deposit(POSITIVE_AMOUNT);

    expect(transactionRepository.add).toHaveBeenCalledWith(new Transaction(TODAY, POSITIVE_AMOUNT));
});

test('withdraw amount from the account', () => {
    accountService.withdraw(POSITIVE_AMOUNT);

    expect(transactionRepository.add).toHaveBeenCalledWith(new Transaction(TODAY, NEGATIVE_AMOUNT));
});

test('print statement', () => {
    transactionRepository.all.mockReturnValue(TRANSACTIONS);

    accountService.printStatement();

    expect(console.printLine).toHaveBeenNthCalledWith(1, "DATE | AMOUNT | BALANCE");
    expect(console.printLine).toHaveBeenNthCalledWith(2, "10/04/2014 | 500.00 | 1400.00");
    expect(console.printLine).toHaveBeenNthCalledWith(3, "02/04/2014 | -100.00 | 900.00");
    expect(console.printLine).toHaveBeenNthCalledWith(4, "01/04/2014 | 1000.00 | 1000.00");
});