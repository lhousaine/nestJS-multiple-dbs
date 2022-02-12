import { User } from './modules/user/user.enity';
import { Post } from './modules/post/post.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { Role } from './modules/role/role.entity';
import { ConfigModule } from '@nestjs/config';

const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  synchronize: true,
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'users_db',
      entities: [User],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'posts_db',
      name: 'posts',
      entities: [Post],
    } as any),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Role],
      name: 'roles',
    } as any),
    PostModule,
    UserModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
