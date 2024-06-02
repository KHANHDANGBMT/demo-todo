import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async getTodo(todoId: string) {
    return await this.todoModel.findById(todoId);
  }

  async createTodo(todo: any) {
    return (await this.todoModel.create(todo)).toJSON();
  }

  async deleteTodo(todoId: any) {
    const todo = await this.todoModel
      .findById(new mongoose.Types.ObjectId(todoId))
      .lean();

    return await this.todoModel.updateOne(
      { _id: todo._id },
      {
        isDeleted: true,
      },
    );
  }

  async list() {
    const listTodos = await this.todoModel.find({ isDeleted: false }).lean();
    return listTodos;
  }

  async triggerCompleteTodo(todoId: string) {
    const todo = await this.todoModel
      .findById(new mongoose.Types.ObjectId(todoId))
      .lean();

    return await this.todoModel.updateOne(
      { _id: todo._id },
      {
        completed: !todo.completed,
      },
    );
  }
}
