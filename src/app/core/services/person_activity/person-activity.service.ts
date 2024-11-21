// src/app/core/services/person-activity/person-activity.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonActivity } from '../../../shared/interfaces/person_activity';
import { environment } from '../../../../env/env';
import { lastValueFrom } from 'rxjs';
import { IPerson } from '../../../shared/interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class PersonActivityService {

  constructor(private http: HttpClient) {}

  // Criar a associação entre pessoa e atividade
  async create(data: { personId: string, activityId: string }) {
    try {

      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }
      
      // Configura o cabeçalho com o token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      await lastValueFrom (       
      this.http.post<IPersonActivity>(`${environment.backend_url}/person_activity/create`, data, { headers }));
    } catch (error) {
      console.error('Erro ao criar a associação', error);
      throw error;
    }
  }
    
  
    
  async list() {

    try {

      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }
      
      // Configura o cabeçalho com o token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      await lastValueFrom (       
      this.http.get<IPersonActivity>(`${environment.backend_url}/person_activity/list`,  { headers }));
    } catch (error) {
      console.error('Erro ao criar a associação', error);
      throw error;
    }
  }
    
      
  async delete(id: string) {
    
    await lastValueFrom (
      this.http.delete(`${environment.backend_url}/person_activity/delete${id}`));
    return true;
  }
}
