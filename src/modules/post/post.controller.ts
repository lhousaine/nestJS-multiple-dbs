import { PostService } from './post.service';
import { Body, Controller, Param, Post, Get, Delete } from '@nestjs/common';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postService.remove(id);
  }
}
