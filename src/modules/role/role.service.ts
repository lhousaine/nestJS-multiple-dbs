import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role, 'roles')
    private readonly rolesRepository: Repository<Role>,
  ) {}

  create(createUserDto) {
    const user = this.rolesRepository.create(createUserDto);
    return this.rolesRepository.save(user);
  }

  findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  findOne(id: string): Promise<Role> {
    return this.rolesRepository.findOne(id);
  }

  remove(id: string) {
    this.rolesRepository.delete(id);
  }
}
