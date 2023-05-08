import { DataSource } from 'typeorm';
import { EnvironmentService } from '../configs';

const { db_name, db_password, db_port, db_user, db_host } =
  EnvironmentService.getAll();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: db_host,
        port: db_port,
        username: db_user,
        password: db_password,
        database: db_name,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
