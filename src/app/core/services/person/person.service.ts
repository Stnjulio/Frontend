// src/app/core/services/person/person.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../../../shared/interfaces/person';
import { environment } from '../../../../env/env';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
   
  constructor(private http: HttpClient) {}

  // Método para criar uma pessoa
  async create(data: IPerson) {
    const { email, telefone, nome, endereco } = data;

    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      const user = await lastValueFrom(
        this.http.post<IPerson>(`${environment.backend_url}/person/create`, 
        { email, telefone, nome, endereco }, { headers })
      );

      if (!user) {
        return false;
      }

      return user;

    } catch (error) {
      console.error('Erro ao criar usuário', error);
      throw new Error('Erro ao criar usuário');
    }
  }

  // Método para buscar uma pessoa pelo ID
  async details(id: string) {
    const token = localStorage.getItem('token');
      
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const people = await lastValueFrom(
      this.http.get<IPerson>(`${environment.backend_url}/person/detail/${id}`, { headers })
    );
    return people;
  }
    
  // Método para listar todas as pessoas
  async list() {
    const token = localStorage.getItem('token');
      
    if (!token) {
      throw new Error('Token não encontrado');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const people = await lastValueFrom(
      this.http.get<IPerson[]>(`${environment.backend_url}/person/list`, { headers })
    );
    {if (!people)
      return [];
    }
    return people;
  }

  // Método para atualizar uma pessoa
  async update(id: string, data: IPerson) {
    console.log(id, data);
    return true;
  }

  // Método para deletar uma pessoa pelo ID
  async delete(id: string) {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      const response = await lastValueFrom(
        this.http.delete(`${environment.backend_url}/person/delete/${id}`, { headers })
      );

      if (!response) {
        return false;
      }
      return true;

    } catch (error) {
      console.error('Erro ao excluir pessoa', error);
      throw new Error('Erro ao excluir pessoa');
    }
  }
}
