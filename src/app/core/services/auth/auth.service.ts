import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../../shared/interfaces/auth';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../env/env';

@Injectable({  
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(data: ILogin) {
    const {email, password} = data
    const {accessToken, refreshToken} = await lastValueFrom (this.http.post<any>(`${environment.backend_url}/auth/login`, {email, password} ))

    if (!accessToken)return false;
    //slavar token na local storage
    localStorage.setItem('token', accessToken)



      
    //to do: incluir token na storagem local
      return true;
    }

   async logout () {
    localStorage.removeItem('token');
    console.log('')
   }
  }