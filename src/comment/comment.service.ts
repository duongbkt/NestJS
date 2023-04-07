import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  async findAll() {
    return await this.commentModel.find().limit(20);
  }

  async findOne(id: string) {
    return await this.commentModel.findById(id).exec();
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.commentModel.findOneAndUpdate({ _id: id }, updateCommentDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.commentModel.findOneAndDelete({ _id: id });
  }
}
