import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindOneUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  id: number;
}

export class FindAllUserDto {}
