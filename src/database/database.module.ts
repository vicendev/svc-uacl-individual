import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigService sea accesible globalmente
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: 'mariadb',
        host: config.get<string>("db_host"),
        port: config.get<number>("db_port"),
        username: config.get<string>("db_username"),
        password: config.get<string>("db_password"),
        database: config.get<string>("db_database"),
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
  ],
})
export class DatabaseModule {}