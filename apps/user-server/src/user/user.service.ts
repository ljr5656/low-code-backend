import { FindAllUserDto, FindOneUserDto } from './dto/find-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll(findAllUserDto: FindAllUserDto) {
    return this.userRepository.find();
  }

  findOne(findOneUserDto: FindOneUserDto) {
    return this.userRepository.findOneBy({ id: findOneUserDto.id });
  }

  update(updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: updateUserDto.id }, updateUserDto);
  }

  remove(deleteUserDto: DeleteUserDto) {
    return this.userRepository.delete(deleteUserDto.id);
  }
}
