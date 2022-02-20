import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly PostRepository: Repository<Post>,
  ) {}

  create(createPostDto) {
    const newPost = this.PostRepository.create(createPostDto);
    return this.PostRepository.save(newPost);
  }

  findOne(id: number) {
    return this.PostRepository.findOne(id);
  }

  findAll() {
    return this.PostRepository.createQueryBuilder('posts').getMany();
  }

  remove(id: number) {
    this.PostRepository.delete(id);
  }
}
