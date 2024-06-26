import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from '../../../domain/entities/city.entity';
import { CityController } from '../../../presentation/controllers/city.controller';
import { CityService } from '../../../use-cases/services/city/city.service';
import { UtilCacheModule } from './cache.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 999999999,
    }),
    UtilCacheModule,
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
