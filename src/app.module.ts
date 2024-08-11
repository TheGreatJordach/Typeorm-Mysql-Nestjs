import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { MysqlDatabaseModule } from './mysql-database/mysql-database.module';
import { LoggerModule } from './logger/logger.module';
import { DatabaseLoggerService } from './logger/logger.service';

@Module({
  imports: [UsersModule, CommonModule, MysqlDatabaseModule, LoggerModule],
  providers: [DatabaseLoggerService],
})
export class AppModule {}
