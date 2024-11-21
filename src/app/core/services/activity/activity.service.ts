//src/app/core/services/activity/activity.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../env/env';
import { IActivity } from '../../../shared/interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  

  constructor(private http: HttpClient) {}

  // Método para criar uma atividade
  async create(data: IActivity) {
    const { name, description, startDate, endDate,  } = data;

    try {
      // Recupera o token do localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      // Configura o cabeçalho com o token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      // Faz a requisição POST com o token no cabeçalho
      const activity = await lastValueFrom(
        this.http.post<IActivity>(`${environment.backend_url}/activity/create`, 
        { name, description, startDate, endDate,}, { headers })
      );

      if (!activity) {
        return false;
      }

      return activity;

    } catch (error) {
      console.error('Erro ao criar atividade', error);
      throw new Error('Erro ao criar atividade');
    }
  }

  // Método para buscar uma atividade pelo ID
  async get(id: string) {
    const activity = await lastValueFrom(
      this.http.get<IActivity>(`${environment.backend_url}/activity/detail${id}`)
    );
    if (!activity) {
      return false;
    }
    return activity;
  }

  // Método para listar todas as atividades
  async list() {
    const token = localStorage.getItem('token');
      
    if (!token) {
      throw new Error('Token não encontrado');
    }

    // Configura o cabeçalho com o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const activities = await lastValueFrom(
      this.http.get<IActivity[]>(`${environment.backend_url}/activity/list`, { headers })
    );
    if (!activities) {
      return [];
    }
    return activities;
  }

  // Método para deletar uma atividade pelo ID
  async delete(id: string) {
    const response = await lastValueFrom(
      this.http.delete(`${environment.backend_url}/activity/delete${id}`)
    );
    if (!response) {
      return false;
    }
    return true;
  }
}
