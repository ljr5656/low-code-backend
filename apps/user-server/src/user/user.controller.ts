import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOneUserDto, FindAllUserDto } from './dto/find-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('update')
  async update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @Post('findOne')
  async findOne(@Body() findOneUserDto: FindOneUserDto) {
    return this.userService.findOne(findOneUserDto);
  }

  @Post('findAll')
  async findAll(@Body() findAllUserDto: FindAllUserDto) {
    return this.userService.findAll(findAllUserDto);
  }

  @Post('delete')
  async delete(@Body() deleteUserDto: DeleteUserDto) {
    return this.userService.remove(deleteUserDto);
  }
}
