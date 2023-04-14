import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDto } from './dtos/transactions.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/transactions')
  getTransactions(): string[] {
    return this.appService.getTransactions();
  }

  @Post('/transactions')
  createTransaction(@Body() payload: CreateTransactionDto): CreateTransactionDto {
    return this.appService.createTransaction(payload);
  }
}
