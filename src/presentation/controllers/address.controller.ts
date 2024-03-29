import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddressService } from 'src/use-cases/services/address/address.service';
import { CreateAddressDto } from '../main/routes/dto/createAddress.dto';
import { AddressEntity } from 'src/domain/entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../enum/user-type';

@Roles(UserType.USER)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
