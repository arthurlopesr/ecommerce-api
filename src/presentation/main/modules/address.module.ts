import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/domain/entities/address.entity';
import { AddressController } from 'src/presentation/controllers/address.controller';
import { AddressService } from 'src/use-cases/services/address/address.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [],
})
export class AddressModule {}
