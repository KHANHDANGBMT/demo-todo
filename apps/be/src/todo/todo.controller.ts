import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.servce';
import { TodoDto } from './todo.dto';

@Controller({
  version: '1',
  path: 'todo',
})
@ApiTags('Todo ')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get('/list')
  @ApiOperation({ summary: 'list all todo' })
  listPagination() {
    return this.todoService.list();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get todo details' })
  getTodo(@Param('id') id: string): string {
    return 'get todo details';
  }

  @Post('')
  @ApiOperation({ summary: 'create todo' })
  async createTodo(@Body() todo: TodoDto): Promise<any> {
    return await this.todoService.createTodo(todo);
  }

  @Put('/:id')
  async triggerCompleteTodo(@Param('id') id: string) {
    return await this.todoService.triggerCompleteTodo(id);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTodo(id);
  }
}
