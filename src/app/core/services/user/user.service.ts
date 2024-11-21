import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../env/env';
import { IRegister } from '../../../shared/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Método para criar um usuário
  async create(data: IRegister) {
    const {
      name, email, password, telefone, nome, endereco
    } = data;
    try {
      const user = await lastValueFrom(
        this.http.post<IRegister>(`${environment.backend_url}/user/create`, {name, email, password, telefone, nome, endereco})
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
    
  // Métodos para buscar, listar e deletar usuários seguem aqui...
}
