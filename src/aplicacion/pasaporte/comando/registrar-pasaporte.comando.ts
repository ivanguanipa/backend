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
  public documentId: number;

  @ApiProperty()
  public createdAt: Date;

  @IsDateString()
  @ApiProperty()
  public applicationDate: Date;

  @ApiProperty()
  public deletedAt: Date;

  @IsDateString()
  @ApiProperty()
  public birthdate: Date;

  @ApiProperty()
  public appointmentDate: Date;

  @ApiProperty({ type: 'float' })
  public amount: number;
}
