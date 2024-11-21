import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../../../core/services/activity/activity.service';
import { IActivity } from '../../../../shared/interfaces/activity';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less']
})
export class ActivityComponent implements OnInit {
  activityForm!: FormGroup; // Formulário reativo
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService // Serviço de atividades
  ) {}

  ngOnInit(): void {
    // Inicializando o formulário com validações
    this.activityForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.activityForm.valid) {
      const activityData: IActivity = this.activityForm.value;
      this.activityService.create(activityData).then(() => {
        this.message = 'Atividade criada com sucesso!';
        this.activityForm.reset(); // Resetando o formulário após o sucesso
      }).catch(error => {
        this.message = 'Erro ao criar atividade: ' + error.message;
      });
    } else {
      this.message = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}  