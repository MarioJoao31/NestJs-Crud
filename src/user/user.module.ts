import { Get, Module } from '@nestjs/common';

@Module({})
export class UserModule {
  @Get()
  getUsers() {
    return 'retorna os users';
  }
}
