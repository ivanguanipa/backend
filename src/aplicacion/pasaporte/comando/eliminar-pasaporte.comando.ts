import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoEliminarPasaporte {
  @IsNumber()
  @ApiProperty({ example: 1 })
  public id: number;
}
