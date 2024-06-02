import { ApiProperty } from '@nestjs/swagger';
import { Todo } from './todo.schema';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class TodoDto implements Todo {
  @ApiProperty()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  completed: boolean;

  //   @IsOptional()
  //   @IsBoolean()
  //   isDeleted?: boolean;
}
