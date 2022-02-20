import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { Role } from './role.schema';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role], 'roles')],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
