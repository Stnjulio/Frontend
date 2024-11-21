// src/app/features/dashboard/pages/details/details.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../../../core/services/activity/activity.service';
import { PersonService } from '../../../../core/services/person/person.service';
import { PersonActivityService } from '../../../../core/services/person_activity/person-activity.service';
import { IActivity } from '../../../../shared/interfaces/activity';
import { IPerson } from '../../../../shared/interfaces/person';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent implements OnInit {
  detailsForm!: FormGroup;
  people: IPerson[] = [];
  activities: IActivity[] = [];
  message = '';
  selectedPersonDetails: any
  selectedActivityDetails: any;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private activityService: ActivityService,
    private personActivityService: PersonActivityService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPeople();
    this.loadActivities();
    
  }

  // Inicializa o formulário
  private initForm(): void {
    this.detailsForm = this.fb.group({
      personId: ['', Validators.required],
      activityId: ['', Validators.required],
    });
  }

  // Carregar pessoas do backend
  private async loadPeople() {
    try {
      this.people = await this.personService.list();
    } catch (error) {
      console.error('Erro ao carregar pessoas:', error);
    }
  }

  // Carregar atividades do backend
  private async loadActivities() {
    try {
      this.activities = await this.activityService.list();
    } catch (error) {
      console.error('Erro ao carregar atividades:', error);
    }
  }

  // Submeter o formulário
  async onSubmit() {
    if (this.detailsForm.valid) {
      const data = this.detailsForm.value;

      try {
        await this.personActivityService.create(data);
        this.message = 'Vínculo criado com sucesso!';
        this.detailsForm.reset();
      } catch (error) {
        console.error('Erro ao criar vínculo:', error);
        this.message = 'Erro ao criar vínculo.';
      }
    }
  }

  // Deletar pessoa
  async onDeletePerson(id: string) {
    try {
      const success = await this.personService.delete(id);
      if (success) {
        this.message = 'Pessoa excluída com sucesso!';
        this.loadPeople(); // Recarregar a lista de pessoas após exclusão
      } else {
        this.message = 'Erro ao excluir pessoa.';
      }
    } catch (error) {
      this.message = 'Erro ao excluir pessoa.';
      console.error('Erro ao excluir pessoa:', error);
    }
  }

  // Deletar atividade
  async onDeleteActivity(id: string) {
    try {
      const success = await this.activityService.delete(id);
      if (success) {
        this.message = 'Atividade excluída com sucesso!';
        this.loadActivities(); // Recarregar a lista de atividades após exclusão
      } else {
        this.message = 'Erro ao excluir atividade.';
      }
    } catch (error) {
      this.message = 'Erro ao excluir atividade.';
      console.error('Erro ao excluir atividade:', error);
    }
  }



 async onDetailPerson(id: string) {
  try {
    const success = await this.personService.details(id);
    if (success) {
      this.message = '';
      this.loadPeople(); 
    } else {
      this.message = 'Erro ao exibir detalhes da pessoa.';
    }
  } catch (error) {
    this.message = 'Erro ao exibir.';
    console.error('Erro ao exibir detalhes da pessoa2:', error);
  }
}

 async onDetailActivity(id: string) {
  try {
    const success = await this.activityService.details(id);
    if (success) {
      this.message = '';
      this.loadActivities()
    } else {
      this.message = 'Erro ao exibir detalhes da atividade.';
    }
  } catch (error) {
    this.message = 'Erro ao exibir detalhes.';
    console.error('Erro ao exibir detalhes da atividade2:', error);
  }
}
async loadPersonDetails(id: string) {
  try {
    this.selectedPersonDetails = await this.personService.details(id);
    this.message = '';
  } catch (error) {
    this.message = 'Erro ao carregar detalhes da pessoa.';
    console.error('Erro:', error);
  }
}

async loadActivityDetails(id: string) {
  try {
    this.selectedActivityDetails = await this.activityService.details(id);
    this.message = '';
  } catch (error) {
    this.message = 'Erro ao carregar detalhes da atividade.';
    console.error('Erro:', error);
  }
}

}
