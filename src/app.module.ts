import { User } from './modules/user/user.enity';
import { Post } from './modules/post/post.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { Role } from './modules/role/role.schema';
import { ConfigModule } from '@nestjs/config';
import connectConfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...connectConfig[0],
      entities: [User, Post]
    }),
    TypeOrmModule.forRoot({
      ...connectConfig[1],
      entities: [Role],
    } as any),
    PostModule,
    UserModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
