import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'Typscript@@2026',
      database: 'Login-Users',
      autoLoadEntities: true,
      logging: true,
    }),
  ],
})
export class MysqlDatabaseModule {}
