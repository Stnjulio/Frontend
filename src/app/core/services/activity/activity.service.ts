import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivity } from '../../../shared/interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
   
  constructor(private http: HttpClient) {}

    
  async create(data: IActivity) {
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
    
  async update(id: string, data: IActivity) {
    console.log(id, data);
    return true;
  }
    
  async delete(id: string) {
    console.log(id);
    return true;
  }
}
