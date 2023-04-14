import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/transactions')
  getTransactions(): string[] {
    return this.appService.getTransactions();
  }

  @Post('/transactions')
  createTransaction(): string {
    return this.appService.createTransaction();
  }
}