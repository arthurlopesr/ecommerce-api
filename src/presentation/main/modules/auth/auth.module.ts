import { Module } from '@nestjs/common';
import { AuthController } from '../../../../presentation/controllers/auth.controller';
import { AuthService } from '../../../../use-cases/services/auth/auth.service';
import { UserModule } from '../user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
