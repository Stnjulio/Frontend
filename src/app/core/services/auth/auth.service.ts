import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) { }

  async login() { }

  async logout() { }
}
