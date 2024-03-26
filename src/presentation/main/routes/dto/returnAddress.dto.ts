import { AddressEntity } from 'src/domain/entities/address.entity';
import { ReturnCityDto } from './returnCity.dto';

export class ReturnAddressDto {
  address_id: number;
  complement: string;
  number_address: number;
  cep: string;
  city?: ReturnCityDto;

  constructor(address: AddressEntity) {
    this.address_id = address.address_id;
    this.complement = address.complement;
    this.number_address = address.number_address;
    this.cep = address.cep;
    this.city = address.city ? new ReturnCityDto(address.city) : undefined;
  }
}
