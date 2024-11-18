import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../../../shared/interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private http: HttpClient) {}

    
  async create(data: IRegister) {
    console.log(data);
    return true;
  }
    
  async get(id: string) {
    console.log(id);
    return true;
  }
    
  async list() {
    return true;
  }
    
  async update(id: string, data: IRegister) {
    console.log(id, data);
    return true;
  }
    
  async delete(id: string) {
    console.log(id);
    return true;
  }
}
