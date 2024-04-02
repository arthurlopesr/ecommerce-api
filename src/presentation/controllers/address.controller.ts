import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from 'src/use-cases/services/address/address.service';
import { CreateAddressDto } from '../main/routes/dto/createAddress.dto';
import { AddressEntity } from 'src/domain/entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../enum/user-type';
import { UserId } from '../decorators/user-id.decorator';

@Roles(UserType.USER)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
