import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
//recebe de fora e passa as informacoes para o .service e como o service é uma class
//é preciso ser instanciada para depois fazer o precessamento e passar para fora a informação
//Neste ficheiro usamos as funcoes do service

// Type: POST //
// Route: /auth //
@Controller('auth')
export class AuthController {
  //chama o Authservice e instacia-o aqui e da lhe o nome de authService
  constructor(private authService: AuthService) {}

  //cria uma rota post
  // Type: POST //
  // Route: /auth/signup //

  @Post('signup')
  signUp() {}
}
