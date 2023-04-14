import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  transactions = ['Transaction1', 'Transaction2']

  getHello(): string {
    return 'Hello World!';
  }

  getTransactions(): string [] {
    return this.transactions;
  }

  createTransaction(payload: any):string {
    this.transactions.push()
  }
}
