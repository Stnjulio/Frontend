import { Component } from '@angular/core';
import { ILogin } from '../../../../shared/interfaces/auth';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  // Definindo o formulário de login
  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private authService: AuthService) {
    // Inicializando o formulário com os campos 'email' e 'password'
    this.loginForm = new FormGroup({
      
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) 
    });
  }

  // Método para enviar o formulário
  async login() {
    if (this.loginForm.valid) {
      try {
        const data: ILogin = this.loginForm.value;

        // Chamando o serviço de login com os dados do formulário
        const response = await this.authService.login(data);

        // Sucesso no login (aqui você pode redirecionar, exibir mensagem, etc.)
        console.log('Login bem-sucedido', response);

        this.router.navigate(['/details']);  // Redireciona para a página de detalhes

      } catch (error) {
        // Exibindo erro
        console.log('Erro ao fazer login', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
  
}
