import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { MysqlDatabaseModule } from './mysql-database/mysql-database.module';

@Module({
  imports: [UsersModule, CommonModule, MysqlDatabaseModule],
})
export class AppModule {}
