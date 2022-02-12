import { User } from './user.enity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  remove(id: number) {
    this.usersRepository.delete(id);
  }
}
