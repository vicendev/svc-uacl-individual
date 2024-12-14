import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DatabaseModule } from './database/database.module';

import { configuration } from './database/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./environments/.env.development.local'],
      load: [configuration]
    }),
    StudentsModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    StudentsModule
  ],
})
export class AppModule {}
