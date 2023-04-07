import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://duong:jIEEmtVRSgwlGQiV@cluster0.c6egu.mongodb.net/sample_mflix?retryWrites=true&w=majority',
    ),
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
