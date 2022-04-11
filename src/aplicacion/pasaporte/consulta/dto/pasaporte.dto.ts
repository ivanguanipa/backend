import { ApiProperty } from '@nestjs/swagger';

export class PasaporteDto {
  @ApiProperty({ example: 'William' })
  fullname: string;

  @ApiProperty()
  documentId: number;
}
