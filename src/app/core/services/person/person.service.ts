import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../../../shared/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
   
  constructor(private http: HttpClient) {}

    

  async create(data: IPerson) {
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
    
  async update(id: string, data: IPerson) {
    console.log(id, data);
    return true;
  }
    
  async delete(id: string) {
    console.log(id);
    return true;
  }
}
