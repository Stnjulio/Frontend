//src/app/features/auth/pages/register/register.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';
import { IRegister } from '../../../../shared/interfaces/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // Inicializando o formulário com os campos de registro
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      complemento: new FormControl(''),
      bairro: new FormControl('', [Validators.required]),
      localidade: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required])
      
    });
  }

  // Verifica se as senhas coincidem
  passwordsMatch(): boolean {
    return this.registerForm.value.password === this.registerForm.value.confirmPassword;
  }

  // Enviar o formulário
  async register() {
    if (this.registerForm.valid) {
      if (!this.passwordsMatch()) {
        console.log('As senhas não coincidem');
        return;
      }

      try {
        const data: IRegister = {
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          nome: this.registerForm.value.nome,
          telefone: this.registerForm.value.telefone,
          endereco: {
            cep: this.registerForm.value.cep,
            logradouro: this.registerForm.value.logradouro,
            complemento: this.registerForm.value.complemento,
            bairro: this.registerForm.value.bairro,
            localidade: this.registerForm.value.localidade,
            uf: this.registerForm.value.uf,
          }
        };

        await this.userService.create(data);
        this.router.navigate(['/auth/login']); // Redireciona para o login após o registro
      } catch (error) {
        console.log('Erro ao registrar', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
}
