import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../../shared/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  constructor(private http: HttpClient) { }
   
  async login(data: ILogin) {
    console.log(data);
    return true;
  }
   
  async logout(data: ILogin) {
    console.log(data);
    return true;
  }
}
