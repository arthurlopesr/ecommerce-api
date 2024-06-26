import { Module } from '@nestjs/common';
import { UserModule } from './presentation/main/modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './presentation/main/modules/city.module';
import { StateModule } from './presentation/main/modules/state.module';
import { AddressModule } from './presentation/main/modules/address.module';
import { UtilCacheModule } from './presentation/main/modules/cache.module';
import { AuthModule } from './presentation/main/modules/auth/auth.module';
import { RolesGuard } from './presentation/guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: String(process.env.DB_PASSWORD),
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      type: 'postgres',
      entities: [`${__dirname}/domain/entities/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/infra/typeorm/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    CityModule,
    StateModule,
    AddressModule,
    UtilCacheModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
