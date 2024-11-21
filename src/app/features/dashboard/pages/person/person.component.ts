//src/app/features/dashboard/pages/person/person.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../../core/services/person/person.service';
import { IPerson } from '../../../../shared/interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent {

  personForm!: FormGroup;  // Formulário para criar uma pessoa
  message= '';  // Mensagem de sucesso ou erro

  constructor(
    private fb: FormBuilder,  // Serviço para criar formulários reativos
    private personService: PersonService  // Serviço para manipulação de dados da pessoa
  ) {
    this.createForm();
  }

  // Criação do formulário com o campo endereco sendo um objeto IAddress
  private createForm() {
    this.personForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        cep: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        localidade: ['', [Validators.required]],
        uf: ['', [Validators.required]],
      })
    });
  }

  // Função para submeter o formulário e criar a pessoa
  async onSubmit() {
    if (this.personForm.valid) {
      try {
        const personData: IPerson = this.personForm.value;
        await this.personService.create(personData);
        this.message = 'Pessoa criada com sucesso';
      } catch (error) {
        console.error('Erro ao criar pessoa', error);
        this.message = 'Erro ao criar pessoa';
      }
    } else {
      this.message = 'Formulário inválido';
    }
  }
}
