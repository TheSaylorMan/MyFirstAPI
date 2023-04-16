import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/Createtransactions.dto';
import { TransactionResponseDto } from './dtos/transactionResponse.dto';
import { ResponseTodos } from './dtos/ResponseTodos.dto';
import { CreateTodos } from './dtos/CreateTodos.dto';

@Injectable()
export class AppService {
  transactions = [
    {
      id: 1,
      name: 'transaction 1',
      amount: 100,
      income: true,
    },
    {
      id: 2,
      name: 'transaction 12',
      amount: 200,
      income: true,
    },
  ];

  todos: ResponseTodos[] = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Nil',
      completed: true,
    },
    {
      id: 2,
      title: 'Title 1',
      completed: true,
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getTodos(): ResponseTodos[] {
    return this.todos;
  }

  getTransactions(): TransactionResponseDto[] {
    return this.transactions;
  }

  deleteSingleTransaction(id: number): TransactionResponseDto {
    const transactionToReturn = this.transactions.find(
      (transaction) => id === transaction.id,
    );

    this.transactions = this.transactions.filter(
      (transaction) => id !== transaction.id,
    );

    return transactionToReturn;
  }

  createTransaction(payload: CreateTransactionDto): TransactionResponseDto {
    this.transactions.push(payload);
    return payload;
  }

  updateTransaction(
    id: number,
    payload: CreateTransactionDto,
  ): TransactionResponseDto {
    this.transactions = this.transactions.filter(
      (transaction) => id !== transaction.id,
    );

    this.transactions.push(payload);

    return payload;
  }

  createTodo(payload: CreateTodos): ResponseTodos {
    this.todos.push(payload);
    return payload;
  }

  deleteSingleTodo(id: number): ResponseTodos {
    const todoReturn = this.todos.find((todo) => id === todo.id);

    this.todos = this.todos.filter((todo) => id !== todo.id);

    return todoReturn;
  }

  updateTodo(id: number, payload: CreateTodos): ResponseTodos {
    this.todos = this.todos.filter((todo) => id !== todo.id);

    this.todos.push(payload);

    return payload;
  }
}
