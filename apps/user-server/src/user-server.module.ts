import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from 'lib/common/src/utils';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    UserModule,
    AuthModule,
    RoleModule,
    UserRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class UserServerModule {}
