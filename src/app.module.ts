import { Module } from '@nestjs/common';
import { UserModule } from './presentation/main/modules/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.developemnt.local'],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
