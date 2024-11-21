//src/app/features/dashboard/pages/details/details.component.ts
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
  message: string = '';

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
}
