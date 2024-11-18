import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonActivity } from '../../../shared/interfaces/person_activity';

@Injectable({
  providedIn: 'root'
})
export class PersonActivityService {

   
  constructor(private http: HttpClient) {}

    
  async create(data: IPersonActivity) {
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
    
  async update(id: string, data: IPersonActivity) {
    console.log(id, data);
    return true;
  }
    
  async delete(id: string) {
    console.log(id);
    return true;
  }
}
