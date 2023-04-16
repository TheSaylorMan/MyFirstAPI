import { IsNotEmpty, IsNumber, IsString, IsBoolean  } from "class-validator";


export class CreateTodos {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string

    @IsString()
    description?: string;
    
    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;
}