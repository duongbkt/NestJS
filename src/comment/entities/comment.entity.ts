import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Comment {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movies',
  })
  movie_id: string;

  @Prop()
  text: string;

  @Prop()
  date: Date;
}
export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);
