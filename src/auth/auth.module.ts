import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    //passar controladores do mesmo
  controllers: [AuthController],
  //passar o servicos do mesmo
  providers: [AuthService],
})
//o ficheiro .module é o ficheiro inde se junta a logica toda de uma rota
export class AuthModule {}
