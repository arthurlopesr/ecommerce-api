import { AddressEntity } from 'src/domain/entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  number_address: number;
  cep: string;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.number_address = address.number_address;
    this.cep = address.cep;
  }
}
