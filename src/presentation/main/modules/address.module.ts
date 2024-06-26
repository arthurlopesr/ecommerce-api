import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from '../../../domain/entities/address.entity';
import { AddressController } from '../../../presentation/controllers/address.controller';
import { AddressService } from '../../../use-cases/services/address/address.service';
import { UserModule } from './user.module';
import { CityModule } from './city.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UserModule, CityModule],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [],
})
export class AddressModule {}
