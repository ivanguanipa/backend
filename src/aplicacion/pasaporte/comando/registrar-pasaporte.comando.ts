import { IsDateString, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarPasaporte {
  @IsString()
  @ApiProperty({ example: 'William' })
  public fullname: string;

  @IsString()
  @ApiProperty()
  public address: string;

  @IsNumber()
  @ApiProperty()
  public document_id: number;

  @ApiProperty()
  public created_at: Date;

  @IsDateString()
  @ApiProperty()
  public application_date: Date;

  @ApiProperty()
  public deleted_at: Date;

  @IsDateString()
  @ApiProperty()
  public birthdate: Date;

  @ApiProperty()
  public appointment_date: Date;

  @ApiProperty({ type: 'float' })
  public amount: number;
}
