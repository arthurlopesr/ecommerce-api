import { Module } from '@nestjs/common';
import { CacheService } from 'src/use-cases/services/cache/cache.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 999999999,
    }),
  ],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export class UtilCacheModule {}
