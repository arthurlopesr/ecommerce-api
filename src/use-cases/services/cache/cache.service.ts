import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allDataCached: T = await this.cacheManager.get(key);

    if (allDataCached) {
      return allDataCached;
    }

    const execute: T = await functionRequest();

    await this.cacheManager.set(key, execute);

    return execute;
  }
}
