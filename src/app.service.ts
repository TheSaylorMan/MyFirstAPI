import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/transactions.dto';

@Injectable()
export class AppService {
  transactions = ['Transaction1', 'Transaction2'];

  getHello(): string {
    return 'Hello World!';
  }

  getTransactions(): string[] {
    return this.transactions;
  }

  createTransaction(payload: CreateTransactionDto): CreateTransactionDto {
    this.transactions.push(payload.transactionName);
    return payload;
  }
}
