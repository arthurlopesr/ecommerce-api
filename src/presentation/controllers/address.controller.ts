import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from '../../use-cases/services/address/address.service';
import { CreateAddressDto } from '../main/routes/dto/createAddress.dto';
import { AddressEntity } from '../../domain/entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../enum/user-type';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAddressDto } from '../main/routes/dto/returnAddress.dto';

@Roles(UserType.USER, UserType.ADMIN)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }

  @Get()
  async findAddressByUserId(
    @UserId() userId: number,
  ): Promise<ReturnAddressDto[]> {
    return (await this.addressService.findAddressByUserId(userId)).map(
      (address) => new ReturnAddressDto(address),
    );
  }
}
