import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3309,
  username: 'root',
  password: 'Typscript@@2026',
  database: 'Login-Users',
  entities: [User],
  migrations: ['src/mysql-database/migrations/*.js'],
  migrationsTableName: 'createUser_migration_table',
});
