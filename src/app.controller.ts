import {
  Body,
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Delete,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDto } from './dtos/Createtransactions.dto';
import { TransactionResponseDto } from './dtos/transactionResponse.dto';
import { CreateTodos } from './dtos/CreateTodos.dto';
import { ResponseTodos } from './dtos/ResponseTodos.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/transactions')
  getTransactions(): TransactionResponseDto[] {
    return this.appService.getTransactions();
  }

  @Post('/transactions')
  createTransaction(
    @Body() payload: CreateTransactionDto,
  ): TransactionResponseDto {
    return this.appService.createTransaction(payload);
  }

  @Delete('/transactions/:id')
  deleteSingleTransaction(
    @Param('id', ParseIntPipe) id,
  ): TransactionResponseDto {
    return this.appService.deleteSingleTransaction(id);
  }

  @Put('/transactions/:id')
  updateTransaction(
    @Param('id', ParseIntPipe) id,
    @Body() payload: CreateTransactionDto,
  ): TransactionResponseDto {
    return this.appService.updateTransaction(id, payload);
  }

  @Get('/todos')
  getTodos(): ResponseTodos[] {
    return this.appService.getTodos();
  }

  @Post('/todos')
  createTodo(@Body() payload: CreateTodos): ResponseTodos {
    return this.appService.createTodo(payload);
  }

  @Delete('/todos/:id')
  deleteSingleTodo(@Param('id', ParseIntPipe) id): ResponseTodos {
    return this.appService.deleteSingleTodo(id);
  }

  @Put('/todos/:id')
  updateTodos(
    @Param('id', ParseIntPipe) id,
    @Body() payload: CreateTodos,
  ): ResponseTodos {
    return this.appService.updateTodo(id, payload);
  }
}
