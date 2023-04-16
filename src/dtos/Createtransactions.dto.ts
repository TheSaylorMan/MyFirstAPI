import { IsNotEmpty, IsNumber, IsString, IsBoolean  } from "class-validator";

export class CreateTransactionDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsBoolean()
    income: boolean;
    
} 