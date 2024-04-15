import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './entities/user.providers';
import { DatabaseModule } from 'lib/common/src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
