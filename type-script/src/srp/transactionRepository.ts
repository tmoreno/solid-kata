import { Transaction } from './transaction';

export interface TransactionRepository {
    add(transaction: Transaction): void;
    all(): Array<Transaction>;
}