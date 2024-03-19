import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsNumber()
  number_address: number;

  @IsString()
  cep: string;

  @IsNumber()
  city_id: number;
}
