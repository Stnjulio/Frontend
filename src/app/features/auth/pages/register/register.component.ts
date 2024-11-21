import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';
import { IRegister } from '../../../../shared/interfaces/register';
import { Router } from '@angular/router';
import { IPerson } from '../../../../shared/interfaces/person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  // Definindo o formulário de registro
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // Inicializando o formulário com os campos de registro
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      endereco: new FormGroup({
        cep: new FormControl('', [Validators.required]),
        logradouro: new FormControl('', [Validators.required]),
        complemento: new FormControl(''),
        bairro: new FormControl('', [Validators.required]),
        localidade: new FormControl('', [Validators.required]),
        uf: new FormControl('', [Validators.required]),
      })
    });
  }

  // Método para verificar se as senhas coincidem
  public passwordsMatch(): boolean {
    return this.registerForm.value.password === this.registerForm.value.confirmPassword;
  }

  // Método para enviar o formulário
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
          nome: this.registerForm.value.name,
          telefone: this.registerForm.value.telefone,
          
          endereco: {
            cep: this.registerForm.value.endereco.cep,
            logradouro: this.registerForm.value.endereco.logradouro,
            complemento: this.registerForm.value.endereco.complemento,
            bairro: this.registerForm.value.endereco.bairro,
            localidade: this.registerForm.value.endereco.localidade,
            uf: this.registerForm.value.endereco.uf,
          },
                 
        };

        const response = await this.userService.create(data);
        
      } catch (error) {
        // Exibindo erro
        console.log('Erro ao registrar', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
}
