import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default [
  {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ['dist/**/*.entity{ .ts,.js}'],
    synchronize: true,
  } as MysqlConnectionOptions,
  {
    type: 'mongodb',
    url: process.env.MONGO_URL,
    host: process.env.MONGO_HOST,
    synchronize: true,
    useUnifiedTopology: true,
    entities: ['dist/**/*.schema{ .ts,.js}'],
    name: 'roles',
  } as MongoConnectionOptions,
];
