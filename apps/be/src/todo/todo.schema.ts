import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({ timestamps: true, _id: true })
export class Todo {
  @Prop()
  name: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ default: false })
  isDeleted?: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
