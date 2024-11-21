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

    

  async create(data: IPerson) {
    const { email, telefone, nome, endereco } = data;

    try {
      // Recupera o token do localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      // Configura o cabeçalho com o token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      // Faz a requisição POST com o token no cabeçalho
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
    
  async get(id: string) {
    console.log(id);
    return true;
  }
    
  async list() {

    const token = localStorage.getItem('token');
      
    if (!token) {
      throw new Error('Token não encontrado');
    }

    // Configura o cabeçalho com o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const people = await lastValueFrom(
      this.http.get<IPerson[]>(`${environment.backend_url}/person/list`, { headers })
    )
    return people;
  }
    
  async update(id: string, data: IPerson) {
    console.log(id, data);
    return true;
  }
    
  }

