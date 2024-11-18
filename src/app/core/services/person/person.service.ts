import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) { }

  async create() {}

  async get() {}

  async list() {}

  async update() {}

  async delete() {}
}
