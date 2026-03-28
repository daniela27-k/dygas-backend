import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('seed')
  seed() {
    return this.usersService.create('admin@dygas.com', 'admin123');
  }
}